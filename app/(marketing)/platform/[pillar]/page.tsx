import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { MCPFabricDemo } from "@/components/demos/MCPFabricDemo";
import { OrchestrationDemo } from "@/components/demos/OrchestrationDemo";
import { HybridRAGDemo } from "@/components/demos/HybridRAGDemo";
import { WorkflowBuilderDemo } from "@/components/demos/WorkflowBuilderDemo";
import { DataLayerDemo } from "@/components/demos/DataLayerDemo";
import { GovernanceDemo } from "@/components/demos/GovernanceDemo";
import { PillarOutcomes } from "@/components/platform/PillarOutcomes";
import { PillarRoles } from "@/components/platform/PillarRoles";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ pillar: string }>;
}

interface RoleQuote {
  role: string;
  name: string;
  quote: string;
}

interface PillarData {
  slug: string;
  eyebrow: string;
  title: string;
  headline: string;
  body: string;
  outcomes: [string, string, string];
  demo: "MCPFabricDemo" | "OrchestrationDemo" | "HybridRAGDemo" | "WorkflowBuilderDemo" | "DataLayerDemo" | "GovernanceDemo";
  roles: [RoleQuote, RoleQuote, RoleQuote];
  accentClass: string;
}

const pillarsData: PillarData[] = [
  {
    slug: "mcp-fabric",
    eyebrow: "PILLAR 1",
    title: "MCP Integration Fabric",
    headline: "Connect every enterprise system through one open protocol.",
    body: "NXπ is a first-class MCP host. SAP HANA Cloud, S/4HANA, Salesforce, MuleSoft, and 60+ other systems connect through the Model Context Protocol — the same open standard that Salesforce, SAP, and Anthropic have all adopted in 2026.",
    outcomes: [
      "Connect SAP + Salesforce as peers under one protocol",
      "78% of enterprise AI teams have ≥1 MCP-backed agent in production",
      "17,468+ MCP servers indexed in Q1 2026",
    ],
    demo: "MCPFabricDemo",
    roles: [
      {
        role: "CTO",
        name: "Chief Technology Officer",
        quote: "MCP removes bespoke integration debt. One protocol replaces dozens of point-to-point connectors.",
      },
      {
        role: "CIO",
        name: "Chief Information Officer",
        quote: "We finally have a single governance boundary for every system our agents touch.",
      },
      {
        role: "VP Eng",
        name: "VP Engineering",
        quote: "Our team went from weeks of integration work to hours — MCP Fabric handled the rest.",
      },
    ],
    accentClass: "text-aurora-1",
  },
  {
    slug: "orchestration",
    eyebrow: "PILLAR 2",
    title: "Multi-Agent Orchestration",
    headline: "Agents that coordinate. Decisions that compound.",
    body: "Build single agents or multi-agent pipelines where specialized agents collaborate — SAP Agent queries billing, Salesforce Agent queries pipeline, Merger Agent synthesizes. Token accounting, run persistence, and a full call tree for every execution.",
    outcomes: [
      "Build multi-agent pipelines in minutes",
      "Full token accounting per agent per run",
      "Complete call tree for every execution",
    ],
    demo: "OrchestrationDemo",
    roles: [
      {
        role: "CTO",
        name: "Chief Technology Officer",
        quote: "The call tree gives us full observability into every decision every agent makes — no black box.",
      },
      {
        role: "CPO",
        name: "Chief Product Officer",
        quote: "We built a cross-system revenue intelligence agent in an afternoon. It was unremarkable in the best way.",
      },
      {
        role: "VP Eng",
        name: "VP Engineering",
        quote: "Token accounting per agent per run means we can charge back AI costs accurately, line by line.",
      },
    ],
    accentClass: "text-aurora-2",
  },
  {
    slug: "rag",
    eyebrow: "PILLAR 3",
    title: "Hybrid RAG Knowledge Runtime",
    headline: "91%+ retrieval recall. Not a search feature — a knowledge runtime.",
    body: "Hybrid RAG with Reciprocal Rank Fusion (RRF) combines vector semantic search with BM25 keyword search. Recall@10 jumps from 65–78% to 91%+ versus vector-only. Sources are attributed. Answers are grounded.",
    outcomes: [
      "91%+ retrieval recall with hybrid RRF",
      "Source attribution on every answer",
      "Multi-scope: document, team, enterprise",
    ],
    demo: "HybridRAGDemo",
    roles: [
      {
        role: "CTO",
        name: "Chief Technology Officer",
        quote: "The jump from 70% to 91%+ recall is not incremental — it's the difference between a demo and production.",
      },
      {
        role: "CISO",
        name: "Chief Information Security Officer",
        quote: "Every answer includes its source citation. Auditability is built in, not bolted on.",
      },
      {
        role: "CDO",
        name: "Chief Data Officer",
        quote: "Multi-scope retrieval means one agent can search my document, my team's knowledge, and the enterprise corpus in one shot.",
      },
    ],
    accentClass: "text-aurora-3",
  },
  {
    slug: "workflows",
    eyebrow: "PILLAR 4",
    title: "Visual Workflow Automation",
    headline: "Every business process, automated. Every step, auditable.",
    body: "A visual DAG builder with 9 node types: Input, Output, LLM, Tool, Condition, HTTP, Template, Agent, Note. Trigger by cron, webhook, or API. Every node execution is logged to the append-only audit trail.",
    outcomes: [
      "9 node types for any business process",
      "Cron, webhook, and API triggers",
      "Full execution audit trail",
    ],
    demo: "WorkflowBuilderDemo",
    roles: [
      {
        role: "COO",
        name: "Chief Operating Officer",
        quote: "Business analysts can automate processes without engineering. The visual builder is genuinely accessible.",
      },
      {
        role: "CFO",
        name: "Chief Financial Officer",
        quote: "Every automated step is in the audit log. Compliance sign-off went from weeks to days.",
      },
      {
        role: "CTO",
        name: "Chief Technology Officer",
        quote: "The DAG model composes cleanly with our agent network. Workflows and agents are peers, not silos.",
      },
    ],
    accentClass: "text-amber",
  },
  {
    slug: "data-layer",
    eyebrow: "PILLAR 5",
    title: "Unified Data Layer",
    headline: "One query layer. Every data source. Zero replication.",
    body: "Query relational SQL, document stores, key-value caches, graph databases, vector stores, files, and event streams — through one governed interface. Data stays where it lives. Nothing replicates without consent.",
    outcomes: [
      "7 data source categories under one interface",
      "Data sovereignty — nothing replicates without consent",
      "Sub-200ms search across unified sources",
    ],
    demo: "DataLayerDemo",
    roles: [
      {
        role: "CDO",
        name: "Chief Data Officer",
        quote: "Data sovereignty is not a feature — it's a requirement. NXπ is the first platform that treats it that way.",
      },
      {
        role: "CISO",
        name: "Chief Information Security Officer",
        quote: "Nothing moves without explicit consent. That's the control posture our board expects.",
      },
      {
        role: "CTO",
        name: "Chief Technology Officer",
        quote: "Sub-200ms across seven source types, with governance, is an engineering achievement worth calling out.",
      },
    ],
    accentClass: "text-aurora-2",
  },
  {
    slug: "governance",
    eyebrow: "PILLAR 6",
    title: "Zero-Trust Governance",
    headline: "EU AI Act ready. Every action logged. Zero trust by default.",
    body: "Per-user RBAC, label-based policies, MCP server scoping, model allowlists, tool permissions, PII detection and masking before LLM, and an append-only audit log in your PostgreSQL. 100% of high-risk EU AI Act requirements met by August 2, 2026.",
    outcomes: [
      "100% EU AI Act high-risk requirements by Aug 2 2026",
      "Per-user MCP and model scoping",
      "PII detection and masking before LLM",
    ],
    demo: "GovernanceDemo",
    roles: [
      {
        role: "CISO",
        name: "Chief Information Security Officer",
        quote: "Zero trust by default means least privilege is the floor, not an aspiration. That's the standard I hold vendors to.",
      },
      {
        role: "CLO",
        name: "Chief Legal Officer",
        quote: "EU AI Act high-risk compliance by August 2 — with the audit trail to prove it. Our legal team signed off in one review.",
      },
      {
        role: "CFO",
        name: "Chief Financial Officer",
        quote: "PII masking before the LLM means we can process sensitive financial data without regulatory exposure.",
      },
    ],
    accentClass: "text-green",
  },
];

export function generateStaticParams() {
  return pillarsData.map((p) => ({ pillar: p.slug }));
}

export function getPillarData(slug: string): PillarData | undefined {
  return pillarsData.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar } = await params;
  const data = getPillarData(pillar);
  return {
    title: data?.title ?? "Platform",
    description: data?.body ?? "",
  };
}

function PillarDemo({ demo }: { demo: PillarData["demo"] }) {
  switch (demo) {
    case "MCPFabricDemo":
      return <MCPFabricDemo />;
    case "OrchestrationDemo":
      return <OrchestrationDemo />;
    case "HybridRAGDemo":
      return <HybridRAGDemo />;
    case "WorkflowBuilderDemo":
      return <WorkflowBuilderDemo />;
    case "DataLayerDemo":
      return <DataLayerDemo />;
    case "GovernanceDemo":
      return <GovernanceDemo />;
  }
}

export default async function PillarPage({ params }: Props) {
  const { pillar } = await params;
  const data = getPillarData(pillar);

  if (!data) {
    notFound();
  }

  const currentIndex = pillarsData.findIndex((p) => p.slug === pillar);
  const prevPillar = currentIndex > 0 ? pillarsData[currentIndex - 1] : null;
  const nextPillar = currentIndex < pillarsData.length - 1 ? pillarsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-bg-base">
      {/* Back nav */}
      <div className="border-b border-border-soft bg-bg-base/80 backdrop-blur-sm sticky top-16 z-10">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-3 flex items-center gap-2">
          <Link
            href="/platform"
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All pillars
          </Link>
          <span className="text-text-muted text-xs">/</span>
          <span className="text-xs text-text-secondary">{data.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <MeshBackdrop intensity="low" />
        <div className="relative mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn>
            <p className={`mb-3 text-[11px] font-semibold tracking-widest uppercase ${data.accentClass}`}>
              {data.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              {data.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-text-secondary leading-relaxed">{data.body}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Book an executive briefing</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demo section */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-24">
        <FadeIn>
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-1">
              Interactive demo
            </p>
            <h2 className="text-xl font-semibold text-text-primary">{data.title}</h2>
          </div>
          <PillarDemo demo={data.demo} />
        </FadeIn>
      </section>

      {/* What it does — outcomes */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
          <FadeIn>
            <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-text-muted">
              What it does
            </p>
            <h2 className="mb-8 text-2xl font-bold text-text-primary">Three outcomes you can quote.</h2>
          </FadeIn>
          <PillarOutcomes outcomes={data.outcomes} accentClass={data.accentClass} />
        </div>
      </section>

      {/* For who — role chips */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
        <FadeIn>
          <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-text-muted">
            For who
          </p>
          <h2 className="mb-8 text-2xl font-bold text-text-primary">Who cares most — and why.</h2>
        </FadeIn>
        <PillarRoles roles={data.roles} />
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-t border-border-soft py-20">
        <MeshBackdrop intensity="medium" />
        <div className="relative mx-auto max-w-[1408px] px-5 lg:px-12 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">
              Ready to see {data.title} live?
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mb-8 text-lg text-text-secondary">
              Book an executive briefing and walk through this pillar with our team.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Book an executive briefing</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/platform">
                  All six pillars <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Adjacent pillar navigation */}
      {(prevPillar ?? nextPillar) && (
        <section className="border-t border-border-soft bg-bg-elev-1">
          <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-10">
            <div className="flex items-stretch gap-4">
              {prevPillar ? (
                <Link
                  href={`/platform/${prevPillar.slug}`}
                  className="group flex flex-1 items-center gap-3 rounded-xl border border-border-soft bg-bg-base p-5 transition-all hover:border-aurora-1/30"
                >
                  <ArrowLeft className="h-4 w-4 flex-shrink-0 text-text-muted group-hover:text-aurora-1 group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-0.5">
                      Previous
                    </p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-aurora-1 transition-colors">
                      {prevPillar.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextPillar ? (
                <Link
                  href={`/platform/${nextPillar.slug}`}
                  className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-border-soft bg-bg-base p-5 transition-all hover:border-aurora-1/30"
                >
                  <div className="text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-0.5">
                      Next
                    </p>
                    <p className="text-sm font-semibold text-text-primary group-hover:text-aurora-1 transition-colors">
                      {nextPillar.title}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-text-muted group-hover:text-aurora-1 group-hover:translate-x-1 transition-all" />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
