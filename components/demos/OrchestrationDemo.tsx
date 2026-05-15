"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, RotateCcw, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type AgentStatus = "idle" | "running" | "done";

interface AgentState {
  sap: AgentStatus;
  sf: AgentStatus;
  merger: AgentStatus;
}

interface LogLine {
  id: number;
  text: string;
}

const AGENT_INFO = {
  sap: {
    name: "SAP Agent",
    detail: "VBAK · VBAP tables",
    colorActive: "border-aurora-1 shadow-aurora-1/20",
    colorDone: "border-green",
    labelActive: "text-aurora-1",
    labelDone: "text-green",
    badgeActive: "bg-aurora-1/10 text-aurora-1 border-aurora-1/30",
    badgeDone: "bg-green/10 text-green border-green/30",
  },
  sf: {
    name: "Salesforce Agent",
    detail: "Opportunity · Account",
    colorActive: "border-aurora-3 shadow-aurora-3/20",
    colorDone: "border-green",
    labelActive: "text-aurora-3",
    labelDone: "text-green",
    badgeActive: "bg-aurora-3/10 text-aurora-3 border-aurora-3/30",
    badgeDone: "bg-green/10 text-green border-green/30",
  },
  merger: {
    name: "Merger Agent",
    detail: "Synthesizes · Reports",
    colorActive: "border-aurora-2 shadow-aurora-2/20",
    colorDone: "border-green",
    labelActive: "text-aurora-2",
    labelDone: "text-green",
    badgeActive: "bg-aurora-2/10 text-aurora-2 border-aurora-2/30",
    badgeDone: "bg-green/10 text-green border-green/30",
  },
};

const CALL_TREE = [
  { depth: 0, icon: "▼", text: "orchestration_run_a7f2", mono: true },
  { depth: 1, icon: "▼", text: "sap_agent (1.2s)", mono: true },
  { depth: 2, icon: "→", text: "tool: read_vbak (412ms)", mono: false },
  { depth: 2, icon: "→", text: "tool: read_vbap (388ms)", mono: false },
  { depth: 1, icon: "▼", text: "salesforce_agent (0.9s)", mono: true },
  { depth: 2, icon: "→", text: "tool: query_opportunity (521ms)", mono: false },
  { depth: 1, icon: "▼", text: "merger_agent (1.1s)", mono: true },
  { depth: 2, icon: "→", text: "tool: cross_reference (687ms)", mono: false },
  { depth: 2, icon: "✓", text: "result: gap_report", mono: false, success: true },
];

const SCRIPT: Array<{ t: number; action: () => void }> = []; // built dynamically per run

export function OrchestrationDemo() {
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle");
  const [agents, setAgents] = useState<AgentState>({ sap: "idle", sf: "idle", merger: "idle" });
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [treeLines, setTreeLines] = useState(0);
  const [tokens, setTokens] = useState(0);
  const logRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const rafRef = useRef<number | null>(null);
  const logCounter = useRef(0);

  const addLog = useCallback((text: string) => {
    const id = ++logCounter.current;
    setLogs((prev) => [...prev, { id, text }]);
  }, []);

  // Auto-scroll logs
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setPhase("idle");
    setAgents({ sap: "idle", sf: "idle", merger: "idle" });
    setLogs([]);
    setTreeLines(0);
    setTokens(0);
    logCounter.current = 0;
  }, []);

  const run = useCallback(() => {
    reset();
    setPhase("running");

    const at = (ms: number, fn: () => void) => {
      timers.current.push(setTimeout(fn, ms));
    };

    // t=0: SAP running
    at(0, () => setAgents((a) => ({ ...a, sap: "running" })));
    at(0, () => setTreeLines(1)); // root line
    at(200, () => setTreeLines(2)); // sap_agent line

    // t=400: first SAP log
    at(400, () => addLog("→ SAP Agent: connecting to VBAK..."));
    at(450, () => setTreeLines(3)); // read_vbak

    // t=800: second SAP log
    at(800, () => addLog("→ SAP Agent: 47 records retrieved"));
    at(850, () => setTreeLines(4)); // read_vbap

    // t=900: SAP done, SF starts
    at(900, () => setAgents((a) => ({ ...a, sap: "done", sf: "running" })));
    at(950, () => setTreeLines(5)); // salesforce_agent

    // t=1200: SF log 1
    at(1200, () => addLog("→ SF Agent: querying Opportunity pipeline..."));
    at(1250, () => setTreeLines(6)); // query_opportunity

    // t=1700: SF log 2
    at(1700, () => addLog("→ SF Agent: 23 opportunities matched"));

    // t=1800: SF done, merger starts
    at(1800, () => setAgents((a) => ({ ...a, sf: "done", merger: "running" })));
    at(1850, () => setTreeLines(7)); // merger_agent

    // t=2000: merger log 1
    at(2000, () => addLog("→ Merger: cross-referencing billing vs pipeline..."));
    at(2050, () => setTreeLines(8)); // cross_reference

    // t=2500: merger log 2
    at(2500, () => addLog("→ Merger: gap identified — $5.6M in 3 deals"));
    at(2600, () => setTreeLines(9)); // result

    // t=3000: all done
    at(3000, () => {
      setAgents((a) => ({ ...a, merger: "done" }));
      setPhase("done");
    });

    // Token counter: 0→2847 over 3000ms via rAF
    const start = performance.now();
    const TARGET = 2847;
    const DURATION = 3000;
    const tick = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / DURATION, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setTokens(Math.round(eased * TARGET));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [reset, addLog]);

  const getAgentCard = (key: keyof AgentState) => {
    const info = AGENT_INFO[key];
    const status = agents[key];
    const isRunning = status === "running";
    const isDone = status === "done";
    const isIdle = status === "idle";

    return (
      <motion.div
        key={key}
        className={cn(
          "relative flex flex-col gap-1.5 rounded-lg border px-3 py-2.5 transition-all duration-300",
          "bg-bg-elev-2",
          isRunning && `${info.colorActive} shadow-lg`,
          isDone && info.colorDone,
          isIdle && "border-border-soft"
        )}
        animate={isRunning ? { scale: [1, 1.015, 1] } : { scale: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        {/* Status badge */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "text-[9px] font-semibold px-1.5 py-0.5 rounded-full border uppercase tracking-widest",
              isIdle && "bg-border-soft/20 text-text-muted border-border-soft/30",
              isRunning && info.badgeActive,
              isDone && info.badgeDone
            )}
          >
            {isRunning ? "Running" : isDone ? "Done" : "Idle"}
          </span>
          {isRunning && (
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" style={{ color: "currentColor" }} />
          )}
          {isDone && <span className="text-[10px] text-green">✓</span>}
        </div>

        <p
          className={cn(
            "text-[11px] font-semibold",
            isIdle && "text-text-tertiary",
            isRunning && info.labelActive,
            isDone && "text-green"
          )}
        >
          {info.name}
        </p>
        <p className="text-[9px] text-text-muted font-mono">{info.detail}</p>
      </motion.div>
    );
  };

  return (
    <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-4 select-none">
      {/* Header + controls */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-text-secondary tracking-widest uppercase">
          Multi-Agent Orchestration
        </p>
        <div className="flex items-center gap-2">
          {tokens > 0 && (
            <span className="text-[10px] text-text-muted font-mono">
              {tokens.toLocaleString()} tokens
            </span>
          )}
          {phase === "idle" && (
            <button
              onClick={run}
              className="flex items-center gap-1.5 rounded-lg bg-aurora-2/10 border border-aurora-2/30 px-3 py-1.5 text-[11px] font-semibold text-aurora-2 hover:bg-aurora-2/20 transition-colors"
            >
              <Play className="h-3 w-3" />
              Run
            </button>
          )}
          {phase === "running" && (
            <span className="flex items-center gap-1.5 text-[11px] text-aurora-2 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-2 animate-pulse" />
              Running…
            </span>
          )}
          {phase === "done" && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 rounded-lg bg-border-soft/10 border border-border-soft px-3 py-1.5 text-[11px] font-semibold text-text-tertiary hover:text-text-secondary transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Agent cards row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {(["sap", "sf", "merger"] as const).map((k) => getAgentCard(k))}
      </div>

      {/* Divider */}
      <div className="border-t border-border-soft mb-3" />

      {/* Console + Call tree */}
      <div className="grid grid-cols-2 gap-3 min-h-[140px]">
        {/* Console */}
        <div className="flex flex-col">
          <p className="text-[9px] text-text-muted uppercase tracking-widest font-mono mb-1.5">Console</p>
          <div
            ref={logRef}
            className="flex-1 rounded-lg bg-bg-base border border-border-soft p-2.5 overflow-y-auto font-mono text-[10px] space-y-1"
            style={{ maxHeight: "140px" }}
          >
            {logs.length === 0 ? (
              <span className="text-text-muted">$ awaiting run…</span>
            ) : (
              <AnimatePresence initial={false}>
                {logs.map((line) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "leading-relaxed",
                      line.text.includes("gap identified")
                        ? "text-aurora-1 font-semibold"
                        : line.text.includes("records retrieved") || line.text.includes("opportunities matched")
                        ? "text-green"
                        : "text-text-secondary"
                    )}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Call tree */}
        <div className="flex flex-col">
          <p className="text-[9px] text-text-muted uppercase tracking-widest font-mono mb-1.5">Call Tree</p>
          <div
            className="flex-1 rounded-lg bg-bg-base border border-border-soft p-2.5 overflow-y-auto font-mono text-[10px] space-y-0.5"
            style={{ maxHeight: "140px" }}
          >
            {treeLines === 0 ? (
              <span className="text-text-muted">$ awaiting run…</span>
            ) : (
              <AnimatePresence initial={false}>
                {CALL_TREE.slice(0, treeLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center leading-relaxed"
                    style={{ paddingLeft: `${line.depth * 10}px` }}
                  >
                    <span
                      className={cn(
                        "mr-1 shrink-0",
                        line.icon === "✓" ? "text-green" : "text-text-muted"
                      )}
                    >
                      {line.icon}
                    </span>
                    <span
                      className={cn(
                        line.icon === "✓"
                          ? "text-green font-semibold"
                          : line.depth === 0
                          ? "text-aurora-2 font-semibold"
                          : line.depth === 1
                          ? "text-text-secondary"
                          : "text-text-tertiary"
                      )}
                    >
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>

      {/* Result card */}
      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-3 rounded-lg border border-aurora-1/30 bg-aurora-1/5 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold text-aurora-1 uppercase tracking-widest mb-1">
                  Gap Report · gap_report_a7f2
                </p>
                <p className="text-[12px] font-semibold text-text-primary">
                  $5.6M revenue gap identified across 3 deals
                </p>
                <p className="text-[10px] text-text-tertiary mt-0.5">
                  SAP billing closed · Salesforce still open — cross-system mismatch
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-green/10 border border-green/30 px-2 py-1 text-[10px] font-mono text-green whitespace-nowrap">
                2,847 tokens · 3.1s · $0.004
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
