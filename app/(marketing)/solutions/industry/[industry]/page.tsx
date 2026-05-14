import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/content/solutions/industries";
import { CalloutBox } from "@/components/site/CalloutBox";

interface Props {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const data = industries.find((i) => i.slug === industry);
  if (!data) return { title: "Solutions" };
  return {
    title: `NXπ for ${data.title}`,
    description: data.lead,
  };
}

// Industry-specific capability highlights
const industryCapabilities: Record<string, Array<{ title: string; body: string }>> = {
  "financial-services": [
    { title: "Audit-grade action logging", body: "Every AI decision logged with full lineage — model, prompt, context, output, timestamp — meeting SOX and MiFID II requirements." },
    { title: "Model risk governance", body: "Automated model risk documentation, validation workflows, and SR 11-7 compliance tracking for every AI model in production." },
    { title: "Real-time regulatory monitoring", body: "Agents monitor regulatory feeds, flag changes affecting your portfolio, and draft impact assessments before your compliance team even knows about the update." },
  ],
  "healthcare": [
    { title: "Air-gapped deployment", body: "NXπ runs entirely within your HIPAA-compliant environment — no PHI transits to any external API without explicit, logged authorization." },
    { title: "Clinical data grounding", body: "Hybrid RAG over clinical notes, lab results, and protocol databases — with retrieval confidence scores and source citations on every response." },
    { title: "FDA 21 CFR Part 11 compliance", body: "Electronic record and signature controls built in — audit trails, access controls, and validation documentation for regulated clinical systems." },
  ],
  "public-sector": [
    { title: "Sovereign AI deployment", body: "Run NXπ with local Ollama models — zero data transits to commercial cloud APIs. Full air-gap capability for classified environments." },
    { title: "FedRAMP-aligned architecture", body: "Infrastructure controls, access logging, and security posture aligned with FedRAMP Moderate requirements from day one." },
    { title: "ITAR-compliant data handling", body: "Strict data residency and access controls for export-controlled information — with per-user clearance-level scoping through MCP." },
  ],
  "manufacturing": [
    { title: "Live SAP integration", body: "MCP connectors to SAP S/4HANA and ECC — real-time inventory, procurement, and production data without ETL pipelines." },
    { title: "Supply chain risk detection", body: "Continuous monitoring across supplier data, logistics signals, and production schedules — alerting before disruptions cascade." },
    { title: "Quality intelligence", body: "Agents analyze production data, flag quality deviations, and draft corrective action reports — reducing response time from days to minutes." },
  ],
  "technology": [
    { title: "AI operations substrate", body: "MCP, RAG, agents, workflows — the governed substrate your engineering teams build on, so you don't build it yourself." },
    { title: "Multi-model orchestration", body: "40+ models across 10 providers — route tasks to the right model at runtime based on capability, cost, and latency requirements." },
    { title: "Developer-first APIs", body: "114+ API endpoints with full OpenAPI specs — integrate NXπ intelligence into any product with a REST call." },
  ],
};

const defaultCapabilities = [
  { title: "Enterprise AI governance", body: "Full audit trails, access controls, and compliance documentation — meeting the regulatory requirements of your sector." },
  { title: "Model choice", body: "40+ models across 10 providers — select the right model for each task without changing your infrastructure." },
  { title: "Real-time data grounding", body: "Sub-200ms retrieval from any enterprise system — SAP, Salesforce, SharePoint, or proprietary data sources." },
];

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const data = industries.find((i) => i.slug === industry);
  if (!data) notFound();

  const capabilities = industryCapabilities[industry] ?? defaultCapabilities;

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1408px] px-5 lg:px-12 pt-8">
        <nav className="text-xs text-text-muted flex items-center gap-2">
          <Link href="/solutions" className="hover:text-text-secondary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-text-tertiary">{data.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-aurora-3 uppercase tracking-[0.16em] mb-4">{data.title}</div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-[1.1] mb-6">
            {data.lead}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {data.body}
          </p>
        </div>
      </section>

      {/* Why NXπ for this industry */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">Why NXπ for {data.title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="rounded-xl border border-border-soft bg-surface p-6">
              <div className="text-4xl font-bold text-aurora-3/20 mb-4">0{i + 1}</div>
              <h3 className="text-base font-semibold text-text-primary mb-3">{cap.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{cap.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory callout */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <CalloutBox>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-text-primary mb-1">Regulatory focus</h3>
              <p className="text-sm text-text-secondary">{data.regulatoryFocus}</p>
            </div>
            <div className="shrink-0">
              <a
                href="/security"
                className="text-xs text-aurora-1 hover:underline whitespace-nowrap"
              >
                See security overview →
              </a>
            </div>
          </div>
        </CalloutBox>
      </section>

      {/* CTA Band */}
      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-text-primary font-semibold text-lg mb-1">See NXπ in your environment</p>
            <p className="text-text-secondary text-sm">30-minute briefing tailored for {data.title} — no slides, live system.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-aurora-1 to-aurora-3 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book a briefing →
          </a>
        </div>
      </section>
    </div>
  );
}
