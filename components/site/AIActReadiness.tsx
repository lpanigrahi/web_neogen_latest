"use client";
import { useState } from "react";
import { CheckCircle, Circle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Question {
  id: string;
  question: string;
  risk: string;
  requirement: string;
  guidance: string;
}

const QUESTIONS: Question[] = [
  {
    id: "q1",
    question:
      "Does your AI system make or inform decisions that affect individuals' access to services, employment, or financial products?",
    risk: "high",
    requirement: "Risk Management System",
    guidance:
      "If yes, your system is likely high-risk under Annex III. A formal risk management system covering identification, analysis, and mitigation is required.",
  },
  {
    id: "q2",
    question:
      "Is every AI action that affects a business outcome logged with timestamps, inputs, and outputs?",
    risk: "medium",
    requirement: "Record-Keeping (Art. 12)",
    guidance:
      "High-risk AI systems must maintain logs sufficient to ensure traceability. NXπ's append-only audit log covers this requirement.",
  },
  {
    id: "q3",
    question:
      "Do you have documented technical specifications for your AI system including architecture, data sources, and performance metrics?",
    risk: "medium",
    requirement: "Technical Documentation (Art. 11)",
    guidance:
      "A technical file must be prepared before market placement and maintained throughout the lifecycle.",
  },
  {
    id: "q4",
    question:
      "Are users informed when they are interacting with an AI system that may influence a decision affecting them?",
    risk: "medium",
    requirement: "Transparency (Art. 13)",
    guidance:
      "High-risk AI systems must be designed to operate transparently. Users must be informed of AI involvement in consequential decisions.",
  },
  {
    id: "q5",
    question:
      "Can humans override, correct, or stop the AI system at any point during its operation?",
    risk: "high",
    requirement: "Human Oversight (Art. 14)",
    guidance:
      "High-risk systems must be designed to allow effective human oversight. Automatic approval without human review is prohibited for high-risk decisions.",
  },
  {
    id: "q6",
    question:
      "Have you assessed your training or retrieval data for bias, completeness, and relevance to the intended use case?",
    risk: "medium",
    requirement: "Data Governance (Art. 10)",
    guidance:
      "Data sets used for training must be subject to data governance practices including examination for biases.",
  },
  {
    id: "q7",
    question:
      "Is your AI system deployable within the EU or used by EU-based organizations or affecting EU residents?",
    risk: "info",
    requirement: "Jurisdiction",
    guidance:
      "The EU AI Act applies to providers placing AI systems on the EU market and deployers using AI in the EU, regardless of provider location.",
  },
  {
    id: "q8",
    question:
      "Do you have a conformity assessment process and are you prepared to register high-risk systems in the EU database by August 2, 2026?",
    risk: "high",
    requirement: "Conformity Assessment (Art. 43)",
    guidance:
      "High-risk AI systems must undergo conformity assessment before deployment. Registration in the EU AI systems database is mandatory.",
  },
];

type Answer = "yes" | "no" | "partial";

export function AIActReadiness() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showSummary, setShowSummary] = useState(false);

  const answered = Object.keys(answers).length;
  const allAnswered = answered === QUESTIONS.length;

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = QUESTIONS.find((q) => q.id === id);
    if (!q) return acc;
    if (ans === "yes") return acc + (q.risk === "high" ? 3 : 2);
    if (ans === "partial") return acc + 1;
    return acc;
  }, 0);

  const maxScore = QUESTIONS.reduce((acc, q) => acc + (q.risk === "high" ? 3 : 2), 0);
  const readiness = Math.round((score / maxScore) * 100);

  const readinessLabel =
    readiness >= 80
      ? "Well-positioned"
      : readiness >= 50
      ? "Gaps identified"
      : "Significant gaps";

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-6">
        <p className="text-sm text-text-secondary mb-2">
          Answer these 8 questions to generate a readiness summary you can share with your legal
          team or board. This is not legal advice — it is a structured starting point.
        </p>
        <p className="text-xs text-text-muted">
          Deadline: August 2, 2026 (EU AI Act Article 113)
        </p>
      </div>

      {QUESTIONS.map((q, i) => (
        <div key={q.id} className="rounded-xl border border-border-soft bg-bg-elev-1 p-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-bg-elev-2 border border-border-soft flex items-center justify-center text-xs text-text-muted font-semibold">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary mb-1">{q.question}</p>
              <p className="text-xs text-aurora-1 mb-4">{q.requirement}</p>
              <div className="flex gap-3">
                {(["yes", "partial", "no"] as Answer[]).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                    className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                      answers[q.id] === opt
                        ? opt === "yes"
                          ? "bg-green/10 border-green/40 text-green"
                          : opt === "partial"
                          ? "bg-amber/10 border-amber/40 text-amber"
                          : "bg-aurora-4/10 border-aurora-4/40 text-aurora-4"
                        : "border-border-soft text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {opt === "yes" ? "Yes" : opt === "partial" ? "Partially" : "No"}
                  </button>
                ))}
              </div>
              {answers[q.id] && (
                <p className="mt-3 text-xs text-text-tertiary leading-relaxed">{q.guidance}</p>
              )}
            </div>
          </div>
        </div>
      ))}

      {allAnswered && !showSummary && (
        <Button onClick={() => setShowSummary(true)} className="w-full">
          Generate readiness summary
        </Button>
      )}

      {showSummary && (
        <div className="rounded-xl border border-aurora-1/30 bg-aurora-1/5 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary">EU AI Act Readiness Summary</h3>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                readiness >= 80
                  ? "bg-green/10 text-green"
                  : readiness >= 50
                  ? "bg-amber/10 text-amber"
                  : "bg-aurora-4/10 text-aurora-4"
              }`}
            >
              {readinessLabel} ({readiness}%)
            </span>
          </div>
          <p className="text-xs text-text-muted">
            Generated {new Date().toLocaleDateString()} · For internal review only · Consult legal
            counsel before compliance determinations
          </p>
          {QUESTIONS.map((q) => {
            const ans = answers[q.id];
            return (
              <div key={q.id} className="flex items-start gap-3">
                {ans === "yes" ? (
                  <CheckCircle size={16} className="text-green flex-shrink-0 mt-0.5" />
                ) : ans === "partial" ? (
                  <AlertCircle size={16} className="text-amber flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle size={16} className="text-aurora-4 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="text-sm font-medium text-text-primary">{q.requirement}</p>
                  <p className="text-xs text-text-muted">
                    {ans === "yes"
                      ? "Compliant"
                      : ans === "partial"
                      ? "Partial — action required"
                      : "Gap — action required"}
                  </p>
                </div>
              </div>
            );
          })}
          <button
            onClick={() => window.print()}
            className="text-sm text-aurora-1 hover:text-aurora-2 transition-colors"
          >
            Print summary
          </button>
        </div>
      )}
    </div>
  );
}
