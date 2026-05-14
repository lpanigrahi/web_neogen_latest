"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ROICalculator() {
  const [workers, setWorkers] = useState(500);
  const [aiSpend, setAiSpend] = useState(200000);
  const [processes, setProcesses] = useState(20);

  const annualSavings = Math.round(
    workers * 2500 * 0.3 + aiSpend * 0.35 + processes * 15000
  );
  const roiMultiple = ((annualSavings / (aiSpend + 120000)) + 1).toFixed(1);

  return (
    <div className={cn("rounded-xl border border-border-soft bg-bg-elev-1 p-8")}>
      <h3 className="text-lg font-semibold text-text-primary mb-6">ROI Calculator</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-text-secondary mb-2">
            Knowledge workers:{" "}
            <span className="text-text-primary font-medium">{workers.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={50}
            max={5000}
            step={50}
            value={workers}
            onChange={(e) => setWorkers(Number(e.target.value))}
            className="w-full accent-aurora-1"
            aria-label="Number of knowledge workers"
          />
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-2">
            Current annual AI tool spend:{" "}
            <span className="text-text-primary font-medium">${aiSpend.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={10000}
            max={2000000}
            step={10000}
            value={aiSpend}
            onChange={(e) => setAiSpend(Number(e.target.value))}
            className="w-full accent-aurora-1"
            aria-label="Current annual AI tool spend"
          />
        </div>

        <div>
          <label className="block text-sm text-text-secondary mb-2">
            Business processes to automate:{" "}
            <span className="text-text-primary font-medium">{processes}</span>
          </label>
          <input
            type="range"
            min={1}
            max={100}
            step={1}
            value={processes}
            onChange={(e) => setProcesses(Number(e.target.value))}
            className="w-full accent-aurora-1"
            aria-label="Business processes to automate"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-bg-elev-2 p-4">
          <p className="text-xs text-text-muted mb-1">Projected annual savings</p>
          <p className="text-2xl font-bold text-green">${annualSavings.toLocaleString()}</p>
        </div>
        <div className="rounded-lg bg-bg-elev-2 p-4">
          <p className="text-xs text-text-muted mb-1">ROI multiple (12–18 months)</p>
          <p className="text-2xl font-bold text-aurora-1">{roiMultiple}x</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-text-muted">
        Based on industry benchmarks: 1.7x average enterprise AI ROI, 26–31% cost savings,
        2–4 hours/day knowledge worker efficiency gain.
      </p>
    </div>
  );
}
