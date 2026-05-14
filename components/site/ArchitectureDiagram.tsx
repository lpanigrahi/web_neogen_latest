"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const layers = [
  {
    id: "client",
    label: "Client Layer",
    sublabel: "Web · Mobile · API",
    description: "Browser, mobile apps, and API clients interact with NXπ through secure, authenticated endpoints. Every session is scoped to a user identity with defined permissions.",
    color: "aurora-1",
  },
  {
    id: "api",
    label: "API & Orchestration",
    sublabel: "Next.js · Agent Router · MCP Host",
    description: "The orchestration layer routes requests to the right agents, manages multi-agent coordination, enforces token budgets, and logs every action to the audit trail.",
    color: "aurora-2",
  },
  {
    id: "ai",
    label: "AI Core",
    sublabel: "LLM Providers · RAG · Agents",
    description: "Model-agnostic inference across Anthropic, OpenAI, Azure, Google, Cohere, and self-hosted Ollama. Hybrid RAG with RRF achieves 91%+ retrieval recall.",
    color: "aurora-3",
  },
  {
    id: "data",
    label: "Data & Storage",
    sublabel: "SAP · Salesforce · SQL · NoSQL · Vector",
    description: "Unified access to SAP HANA Cloud, S/4HANA, Salesforce, PostgreSQL + pgvector, MongoDB, Neo4j, Redis, Snowflake, S3, and event streams. Data never replicates without consent.",
    color: "green",
  },
];

export function ArchitectureDiagram() {
  const [active, setActive] = useState<string>("api");

  const activeLayer = layers.find((l) => l.id === active);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col gap-2 lg:w-64">
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActive(layer.id)}
            className={cn(
              "text-left rounded-lg border px-4 py-3 transition-all",
              active === layer.id
                ? "border-aurora-1/40 bg-aurora-1/10"
                : "border-border-soft bg-bg-elev-1 hover:border-border"
            )}
          >
            <p className="text-sm font-medium text-text-primary">{layer.label}</p>
            <p className="text-xs text-text-muted mt-0.5">{layer.sublabel}</p>
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-xl border border-border-soft bg-bg-elev-1 p-6 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-semibold text-text-primary mb-2">{activeLayer?.label}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{activeLayer?.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
