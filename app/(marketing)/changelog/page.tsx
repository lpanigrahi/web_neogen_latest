import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Changelog",
  description: "NXπ release history and platform updates.",
};

const releases = [
  {
    version: "1.2",
    date: "2026-09-01",
    title: "Q3 2026 — EU AI Act Compliance Dashboard",
    badge: "Latest",
    badgeColor: "text-aurora-1 bg-aurora-1/10 border-aurora-1/30",
    items: [
      {
        label: "EU AI Act readiness dashboard",
        description:
          "Automated compliance assessment against the 6 high-risk requirements. Exportable compliance report for regulators and board review.",
      },
      {
        label: "Enhanced audit log",
        description:
          "Extended retention options, cross-system correlation, tamper-evident timestamps, and compliance export in EU AI Act technical documentation format.",
      },
      {
        label: "SOC 2 alignment",
        description:
          "Audit log structure aligned with SOC 2 Type II requirements. Automated evidence collection for access controls, change management, and availability monitoring.",
      },
      {
        label: "Chargeback dashboard",
        description:
          "Per-team, per-workflow token cost attribution. Budget alerts and spend forecasting. CFO-ready reporting.",
      },
    ],
  },
  {
    version: "1.1",
    date: "2026-06-01",
    title: "Q2 2026 — SAP + Salesforce Connectors",
    badge: null,
    badgeColor: "",
    items: [
      {
        label: "SAP HANA Cloud MCP connector",
        description:
          "Native integration with SAP HANA Cloud via MCP. Real-time data access, no replication. Joule-compatible.",
      },
      {
        label: "Salesforce MCP connector",
        description:
          "Agentforce-native integration. Access Opportunities, Accounts, Cases, and custom objects through MCP. Bi-directional tool support.",
      },
      {
        label: "Visual Workflow Builder",
        description:
          "DAG-based workflow automation with 9 node types: Input, Output, LLM, Tool, Condition, HTTP, Template, Agent, Note. Cron, webhook, and API triggers.",
      },
      {
        label: "Finance-specific reasoning flows",
        description:
          "Pre-built workflows for: margin analysis, variance analysis, financial reconciliation, working capital insights, and scenario modeling against SAP data.",
      },
    ],
  },
  {
    version: "1.0",
    date: "2026-03-25",
    title: "Q1 2026 — Foundation Release",
    badge: "GA",
    badgeColor: "text-aurora-3 bg-aurora-3/10 border-aurora-3/30",
    items: [
      {
        label: "MCP Integration Fabric",
        description:
          "NXπ is a first-class MCP host. Connect SAP HANA Cloud, S/4HANA, Salesforce, and any MCP-compatible system through the open protocol. Native support for SSE and WebSocket transports.",
      },
      {
        label: "Hybrid RAG",
        description:
          "Vector search + BM25 with Reciprocal Rank Fusion. Default retrieval strategy achieves 91%+ recall@10. Source attribution on every answer.",
      },
      {
        label: "Agent Builder",
        description:
          "Create single agents and multi-agent pipelines. Token accounting per agent per run. Full call tree in the audit log.",
      },
      {
        label: "Zero-Trust Governance",
        description:
          "Per-user RBAC, label-based policies, MCP server scoping, model allowlists, PII detection and masking, append-only audit log.",
      },
      {
        label: "Self-hosted deployment",
        description:
          "Run NXπ entirely within your infrastructure. PostgreSQL + pgvector + Ollama. Nothing leaves your perimeter.",
      },
    ],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="border-b border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20 lg:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-3 py-1 text-xs text-text-tertiary mb-6">
              Changelog
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight leading-[1.08]">
              Release history
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary max-w-xl">
              What ships in NXπ, when it ships, and why it matters for enterprise AI deployments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] top-3 bottom-0 w-px bg-border-soft"
              aria-hidden="true"
            />

            <div className="space-y-16">
              {releases.map((release, i) => (
                <FadeIn key={release.version} delay={i * 0.07}>
                  <div className="relative pl-8">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-aurora-1 bg-bg-base"
                      aria-hidden="true"
                    />

                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <time
                        dateTime={release.date}
                        className="text-xs text-text-muted font-mono"
                      >
                        {formatDate(release.date)}
                      </time>
                      <span className="text-xs font-mono text-text-muted">v{release.version}</span>
                      {release.badge && (
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${release.badgeColor}`}
                        >
                          {release.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-text-primary mb-6">{release.title}</h2>

                    <ul className="space-y-5">
                      {release.items.map((item) => (
                        <li key={item.label} className="flex gap-3">
                          <div
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-1"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="text-sm font-semibold text-text-primary mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
