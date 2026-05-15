"use client";
import { useState, useEffect, useRef } from "react";
import { Shield, Check, Minus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type PermLevel = "full" | "partial" | "none" | "restricted";

interface RolePolicy {
  models: PermLevel;
  mcpServers: PermLevel;
  tools: PermLevel;
  dataScope: PermLevel;
  auditLog: PermLevel;
  details: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const DIMENSIONS: { key: keyof Omit<RolePolicy, "details">; label: string }[] =
  [
    { key: "models", label: "Models" },
    { key: "mcpServers", label: "MCP Servers" },
    { key: "tools", label: "Tools" },
    { key: "dataScope", label: "Data Scope" },
    { key: "auditLog", label: "Audit Log" },
  ];

const ROLES: {
  id: string;
  label: string;
  policy: RolePolicy;
}[] = [
  {
    id: "admin",
    label: "Admin",
    policy: {
      models: "full",
      mcpServers: "full",
      tools: "full",
      dataScope: "full",
      auditLog: "full",
      details: [
        "Access all Claude models including previews",
        "Connect any registered MCP server",
        "Execute all tools without restriction",
        "Query across every data domain",
        "Export full audit trail (90-day retention)",
      ],
    },
  },
  {
    id: "finance",
    label: "Finance Analyst",
    policy: {
      models: "full",
      mcpServers: "partial",
      tools: "partial",
      dataScope: "full",
      auditLog: "partial",
      details: [
        "SAP Claude model tier only",
        "SAP HANA + Salesforce MCP servers",
        "Read-only tool execution (no writes)",
        "Finance & billing data domains",
        "Own session audit log only",
      ],
    },
  },
  {
    id: "sales",
    label: "Sales Rep",
    policy: {
      models: "full",
      mcpServers: "partial",
      tools: "partial",
      dataScope: "restricted",
      auditLog: "none",
      details: [
        "Salesforce model tier only",
        "Salesforce CRM MCP server only",
        "Read-only tool execution",
        "CRM data scope — no financial access",
        "No audit log visibility",
      ],
    },
  },
  {
    id: "auditor",
    label: "Auditor",
    policy: {
      models: "full",
      mcpServers: "none",
      tools: "none",
      dataScope: "full",
      auditLog: "full",
      details: [
        "Any registered model (read queries only)",
        "No MCP server connections permitted",
        "No tool execution — view-only mode",
        "Read-only across all data domains",
        "Full audit log export capability",
      ],
    },
  },
  {
    id: "developer",
    label: "Developer",
    policy: {
      models: "full",
      mcpServers: "partial",
      tools: "full",
      dataScope: "restricted",
      auditLog: "partial",
      details: [
        "Any registered model including experimental",
        "Dev-environment MCP servers only",
        "All tools enabled in sandbox context",
        "Sandbox data scope — prod isolated",
        "Own session audit log only",
      ],
    },
  },
];

interface AuditTemplate {
  user: string;
  action: string;
  resource: string;
  result: string;
}

const AUDIT_ENTRIES: AuditTemplate[] = [
  {
    user: "sarah.chen@corp",
    action: "agent.run",
    resource: "sap_financial_close",
    result: "allowed",
  },
  {
    user: "james.liu@corp",
    action: "tool.call",
    resource: "salesforce.opportunity.write",
    result: "denied — scope: CRM read-only",
  },
  {
    user: "priya.sharma@corp",
    action: "model.invoke",
    resource: "claude-3-5-sonnet",
    result: "allowed",
  },
  {
    user: "mike.torres@corp",
    action: "mcp.connect",
    resource: "sap-hana-prod",
    result: "denied — role: Sales Rep",
  },
  {
    user: "admin@corp",
    action: "policy.update",
    resource: "finance_analyst.data_scope",
    result: "updated",
  },
  {
    user: "audit-bot@corp",
    action: "log.export",
    resource: "q3_audit_trail.csv",
    result: "allowed",
  },
  {
    user: "dev@corp",
    action: "agent.run",
    resource: "sandbox_workflow_47",
    result: "allowed — sandbox only",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resultColor(result: string) {
  if (result.startsWith("denied")) return "text-red-400";
  if (result.startsWith("allowed")) return "text-green";
  return "text-amber";
}

function PermIcon({ level }: { level: PermLevel }) {
  switch (level) {
    case "full":
      return <Check className="w-3.5 h-3.5 text-green" strokeWidth={2.5} />;
    case "partial":
      return <Minus className="w-3.5 h-3.5 text-amber" strokeWidth={2.5} />;
    case "restricted":
      return (
        <span className="text-amber text-xs leading-none font-bold">◆</span>
      );
    case "none":
      return <X className="w-3.5 h-3.5 text-red-400" strokeWidth={2.5} />;
  }
}

function permBg(level: PermLevel) {
  switch (level) {
    case "full":
      return "bg-green/10";
    case "partial":
      return "bg-amber/10";
    case "restricted":
      return "bg-amber/5";
    case "none":
      return "bg-red-400/10";
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function GovernanceDemo() {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);
  const [auditLog, setAuditLog] = useState<
    { ts: string; user: string; action: string; resource: string; result: string }[]
  >([]);
  const logRef = useRef<HTMLDivElement>(null);
  const entryIndexRef = useRef(0);

  // Seed two initial entries immediately
  useEffect(() => {
    const seed = AUDIT_ENTRIES.slice(0, 2).map((e) => ({
      ...e,
      ts: new Date().toLocaleTimeString(),
    }));
    setAuditLog(seed);
    entryIndexRef.current = 2;
  }, []);

  // Emit a new audit entry every 2 seconds
  useEffect(() => {
    const id = setInterval(() => {
      const idx = entryIndexRef.current % AUDIT_ENTRIES.length;
      const src = AUDIT_ENTRIES[idx] as AuditTemplate;
      const entry: { ts: string; user: string; action: string; resource: string; result: string } = {
        ts: new Date().toLocaleTimeString(),
        user: src.user,
        action: src.action,
        resource: src.resource,
        result: src.result,
      };
      entryIndexRef.current += 1;
      setAuditLog((prev) => [...prev.slice(-20), entry]);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // Auto-scroll log to bottom on new entry
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [auditLog]);

  const selectedRole = ROLES.find((r) => r.id === selectedRoleId) ?? null;

  return (
    <div className="w-full rounded-xl border border-border-soft bg-bg-elev-1 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-soft">
        <Shield className="w-4 h-4 text-aurora-2" />
        <span className="text-text-secondary text-sm font-medium">
          Zero-Trust Governance
        </span>
        <span className="ml-auto text-text-muted text-xs">
          Click a role to inspect its policy
        </span>
      </div>

      {/* Matrix + detail panel */}
      <div className="flex min-h-[240px]">
        {/* Permission Matrix */}
        <div className="flex-1 overflow-x-auto p-4">
          <table className="w-full text-xs border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left text-text-muted font-normal pb-2 pr-3 w-28">
                  Role
                </th>
                {DIMENSIONS.map((d) => (
                  <th
                    key={d.key}
                    className="text-center text-text-muted font-normal pb-2 px-2 whitespace-nowrap"
                  >
                    {d.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROLES.map((role, ri) => {
                const isSelected = role.id === selectedRoleId;
                return (
                  <tr
                    key={role.id}
                    onClick={() =>
                      setSelectedRoleId(
                        isSelected ? null : role.id
                      )
                    }
                    className={cn(
                      "cursor-pointer transition-colors duration-150 rounded-lg",
                      isSelected
                        ? "bg-aurora-2/10"
                        : "hover:bg-bg-elev-2"
                    )}
                  >
                    {/* Role label */}
                    <td
                      className={cn(
                        "py-2 pr-3 font-medium rounded-l-lg pl-2 transition-colors",
                        isSelected
                          ? "text-aurora-2"
                          : "text-text-primary"
                      )}
                    >
                      {role.label}
                    </td>

                    {/* Permission cells */}
                    {DIMENSIONS.map((d, di) => {
                      const level = role.policy[d.key];
                      const isLast = di === DIMENSIONS.length - 1;
                      return (
                        <td
                          key={d.key}
                          className={cn(
                            "py-2 px-2 text-center",
                            isLast ? "rounded-r-lg" : ""
                          )}
                        >
                          <div
                            className={cn(
                              "inline-flex items-center justify-center w-6 h-6 rounded-md",
                              permBg(level)
                            )}
                          >
                            <PermIcon level={level} />
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Legend */}
          <div className="flex gap-4 mt-3 text-[10px] text-text-muted pl-2">
            <span className="flex items-center gap-1">
              <Check className="w-2.5 h-2.5 text-green" strokeWidth={3} /> Full
            </span>
            <span className="flex items-center gap-1">
              <Minus className="w-2.5 h-2.5 text-amber" strokeWidth={3} /> Partial
            </span>
            <span className="flex items-center gap-1">
              <span className="text-amber text-[8px] font-bold">◆</span>{" "}
              Restricted
            </span>
            <span className="flex items-center gap-1">
              <X className="w-2.5 h-2.5 text-red-400" strokeWidth={3} /> None
            </span>
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {selectedRole && (
            <motion.div
              key={selectedRole.id}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden border-l border-border-soft bg-bg-elev-2 shrink-0"
            >
              <div className="p-4 w-[200px]">
                <p className="text-aurora-2 text-xs font-semibold mb-3">
                  {selectedRole.label}
                </p>
                <ul className="space-y-2">
                  {selectedRole.policy.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-text-secondary leading-snug"
                    >
                      <span className="text-aurora-2/60 mt-0.5 shrink-0">
                        ·
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Audit log feed */}
      <div className="border-t border-border-soft bg-bg-base">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border-soft">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
          </span>
          <span className="text-text-muted text-[11px] font-medium uppercase tracking-wider">
            Live Audit Feed
          </span>
        </div>

        <div
          ref={logRef}
          aria-live="polite"
          className="h-[120px] overflow-y-auto px-4 py-2 space-y-1 font-mono text-[11px]"
        >
          <AnimatePresence initial={false}>
            {auditLog.map((entry, i) => (
              <motion.div
                key={`${entry.ts}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex gap-2 items-baseline flex-wrap"
              >
                <span className="text-text-muted shrink-0">{entry.ts}</span>
                <span className="text-text-tertiary shrink-0">
                  {entry.user}
                </span>
                <span className="text-aurora-2 shrink-0">{entry.action}</span>
                <span className="text-text-secondary shrink-0">
                  {entry.resource}
                </span>
                <span
                  className={cn(
                    "shrink-0 font-medium",
                    resultColor(entry.result)
                  )}
                >
                  → {entry.result}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
