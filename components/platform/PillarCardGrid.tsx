"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";
import { ArrowRight, Shield, Layers, Zap, Database, GitBranch, BookOpen } from "lucide-react";

const pillars = [
  {
    slug: "mcp-fabric",
    number: "01",
    eyebrow: "PILLAR 1",
    title: "MCP Integration Fabric",
    body: "SAP HANA Cloud, S/4HANA, Salesforce, MuleSoft, and 60+ other systems — all connected through MCP.",
    stat: "17,468+ MCP servers",
    statLabel: "indexed in Q1 2026",
    icon: GitBranch,
    gradient: "from-aurora-1/20 to-aurora-2/10",
    accent: "text-aurora-1",
  },
  {
    slug: "orchestration",
    number: "02",
    eyebrow: "PILLAR 2",
    title: "Multi-Agent Orchestration",
    body: "Build single agents or multi-agent pipelines. Token accounting, run persistence, and a full call tree for every execution.",
    stat: "Full call tree",
    statLabel: "for every execution",
    icon: Layers,
    gradient: "from-aurora-2/20 to-aurora-3/10",
    accent: "text-aurora-2",
  },
  {
    slug: "rag",
    number: "03",
    eyebrow: "PILLAR 3",
    title: "Hybrid RAG Knowledge Runtime",
    body: "Hybrid RAG with Reciprocal Rank Fusion combines vector and BM25 keyword search. Sources attributed. Answers grounded.",
    stat: "91%+ recall",
    statLabel: "vs. 65–78% vector-only",
    icon: BookOpen,
    gradient: "from-aurora-3/20 to-aurora-1/10",
    accent: "text-aurora-3",
  },
  {
    slug: "workflows",
    number: "04",
    eyebrow: "PILLAR 4",
    title: "Visual Workflow Automation",
    body: "A visual DAG builder with 9 node types. Trigger by cron, webhook, or API. Every execution logged to the audit trail.",
    stat: "9 node types",
    statLabel: "for any business process",
    icon: Zap,
    gradient: "from-amber/20 to-aurora-1/10",
    accent: "text-amber",
  },
  {
    slug: "data-layer",
    number: "05",
    eyebrow: "PILLAR 5",
    title: "Unified Data Layer",
    body: "Query relational SQL, document stores, vector, graph, files, and event streams through one governed interface.",
    stat: "7 data categories",
    statLabel: "under one interface",
    icon: Database,
    gradient: "from-aurora-2/20 to-green/10",
    accent: "text-aurora-2",
  },
  {
    slug: "governance",
    number: "06",
    eyebrow: "PILLAR 6",
    title: "Zero-Trust Governance",
    body: "Per-user RBAC, label-based policies, PII masking before LLM, and an append-only audit log in your PostgreSQL.",
    stat: "100% EU AI Act",
    statLabel: "high-risk requirements by Aug 2026",
    icon: Shield,
    gradient: "from-green/20 to-aurora-3/10",
    accent: "text-green",
  },
] as const;

export function PillarCardGrid() {
  return (
    <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <motion.div key={pillar.slug} variants={staggerItem}>
            <Link
              href={`/platform/${pillar.slug}`}
              className="group block h-full rounded-xl border border-border-soft bg-bg-elev-1 p-6 transition-all hover:border-aurora-1/30 hover:bg-bg-elev-2"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${pillar.gradient} border border-border-soft`}
                >
                  <Icon className={`h-5 w-5 ${pillar.accent}`} />
                </div>
                <span className="font-mono text-xs text-text-muted">{pillar.number}</span>
              </div>

              <p className={`mb-1 text-[10px] font-semibold tracking-widest uppercase ${pillar.accent}`}>
                {pillar.eyebrow}
              </p>
              <h3 className="mb-2 text-base font-semibold text-text-primary group-hover:text-aurora-1 transition-colors">
                {pillar.title}
              </h3>
              <p className="mb-5 text-sm text-text-secondary leading-relaxed">{pillar.body}</p>

              <div className="flex items-end justify-between">
                <div>
                  <p className={`text-lg font-bold ${pillar.accent}`}>{pillar.stat}</p>
                  <p className="text-[11px] text-text-muted">{pillar.statLabel}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-text-muted group-hover:text-aurora-1 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </StaggerGroup>
  );
}
