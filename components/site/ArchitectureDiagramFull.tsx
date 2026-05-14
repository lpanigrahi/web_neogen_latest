"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Layer {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  bgColor: string;
  borderColor: string;
  tech: string[];
  detail: string;
}

const LAYERS: Layer[] = [
  {
    id: "client",
    label: "Client Layer",
    sublabel: "User interfaces & access points",
    color: "text-aurora-1",
    bgColor: "bg-aurora-1/10",
    borderColor: "border-aurora-1/30",
    tech: [
      "Web UI (Next.js 15)",
      "Slack / Teams Bots",
      "REST & GraphQL APIs",
      "CLI tools",
      "Mobile (future)",
    ],
    detail:
      "All client surfaces authenticate through the API gateway. Requests carry signed JWT tokens with role and label claims enforced at every subsequent hop.",
  },
  {
    id: "api",
    label: "API & Orchestration",
    sublabel: "Request routing, auth, agent scheduling",
    color: "text-aurora-3",
    bgColor: "bg-aurora-3/10",
    borderColor: "border-aurora-3/30",
    tech: [
      "FastAPI / Node gateway",
      "Per-user RBAC engine",
      "MCP Fabric router",
      "Workflow scheduler",
      "Rate limiting & quotas",
    ],
    detail:
      "The orchestration layer routes every request through policy enforcement before dispatching to AI or MCP targets. Every action is correlated with a trace ID that propagates to the audit log.",
  },
  {
    id: "ai",
    label: "AI Core",
    sublabel: "LLM inference, RAG, context management",
    color: "text-aurora-2",
    bgColor: "bg-aurora-2/10",
    borderColor: "border-aurora-2/30",
    tech: [
      "Claude 3.5 / GPT-4o / Gemini",
      "Ollama (self-hosted)",
      "pgvector Hybrid RAG",
      "PII masking pipeline",
      "Context compaction",
    ],
    detail:
      "All prompts pass through a PII detection and masking layer before reaching any LLM. Context windows are compacted automatically. Sensitive retrieval paths are isolated by label policy.",
  },
  {
    id: "data",
    label: "Data & Storage",
    sublabel: "Structured data, vectors, audit logs",
    color: "text-green",
    bgColor: "bg-green/10",
    borderColor: "border-green/30",
    tech: [
      "PostgreSQL (primary store)",
      "pgvector (embeddings)",
      "Redis (cache / sessions)",
      "S3 / GCS (documents)",
      "Append-only audit log",
    ],
    detail:
      "The data layer runs entirely within customer infrastructure. The audit log is append-only and cryptographically chained. Vectors and structured data live in the same PostgreSQL instance — no external vector DB required.",
  },
];

export function ArchitectureDiagramFull() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {LAYERS.map((layer, idx) => {
        const isActive = activeLayer === layer.id;
        return (
          <div key={layer.id}>
            <button
              onClick={() => setActiveLayer(isActive ? null : layer.id)}
              className={cn(
                "w-full text-left rounded-xl border px-6 py-5 transition-all duration-200",
                "hover:border-opacity-60",
                layer.borderColor,
                isActive ? layer.bgColor : "bg-bg-elev-1 hover:bg-bg-elev-2"
              )}
              aria-expanded={isActive}
              aria-controls={`layer-detail-${layer.id}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold",
                      layer.bgColor,
                      layer.color
                    )}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <p className={cn("font-semibold text-sm", layer.color)}>{layer.label}</p>
                    <p className="text-xs text-text-muted mt-0.5">{layer.sublabel}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex flex-wrap gap-1.5 justify-end max-w-sm">
                    {layer.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs border border-border-soft rounded-full px-2 py-0.5 text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                    {layer.tech.length > 3 && (
                      <span className="text-xs border border-border-soft rounded-full px-2 py-0.5 text-text-muted">
                        +{layer.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <svg
                    className={cn(
                      "w-4 h-4 text-text-muted transition-transform duration-200",
                      isActive && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>

            {isActive && (
              <div
                id={`layer-detail-${layer.id}`}
                className={cn(
                  "mt-2 rounded-xl border px-6 py-5",
                  layer.borderColor,
                  layer.bgColor
                )}
              >
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{layer.detail}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "text-xs rounded-full px-3 py-1 border",
                        layer.borderColor,
                        layer.color,
                        "font-medium"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {idx < LAYERS.length - 1 && (
              <div className="flex justify-center py-1.5">
                <svg
                  className="w-4 h-4 text-text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
