"use client";
import { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type NodeState = "idle" | "active" | "done";

interface NodeDef {
  id: string;
  label: string;
  icon: string;
  type: string;
}

const NODES: NodeDef[] = [
  { id: "cron", label: "Cron", icon: "⏰", type: "trigger" },
  { id: "sap", label: "SAP Tool", icon: "🗄️", type: "tool" },
  { id: "llm", label: "LLM", icon: "✦", type: "llm" },
  { id: "condition", label: "Condition", icon: "◇", type: "logic" },
  { id: "sf", label: "Salesforce", icon: "☁", type: "tool" },
  { id: "output", label: "Output", icon: "📤", type: "output" },
];

const DURATIONS: Record<string, string> = {
  cron: "42ms",
  sap: "812ms",
  llm: "1.1s",
  condition: "48ms",
  sf: "621ms",
  output: "12ms",
};

interface Step {
  time: number;
  action: "activate" | "complete";
  nodeId: string;
}

const STEPS: Step[] = [
  { time: 0, action: "activate", nodeId: "cron" },
  { time: 500, action: "complete", nodeId: "cron" },
  { time: 600, action: "activate", nodeId: "sap" },
  { time: 1400, action: "complete", nodeId: "sap" },
  { time: 1500, action: "activate", nodeId: "llm" },
  { time: 2600, action: "complete", nodeId: "llm" },
  { time: 2700, action: "activate", nodeId: "condition" },
  { time: 3000, action: "complete", nodeId: "condition" },
  { time: 3100, action: "activate", nodeId: "sf" },
  { time: 3700, action: "complete", nodeId: "sf" },
  { time: 3800, action: "activate", nodeId: "output" },
  { time: 4000, action: "complete", nodeId: "output" },
];

const LOG_LINES = [
  { time: 550, icon: "✓", text: "trigger/cron: next run in 23:59:18" },
  { time: 1450, icon: "✓", text: "sap/read_vbak: 47 records" },
  { time: 2650, icon: "✓", text: "llm/synthesize: model=claude-3-5-sonnet" },
  { time: 3050, icon: "→", text: "condition: revenue_gap > threshold → true" },
  { time: 3750, icon: "✓", text: "salesforce/update_opportunity: 3 records updated" },
  { time: 4050, icon: "✓", text: "output/emit: report sent to CFO dashboard" },
];

function NodeCard({
  node,
  state,
  isActive,
}: {
  node: NodeDef;
  state: NodeState;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-lg border px-3 py-2 flex flex-col items-center gap-1 w-[76px] transition-all duration-300",
        state === "active" &&
          "border-aurora-1 shadow-[0_0_12px_rgba(91,141,239,0.4)] bg-bg-elev-2",
        state === "done" && "border-green/40 bg-green/5",
        state === "idle" && "border-border-soft bg-bg-elev-1"
      )}
    >
      {/* Status indicator */}
      <div className="absolute -top-1.5 -right-1.5 h-3 w-3">
        {state === "active" && (
          <motion.span
            className="block h-3 w-3 rounded-full bg-aurora-1"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 1.1 }}
          />
        )}
        {state === "done" && (
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-green text-[8px] text-bg-base font-bold">
            ✓
          </span>
        )}
      </div>

      <span
        className={cn(
          "text-base leading-none",
          state === "idle" && "opacity-40",
          node.id === "llm" && "font-mono text-xs font-bold text-aurora-2 opacity-100"
        )}
      >
        {node.icon}
      </span>
      <span
        className={cn(
          "text-[10px] font-medium text-center leading-tight",
          state === "active" && "text-aurora-1",
          state === "done" && "text-green",
          state === "idle" && "text-text-muted"
        )}
      >
        {node.label}
      </span>

      {/* Duration badge when done */}
      {state === "done" && (
        <span className="text-[9px] font-mono text-text-muted">{DURATIONS[node.id]}</span>
      )}

      {/* Synthesizing label for LLM active */}
      {state === "active" && node.id === "llm" && (
        <span className="text-[9px] text-aurora-2 text-center leading-tight">Synthesizing…</span>
      )}
    </div>
  );
}

interface ArrowProps {
  active: boolean;
}

function Arrow({ active }: ArrowProps) {
  return (
    <div className="relative flex items-center" style={{ width: 32 }}>
      <svg width="32" height="40" viewBox="0 0 32 40" className="text-border-soft">
        <line
          x1="0"
          y1="20"
          x2="26"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <polygon points="26,16 32,20 26,24" fill="currentColor" />
      </svg>
      {active && (
        <motion.span
          className="absolute top-1/2 h-2 w-2 rounded-full bg-aurora-1 -translate-y-1/2 -translate-x-1/2"
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

export function WorkflowBuilderDemo() {
  const [nodeStates, setNodeStates] = useState<Record<string, NodeState>>(() =>
    Object.fromEntries(NODES.map((n) => [n.id, "idle" as NodeState]))
  );
  const [activeArrow, setActiveArrow] = useState<number | null>(null);
  const [logLines, setLogLines] = useState<typeof LOG_LINES>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  function reset() {
    clearTimers();
    setRunning(false);
    setDone(false);
    setNodeStates(Object.fromEntries(NODES.map((n) => [n.id, "idle" as NodeState])));
    setActiveArrow(null);
    setLogLines([]);
  }

  function play() {
    reset();
    setRunning(true);

    // Node state transitions
    STEPS.forEach(({ time, action, nodeId }) => {
      const t = setTimeout(() => {
        setNodeStates((prev) => ({ ...prev, [nodeId]: action === "activate" ? "active" : "done" }));

        // Arrow animation: when a node completes, animate its outgoing arrow
        if (action === "complete") {
          const idx = NODES.findIndex((n) => n.id === nodeId);
          if (idx < NODES.length - 1) {
            setActiveArrow(idx);
            const clearArrow = setTimeout(() => setActiveArrow(null), 450);
            timersRef.current.push(clearArrow);
          }
        }
      }, time);
      timersRef.current.push(t);
    });

    // Log lines
    LOG_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setLogLines((prev) => [...prev, line]);
      }, line.time);
      timersRef.current.push(t);
    });

    // Completion
    const doneTimer = setTimeout(() => {
      setRunning(false);
      setDone(true);
    }, 4200);
    timersRef.current.push(doneTimer);
  }

  // Cleanup on unmount
  useEffect(() => () => clearTimers(), []);

  return (
    <div className="w-full space-y-4 font-sans select-none">
      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={play}
          disabled={running}
          className={cn(
            "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all",
            running
              ? "bg-bg-elev-2 text-text-muted cursor-not-allowed"
              : "bg-aurora-1 text-white hover:opacity-90 active:opacity-80"
          )}
        >
          <Play size={13} />
          {running ? "Running…" : "Play"}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 rounded-lg border border-border-soft bg-bg-elev-1 px-3 py-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors"
        >
          <RotateCcw size={13} />
          Reset
        </button>
        {running && (
          <div className="flex items-center gap-1.5 text-xs text-aurora-1">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-aurora-1"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
            />
            Executing…
          </div>
        )}
      </div>

      {/* DAG row */}
      <div className="overflow-x-auto pb-1">
        <div className="flex items-center gap-0 min-w-max">
          {NODES.map((node, i) => (
            <div key={node.id} className="flex items-center">
              <NodeCard
                node={node}
                state={nodeStates[node.id] ?? "idle"}
                isActive={nodeStates[node.id] === "active"}
              />
              {i < NODES.length - 1 && <Arrow active={activeArrow === i} />}
            </div>
          ))}
        </div>
      </div>

      {/* Execution log */}
      <div className="rounded-lg border border-border-soft bg-bg-elev-1 p-3 space-y-1 min-h-[100px]">
        <p className="text-xs font-medium text-text-muted uppercase tracking-wide mb-2">
          Execution Log
        </p>
        <AnimatePresence>
          {logLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-2"
            >
              <span
                className={cn(
                  "text-xs font-mono shrink-0 mt-px",
                  line.icon === "✓" ? "text-green" : "text-aurora-2"
                )}
              >
                {line.icon}
              </span>
              <span className="text-xs font-mono text-text-secondary">{line.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {logLines.length === 0 && !running && !done && (
          <p className="text-xs text-text-muted font-mono">Press Play to start the workflow…</p>
        )}
      </div>

      {/* Completion banner */}
      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-4 rounded-lg border border-green/30 bg-green/5 px-4 py-3"
          >
            <span className="text-sm font-semibold text-green">Workflow complete</span>
            <div className="flex flex-wrap gap-3 text-xs text-text-secondary">
              <span className="flex items-center gap-1">
                <Clock size={11} className="text-text-muted" />
                Run #1,284
              </span>
              <span className="text-text-muted">·</span>
              <span>4.1s total</span>
              <span className="text-text-muted">·</span>
              <span>2 tools</span>
              <span className="text-text-muted">·</span>
              <span>1 LLM call</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
