import type { Metadata } from "next";
import Link from "next/link";
import { generateProductSchema } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarqueeRow } from "@/components/site/MarqueeRow";
import { BentoGrid } from "@/components/site/BentoGrid";
import { PillarCard } from "@/components/site/PillarCard";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { HeroSceneWrapper } from "@/components/three/HeroSceneWrapper";
import { MCPFabricDemo } from "@/components/demos/MCPFabricDemo";
import { OrchestrationDemo } from "@/components/demos/OrchestrationDemo";
import { HybridRAGDemo } from "@/components/demos/HybridRAGDemo";
import { WorkflowBuilderDemo } from "@/components/demos/WorkflowBuilderDemo";
import { DataLayerDemo } from "@/components/demos/DataLayerDemo";
import { GovernanceDemo } from "@/components/demos/GovernanceDemo";
import { FadeIn } from "@/components/motion/FadeIn";
import { SolutionsTeaser } from "@/components/site/SolutionsTeaser";
import { StatsRow } from "@/components/site/StatsRow";
import { AIDemoIsland } from "@/components/site/AIDemoIsland";
import { Suspense } from "react";
import { UTMPersonalizer } from "@/components/site/UTMPersonalizer";
import { ArrowRight, ShieldCheck, Building2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "NXπ — The Enterprise AI Operations Platform",
  description:
    "NXπ connects SAP, Salesforce, and every data asset through governed AI agents — with the audit trail your regulators require and the sovereignty your CISO demands.",
};

const stats = [
  {
    value: "40%+",
    label: "of agentic AI projects cancelled by 2027",
    source: "Gartner, poll of 3,400 organisations",
  },
  {
    value: "$8.5B → $35B",
    label: "Agentic AI market, 2026 → 2030",
    source: "Deloitte 2026 TMT Predictions",
  },
  {
    value: "Aug 2, 2026",
    label: "EU AI Act high-risk deadline",
    source: "EU AI Act, Article 113",
  },
  {
    value: "1.7x",
    label: "Average enterprise AI ROI in 12–18 months",
    source: "Industry composite",
  },
  {
    value: "18,500+",
    label: "Salesforce Agentforce deals signed",
    source: "Salesforce, April 2026",
  },
  {
    value: "78%",
    label: "Enterprise AI teams with MCP-backed agents in production",
    source: "CData / MCP Foundation, Q2 2026",
  },
];

const pillars = [
  {
    eyebrow: "Platform",
    title: "MCP Integration Fabric",
    body: "Connect SAP, Salesforce, databases, and 17,000+ MCP servers through a single governed gateway. Every tool call is authenticated, logged, and rate-controlled.",
    bullets: [
      "17,468+ MCP servers indexed",
      "97M+ monthly SDK downloads",
      "Native SAP HANA Cloud & S/4HANA connectors",
    ],
    href: "/platform/mcp-fabric",
    demo: <MCPFabricDemo />,
    featured: true,
  },
  {
    eyebrow: "Platform",
    title: "Multi-Agent Orchestration",
    body: "Coordinate fleets of specialised agents across tasks, with token budgets enforced at runtime and a full audit trail for every inter-agent message.",
    bullets: [
      "Parallel and sequential agent graphs",
      "Token-budget enforcement",
      "Human-in-the-loop approval gates",
    ],
    href: "/platform/orchestration",
    demo: <OrchestrationDemo />,
  },
  {
    eyebrow: "Platform",
    title: "Hybrid RAG",
    body: "RRF fusion across dense vector and BM25 sparse retrieval delivers 91%+ recall on enterprise corpora. Freshness-weighted re-ranking keeps answers current.",
    bullets: [
      "91%+ retrieval recall",
      "pgvector + BM25 + RRF fusion",
      "Role-scoped document access",
    ],
    href: "/platform/rag",
    demo: <HybridRAGDemo />,
  },
  {
    eyebrow: "Platform",
    title: "Workflow Automation",
    body: "Visual workflow builder connects any MCP-capable system. Agent steps handle exceptions. Approval nodes integrate with Slack, Teams, and ServiceNow.",
    bullets: [
      "No-code visual builder",
      "Exception-handling agent steps",
      "SAP workflow integration",
    ],
    href: "/platform/workflows",
    demo: <WorkflowBuilderDemo />,
  },
  {
    eyebrow: "Platform",
    title: "Unified Data Layer",
    body: "Abstraction across SAP, Salesforce, PostgreSQL, MongoDB, Neo4j, Snowflake, and S3. Query in natural language. Data never replicates without consent.",
    bullets: [
      "SQL · NoSQL · Graph · Vector · Object",
      "Semantic + relational query fusion",
      "Consent-gated data replication",
    ],
    href: "/platform/data-layer",
    demo: <DataLayerDemo />,
  },
  {
    eyebrow: "Platform",
    title: "Zero-Trust Governance",
    body: "Policy engine enforces RBAC, data access scope, and model guardrails at runtime. Complete audit trail exported to your SIEM or data warehouse.",
    bullets: [
      "EU AI Act · SOC 2 · GDPR · HIPAA · SOX",
      "SIEM-compatible audit export",
      "Attribute-based access control",
    ],
    href: "/platform/governance",
    demo: <GovernanceDemo />,
  },
];

const trustLogos = [
  "SAP",
  "Salesforce",
  "MuleSoft",
  "PostgreSQL",
  "Snowflake",
  "Anthropic",
  "OpenAI",
  "Google",
  "Microsoft",
  "Ollama",
];

const complianceBadges = ["EU AI Act", "SOC 2", "GDPR", "HIPAA", "SOX", "ISO 27001"];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <HeroSceneWrapper />

        {/* gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,12,0) 0%, rgba(8,8,12,0.4) 60%, rgba(8,8,12,0.95) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32">
          <FadeIn direction="up" delay={0}>
            <Badge variant="aurora" className="mb-6 gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-1 inline-block" />
              MCP-Native · Model-Agnostic · Self-Hostable
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary max-w-4xl mb-6 leading-[1.05] tracking-tight">
              The AI{" "}
              <span className="font-serif italic text-aurora-1">control plane</span>{" "}
              for the enterprise.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.14}>
            <p id="hero-subhead" className="text-lg lg:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
              NXπ connects SAP, Salesforce, and every data asset through governed agents — with the audit trail your regulators require and the sovereignty your CISO demands.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button size="lg" asChild>
                <Link href="/contact" id="hero-cta-primary">Book an executive briefing</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/architecture" className="flex items-center gap-2">
                  See the architecture <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.26}>
            <div className="flex flex-wrap gap-2">
              {complianceBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border border-border-soft bg-bg-elev-1/60 text-text-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 2: Trust strip ───────────────────────────────────────── */}
      <section className="py-12 border-y border-border-soft bg-bg-elev-1/40">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted text-center">
            Trusted by the regulated enterprise
          </p>
        </div>
        <MarqueeRow
          items={trustLogos.map((name) => (
            <span
              key={name}
              className="font-mono text-sm font-medium text-text-tertiary border border-border-soft rounded-md px-4 py-2 bg-bg-elev-1 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
          speed={0.4}
        />
      </section>

      {/* ─── Section 3: The Wedge ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-4">
                  The Wedge
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
                  Every other AI platform assumes a graph.{" "}
                  <span className="font-serif italic text-aurora-1">NXπ does not require the choice.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Copilot Studio assumes productivity. Agentforce assumes the customer graph. Palantir AIP assumes an ontology. Glean assumes knowledge. ServiceNow assumes workflow.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="flex flex-col gap-8">
                <blockquote className="border-l-2 border-aurora-1 pl-6">
                  <p className="text-lg font-serif italic text-text-primary leading-relaxed">
                    "NXπ is the only enterprise AI platform that is MCP-native, model-agnostic, self-hostable, and built for SAP and Salesforce as first-class peers — under one governed control plane."
                  </p>
                </blockquote>

                <ul className="space-y-4">
                  {[
                    {
                      title: "MCP-native from day one",
                      body: "Not an adapter. Not a plugin. MCP is the architectural primitive — every agent, every tool call, every data connection.",
                    },
                    {
                      title: "Model-agnostic by design",
                      body: "Anthropic, OpenAI, Azure, Google, Cohere, Ollama. Swap the model without rewiring the agent. No lock-in.",
                    },
                    {
                      title: "Self-hostable with sovereignty",
                      body: "On-premise, VPC, or hybrid. Your data never leaves your perimeter without explicit, auditable consent.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-aurora-1 flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-text-primary mb-1">{item.title}</p>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Stats row ─────────────────────────────────────────── */}
      <section className="py-20 border-y border-border-soft bg-bg-elev-1/30">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <StatsRow stats={stats} />
        </div>
      </section>

      {/* ─── Section 5: Six pillars bento ────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-3">Platform</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-2xl leading-tight">
                Six pillars. One control plane.
              </h2>
            </div>
          </FadeIn>
          <BentoGrid>
            {pillars.map((pillar) => (
              <PillarCard
                key={pillar.title}
                eyebrow={pillar.eyebrow}
                title={pillar.title}
                body={pillar.body}
                bullets={pillar.bullets}
                href={pillar.href}
                demo={pillar.demo}
                featured={pillar.featured}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ─── Section 6: SAP + Salesforce fusion ──────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-elev-1/50 border-y border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-3">
                First-class integration
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-3xl mx-auto leading-tight">
                SAP and Salesforce, finally unified under AI.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SAP column */}
            <FadeIn direction="right" delay={0.05}>
              <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-8 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-aurora-1/15 flex items-center justify-center">
                    <Building2 size={16} className="text-aurora-1" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">SAP Integration</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">
                  The first AI platform purpose-built for SAP.
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Native connectors for SAP HANA Cloud, S/4HANA, BTP, and ECC. MCP tools expose FI, CO, MM, SD, and HR modules as governed agent capabilities. Query financial data in natural language. Every agent action creates a change document.
                </p>
                <ul className="space-y-2">
                  {[
                    "SAP HANA Cloud vector store",
                    "S/4HANA native MCP tools",
                    "BTP integration suite bridge",
                    "ECC legacy connector",
                    "Approval workflow integration",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-tertiary">
                      <span className="h-1 w-1 rounded-full bg-aurora-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/sap"
                  className="flex items-center gap-1.5 text-sm text-aurora-1 hover:text-aurora-2 transition-colors mt-auto"
                >
                  SAP integration details <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            {/* Salesforce column */}
            <FadeIn direction="left" delay={0.1}>
              <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-8 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-aurora-2/15 flex items-center justify-center">
                    <Globe size={16} className="text-aurora-2" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">Salesforce Integration</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">
                  Agentforce extends further when the data layer is complete.
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  NXπ connects Salesforce CRM, Revenue Cloud, and Marketing Cloud to SAP, databases, and knowledge bases via MCP. Salesforce announced native MCP GA in April 2026. NXπ extends that to every system in your stack.
                </p>
                <ul className="space-y-2">
                  {[
                    "Agentforce MCP bridge",
                    "Revenue Cloud integration",
                    "Marketing Cloud data sync",
                    "Salesforce Data Cloud connector",
                    "Cross-system 360° customer view",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-tertiary">
                      <span className="h-1 w-1 rounded-full bg-aurora-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/salesforce"
                  className="flex items-center gap-1.5 text-sm text-aurora-2 hover:text-aurora-1 transition-colors mt-auto"
                >
                  Salesforce integration details <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Architecture preview ─────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <FadeIn direction="right">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-3">
                  Architecture
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4">
                  Four layers. Infinite reach.
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  NXπ is built as four composable layers — client, orchestration, AI core, and data. Each layer is independently scalable and replaceable without rewiring the rest.
                </p>
                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-2 text-sm text-aurora-1 hover:text-aurora-2 transition-colors"
                >
                  Full architecture diagram <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <ArchitectureDiagram />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Section 7b: AI Demo Island ──────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-3">Live demo</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary max-w-2xl mx-auto leading-tight">
                See an agent answer a real finance question.
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.08}>
            <div className="max-w-2xl mx-auto">
              <AIDemoIsland />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 8: Solutions teaser ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-elev-1/30 border-y border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-3">Solutions</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-2xl leading-tight">
                Built for the role, system, and industry you operate in.
              </h2>
            </div>
          </FadeIn>
          <SolutionsTeaser />
        </div>
      </section>

      {/* ─── Section 9: Compliance strip ─────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck size={20} className="text-aurora-1" />
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                      Compliance
                    </p>
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary mb-3">
                    EU AI Act. SOC 2. GDPR. HIPAA. SOX.
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                    Compliance is not a checklist you fill before go-live. It is a runtime property. NXπ enforces policy at every agent call, every data access, every model invocation — and exports a complete audit trail to your SIEM.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:min-w-[280px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                    Deployment options
                  </p>
                  {[
                    { label: "Cloud-hosted", desc: "SOC 2 Type II, multi-tenant, shared responsibility" },
                    { label: "VPC-isolated", desc: "Single-tenant in your AWS, Azure, or GCP account" },
                    { label: "On-premise", desc: "Air-gapped, no outbound calls, full data sovereignty" },
                  ].map((opt) => (
                    <div key={opt.label} className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-green flex-shrink-0 mt-1.5" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">{opt.label}</p>
                        <p className="text-xs text-text-muted">{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 10: Testimonial ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote>
                <p className="text-3xl lg:text-4xl font-serif italic text-text-primary leading-relaxed mb-8">
                  "AI that survives an audit, a board meeting, and August 2, 2026."
                </p>
              </blockquote>
              <p className="text-sm text-text-muted">
                The NXπ promise — measurable AI ROI with full regulatory compliance from day one.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 11: CTA band ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden border-t border-border-soft">
        <MeshBackdrop intensity="medium" className="absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-[1408px] px-5 lg:px-12 text-center">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-4">
              Get started
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-2xl mx-auto leading-tight mb-6">
              The AI control plane your enterprise has been waiting for.
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
              Connect your SAP, Salesforce, and every data asset. Deploy governed agents. Close the ROI gap before the board asks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book an executive briefing</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/architecture" className="flex items-center gap-2">
                  See the architecture <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* JSON-LD: Product schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema()) }}
      />

      {/* UTM Personalizer */}
      <Suspense fallback={null}>
        <UTMPersonalizer />
      </Suspense>
    </div>
  );
}
