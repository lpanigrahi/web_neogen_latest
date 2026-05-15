"use client";
import { useState } from "react";
import { Search, Zap } from "lucide-react";
import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

const QUERY = "Q3 sales pipeline reconciliation against SAP billing";

const vectorMatches = [
  { doc: "Q3 Revenue Recognition Policy v4.2", score: "0.91" },
  { doc: "SAP Billing Reconciliation Guide", score: "0.87" },
  { doc: "Salesforce Pipeline Close Methodology", score: "0.84" },
  { doc: "Financial Close Checklist Q3 2026", score: "0.79" },
  { doc: "Revenue Forecast vs Actuals Template", score: "0.76" },
];

const bm25Matches = [
  { doc: "Q3 SAP billing export", score: "18.4" },
  { doc: "Pipeline reconciliation procedure", score: "15.2" },
  { doc: "Q3 sales close criteria", score: "12.8" },
  { doc: "SAP VBAK billing document Q3", score: "11.1" },
  { doc: "Salesforce opportunity stage mapping", score: "9.7" },
];

const rrfResults = [
  { doc: "Q3 Revenue Recognition Policy v4.2", star: true },
  { doc: "SAP Billing Reconciliation Guide", star: true },
  { doc: "Pipeline reconciliation procedure", star: false },
  { doc: "Q3 sales close criteria", star: false },
  { doc: "Q3 SAP billing export", star: false },
];

const sources = [
  "Q3 Revenue Recognition Policy v4.2",
  "SAP Billing Reconciliation Guide",
  "Salesforce Pipeline Close Methodology",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const colTransition: Transition = { duration: 0.45, ease: "easeOut" as const };
const colVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: colTransition },
};

const answerTransition: Transition = { duration: 0.5, ease: "easeOut" as const, delay: 0.6 };
const answerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: answerTransition },
};

function MatchRow({ doc, score, accent }: { doc: string; score: string; accent: string }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1 border-b border-border-soft last:border-0">
      <span className="text-xs text-text-secondary truncate flex-1">{doc}</span>
      <span className={cn("text-xs font-mono font-medium shrink-0", accent)}>{score}</span>
    </div>
  );
}

export function HybridRAGDemo() {
  const [query, setQuery] = useState(QUERY);
  const [submitted, setSubmitted] = useState(false);

  function handleSearch() {
    if (query.trim()) setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setQuery(QUERY);
  }

  return (
    <div className="w-full space-y-4 font-sans select-none">
      {/* Search bar */}
      <div className="flex gap-2">
        <div className="flex-1 flex items-center gap-2 rounded-lg border border-border-soft bg-bg-elev-1 px-3 py-2">
          <Search size={14} className="text-text-tertiary shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none min-w-0"
            placeholder="Enter search query…"
          />
        </div>
        <button
          onClick={handleSearch}
          className="flex items-center gap-1.5 rounded-lg bg-aurora-1 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
        >
          <Search size={14} />
          Search
        </button>
        {submitted && (
          <button
            onClick={handleReset}
            className="px-3 py-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      {/* Results columns */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="results"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {/* Column 1 — Vector */}
            <motion.div
              variants={colVariants}
              className="rounded-lg border border-border-soft bg-bg-elev-1 p-3 space-y-2"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="h-2 w-2 rounded-full bg-aurora-1 shrink-0" />
                <span className="text-xs font-semibold text-aurora-1 uppercase tracking-wide">
                  Vector (Semantic)
                </span>
              </div>
              {vectorMatches.map((m, i) => (
                <MatchRow
                  key={i}
                  doc={`${i + 1}. ${m.doc}`}
                  score={`${m.score}`}
                  accent="text-aurora-1"
                />
              ))}
            </motion.div>

            {/* Column 2 — BM25 */}
            <motion.div
              variants={colVariants}
              className="rounded-lg border border-border-soft bg-bg-elev-1 p-3 space-y-2"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="h-2 w-2 rounded-full bg-aurora-3 shrink-0" />
                <span className="text-xs font-semibold text-aurora-3 uppercase tracking-wide">
                  BM25 (Keyword)
                </span>
              </div>
              {bm25Matches.map((m, i) => (
                <MatchRow
                  key={i}
                  doc={`${i + 1}. ${m.doc}`}
                  score={m.score}
                  accent="text-aurora-3"
                />
              ))}
            </motion.div>

            {/* Column 3 — RRF Fusion */}
            <motion.div
              variants={colVariants}
              className="rounded-lg border border-border-soft bg-bg-elev-1 p-3 space-y-2"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="h-2 w-2 rounded-full bg-aurora-2 shrink-0" />
                <span className="text-xs font-semibold text-aurora-2 uppercase tracking-wide">
                  RRF Fusion
                </span>
              </div>
              {/* RRF equation */}
              <div className="rounded-md bg-bg-elev-2 border border-border-soft px-2 py-1.5 mb-2">
                <p className="text-xs font-mono text-aurora-2 text-center">
                  RRF(d) = Σ 1 / (k + rank<sub>i</sub>(d))
                </p>
                <p className="text-xs text-text-muted text-center mt-0.5">k = 60</p>
              </div>
              {rrfResults.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-2 py-1 border-b border-border-soft last:border-0"
                >
                  <span className="text-xs text-text-secondary truncate flex-1">
                    {i + 1}. {m.doc}
                  </span>
                  {m.star && (
                    <span className="text-aurora-2 text-xs shrink-0">★</span>
                  )}
                </div>
              ))}
              {/* Recall stat */}
              <div className="flex items-center justify-between mt-1 pt-1 border-t border-border-soft">
                <span className="text-xs text-text-muted">Recall@10</span>
                <span className="text-xs font-semibold text-green">91.3%</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final answer card */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            key="answer"
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            className="rounded-lg border border-border-soft bg-bg-elev-1 border-l-2 border-l-aurora-1 p-4 space-y-3"
          >
            <div className="flex items-center gap-2 mb-1">
              <Zap size={14} className="text-aurora-1 shrink-0" />
              <span className="text-xs font-semibold text-aurora-1 uppercase tracking-wide">
                Synthesized Answer
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Q3 revenue reconciliation gap:{" "}
              <span className="text-text-primary font-medium">$5.6M</span> across{" "}
              <span className="text-text-primary font-medium">3 enterprise deals</span>. Primary cause: SAP
              billing recognition delayed pending customer sign-off on change orders. Salesforce
              opportunity stage: <span className="text-amber font-medium">Commit</span>. Recommended
              action: escalate to CFO for Q3 accrual decision.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 border-t border-border-soft">
              <span className="text-xs text-text-muted mr-1">Sources:</span>
              {sources.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-border-soft bg-bg-elev-2 px-2 py-0.5 text-xs text-text-tertiary"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted && (
        <p className="text-xs text-text-muted text-center pt-1">
          Press Search or hit Enter to run the hybrid retrieval demo
        </p>
      )}
    </div>
  );
}
