"use client";
import { useState, useRef } from "react";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SIMULATION_LABEL = "simulation";

const DEMO_QUERY = "What is Q3 revenue forecast vs SAP billing reconciliation?";

interface SimulatedStep {
  ms: number;
  text: string;
  type: string;
}

const SIMULATED_STEPS: SimulatedStep[] = [
  { ms: 300, text: "Connecting to SAP S/4HANA via MCP...", type: "step" },
  { ms: 800, text: "Querying VBAK (sales orders) for Q3 2026...", type: "step" },
  { ms: 1200, text: "Connecting to Salesforce via MCP...", type: "step" },
  { ms: 1700, text: "Querying Opportunity pipeline (Q3 close date)...", type: "step" },
  { ms: 2200, text: "Running hybrid RAG on financial policy documents...", type: "step" },
  { ms: 2800, text: "Synthesizing with Claude 3.5 Sonnet...", type: "step" },
  {
    ms: 3400,
    text: `**Q3 2026 Revenue Forecast vs Billing Reconciliation**

SAP S/4HANA (VBAK): $47.2M billed revenue, 94.3% collected
Salesforce Pipeline: $52.8M forecast (commit: $38.1M, upside: $14.7M)

**Gap analysis:** $5.6M pipeline-to-billing gap. Primary drivers:
- 3 enterprise deals ($4.1M) slipped to Q4 — order confirmation pending in SAP
- $1.5M professional services recognized over 6-month delivery schedule

**Recommendation:** Commit figure of $38.1M is achievable. Upside dependent on 2 deals currently in legal review.

*Sources: SAP VBAK (47 records), Salesforce Opportunity (23 records), Revenue Recognition Policy v4.2*`,
    type: "answer",
  },
];

interface Step {
  text: string;
  type: string;
}

export function AIDemoIsland() {
  const [query, setQuery] = useState("");
  const [running, setRunning] = useState(false);
  const [steps, setSteps] = useState<Step[]>([]);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const runDemo = () => {
    setRunning(true);
    setSteps([]);
    setDone(false);

    SIMULATED_STEPS.forEach(({ ms, text, type }) => {
      setTimeout(() => {
        setSteps((prev) => [...prev, { text, type }]);
        if (type === "answer") {
          setRunning(false);
          setDone(true);
        }
      }, ms);
    });
  };

  const reset = () => {
    setSteps([]);
    setDone(false);
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="rounded-xl border border-border-soft bg-bg-elev-1 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-soft bg-bg-elev-2">
        <Sparkles size={14} className="text-aurora-1" />
        <span className="text-xs font-medium text-text-secondary">NXπ Agent · SAP + Salesforce Fusion</span>
        <span className="ml-auto text-xs text-text-muted border border-amber/30 bg-amber/10 text-amber rounded px-1.5 py-0.5">
          {SIMULATION_LABEL}
        </span>
      </div>

      {/* Steps */}
      {steps.length > 0 && (
        <div className="px-4 py-4 space-y-2 max-h-80 overflow-y-auto">
          {steps.map((step, i) => (
            <div key={i}>
              {step.type === "step" ? (
                <p className="text-xs text-text-muted font-mono flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-aurora-1 animate-pulse flex-shrink-0" />
                  {step.text}
                </p>
              ) : (
                <div className="mt-4 rounded-lg bg-bg-elev-2 border border-border-soft p-4">
                  <p className="text-xs text-text-muted mb-2 uppercase tracking-[0.1em]">Agent response</p>
                  <div className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap font-mono">
                    {step.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-3 flex gap-3">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !running) runDemo();
          }}
          placeholder={DEMO_QUERY}
          disabled={running || done}
          className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none disabled:opacity-50"
          aria-label="Ask the NXπ agent a question (simulation)"
        />
        {done ? (
          <button
            onClick={reset}
            className="text-xs text-aurora-1 hover:text-aurora-2 transition-colors whitespace-nowrap"
          >
            Reset
          </button>
        ) : (
          <button
            onClick={runDemo}
            disabled={running}
            className={cn(
              "p-1.5 rounded-lg transition-colors",
              running ? "text-text-muted" : "text-aurora-1 hover:bg-aurora-1/10"
            )}
            aria-label="Run agent simulation"
          >
            <Send size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
