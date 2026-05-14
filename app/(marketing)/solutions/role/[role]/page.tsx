import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { roles } from "@/content/solutions/roles";

interface Props {
  params: Promise<{ role: string }>;
}

export async function generateStaticParams() {
  return roles.map((r) => ({ role: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { role } = await params;
  const data = roles.find((r) => r.slug === role);
  if (!data) return { title: "Solutions" };
  return {
    title: `For the ${data.title}`,
    description: `${data.headline} ${data.subhead}`,
  };
}

// Stub use cases per role
const roleUseCases: Record<string, Array<{ title: string; body: string }>> = {
  cfo: [
    { title: "Token cost transparency", body: "Every model call costed to a team, workflow, and budget line — visible in real time." },
    { title: "ROI attribution", body: "Measure productivity impact per agent, per workflow, per department — with audit-grade evidence." },
    { title: "Chargeback automation", body: "Automatic cost allocation reports delivered to finance monthly, without manual data pulls." },
  ],
  "cto-cio": [
    { title: "Provider failover", body: "99.9% uptime through automatic failover across 10 LLM providers — no single point of failure." },
    { title: "Consolidation audit", body: "Inventory every AI tool in the org, map to NXπ equivalents, and build the business case for consolidation." },
    { title: "Self-service agent creation", body: "80% of new agents created by domain teams — no engineering ticket required." },
  ],
  ceo: [
    { title: "Executive briefing automation", body: "Daily AI-synthesized briefings across 5+ data sources — delivered to your inbox before the day starts." },
    { title: "Strategic scenario modeling", body: "Ask natural-language questions across financial, operational, and market data simultaneously." },
    { title: "AI governance dashboard", body: "Real-time view of every AI workflow running in the organization — usage, cost, and business impact." },
  ],
  ciso: [
    { title: "Zero-trust agent scoping", body: "Every agent runs with the minimum permissions required — scoped per user, per system, per session." },
    { title: "EU AI Act compliance", body: "Automated risk classification, transparency logging, and human oversight workflows for high-risk AI use cases." },
    { title: "Cross-system audit correlation", body: "Correlate AI actions across SAP, Salesforce, and internal systems in a single audit trail." },
  ],
  cdo: [
    { title: "Hybrid RAG over any source", body: "Index SAP, Salesforce, SharePoint, and proprietary data lakes — 91%+ retrieval recall at sub-200ms." },
    { title: "BI backlog elimination", body: "Domain users answer their own data questions through conversational agents — reducing BI request backlog by 80%." },
    { title: "Cross-source joins", body: "Fuse SAP and Salesforce data without replication — query across both in a single agent call." },
  ],
  coo: [
    { title: "Visual workflow builder", body: "Drag-and-drop workflow construction — cron schedules, webhook triggers, DAG execution, no code required." },
    { title: "First-response automation", body: "60–70% of service cases resolved without human intervention — classified, routed, and responded to automatically." },
    { title: "Data quality resolution", body: "90% of data quality issues detected and resolved automatically — before they reach downstream systems." },
  ],
  "cro-cmo": [
    { title: "Customer 360 at runtime", body: "SAP order history + Salesforce CRM + market signals fused into a single account brief — before every call." },
    { title: "Predictive deal scoring", body: "Real-time win probability using pipeline velocity, competitive signals, and historical close patterns." },
    { title: "Retention risk detection", body: "Surface customers showing early churn signals before they appear in support or renewal data." },
  ],
};

const defaultUseCases = [
  { title: "Use case one", body: "Coming soon — contact us for a custom briefing for your role." },
  { title: "Use case two", body: "Coming soon — contact us for a custom briefing for your role." },
  { title: "Use case three", body: "Coming soon — contact us for a custom briefing for your role." },
];

export default async function RolePage({ params }: Props) {
  const { role } = await params;
  const data = roles.find((r) => r.slug === role);
  if (!data) notFound();

  const useCases = roleUseCases[role] ?? defaultUseCases;

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
          <div className="text-xs font-medium text-aurora-1 uppercase tracking-[0.16em] mb-4">For the {data.title}</div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-[1.1] mb-4">
            {data.headline}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            {data.subhead}
          </p>
        </div>
      </section>

      {/* Outcome stat cards */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.outcomes.map((outcome, i) => (
            <div key={i} className="rounded-xl border border-border-soft bg-surface p-6">
              <div className="text-2xl font-bold text-aurora-1 leading-tight mb-2">
                {outcome.split(" ")[0]}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {outcome.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use case mini cards */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">Key use cases</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div key={i} className="rounded-xl border border-border-soft bg-surface p-6">
              <div className="text-4xl font-bold text-aurora-1/20 mb-4">0{i + 1}</div>
              <h3 className="text-base font-semibold text-text-primary mb-3">{uc.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-text-primary font-semibold text-lg mb-1">{data.cta.label}</p>
            <p className="text-text-secondary text-sm">Tailored for the {data.title} — 30 minutes, no slides.</p>
          </div>
          <a
            href={data.cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-aurora-1 to-aurora-3 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {data.cta.label} →
          </a>
        </div>
      </section>
    </div>
  );
}
