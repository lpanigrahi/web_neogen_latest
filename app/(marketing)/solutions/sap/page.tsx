import type { Metadata } from "next";
import { UseCaseTable } from "@/components/site/UseCaseTable";
import { CalloutBox } from "@/components/site/CalloutBox";

export const metadata: Metadata = {
  title: "NXπ for SAP",
  description: "Where SAP HANA Cloud meets MCP. Extend Joule with model choice, RAG, multi-agent orchestration, and the governance Joule does not yet provide on its own.",
};

const sapUseCases = [
  { useCase: "Financial Close", sponsor: "CFO", outcome: "40–60% reduction in close cycle time" },
  { useCase: "Procurement Intelligence", sponsor: "COO/CPO", outcome: "15–25% procurement savings" },
  { useCase: "Supply Chain Risk", sponsor: "COO", outcome: "Real-time detection vs weekly batch" },
  { useCase: "HANA Data Exploration", sponsor: "CDO", outcome: "80% reduction in BI request backlog" },
  { useCase: "S/4HANA Migration", sponsor: "CTO", outcome: "50–70% faster migration assessment" },
];

const keyUseCases = [
  {
    number: "01",
    title: "Financial Close Acceleration",
    body: "NXπ agents query HANA Cloud in real time, reconcile intercompany balances, flag exceptions, and draft audit-ready commentary — compressing a multi-week close into days.",
  },
  {
    number: "02",
    title: "Procurement Intelligence",
    body: "Conversational procurement agents surface supplier risk, benchmark pricing against market signals, and recommend PO consolidation — all grounded in live SAP data.",
  },
  {
    number: "03",
    title: "Supply Chain Risk Detection",
    body: "Instead of weekly batch reports, NXπ runs continuous monitoring across SAP inventory, procurement, and logistics data — alerting operations teams the moment a disruption signal appears.",
  },
];

export default function SapPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-aurora-1 uppercase tracking-[0.16em] mb-4">SAP Integration</div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-[1.1] mb-6">
            Where SAP HANA Cloud meets the open Model Context Protocol.
            <span className="block text-aurora-1 mt-1">Where Joule extends to every model.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            SAP Joule is purpose-built for SAP workflows. NXπ surrounds Joule with model choice,
            enterprise RAG, multi-agent orchestration, and the cross-system governance that Joule
            does not yet provide on its own.
          </p>
        </div>
      </section>

      {/* Use Case Table */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">SAP Use Cases</h2>
        <UseCaseTable useCases={sapUseCases} />
      </section>

      {/* Why NXπ wins callout */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <CalloutBox>
          <h3 className="text-lg font-semibold text-text-primary mb-3">Why NXπ wins for SAP-led enterprises</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex gap-3">
              <span className="text-aurora-1 mt-0.5">→</span>
              <span><strong className="text-text-primary">Native MCP over HANA Cloud.</strong> Query SAP data without ETL pipelines — agents read live transactional data through the Model Context Protocol.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-aurora-1 mt-0.5">→</span>
              <span><strong className="text-text-primary">Model freedom.</strong> Joule is GPT-4o. NXπ gives you Claude, Gemini, Llama, Mistral — 40+ models — so you match model to task, not vendor to contract.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-aurora-1 mt-0.5">→</span>
              <span><strong className="text-text-primary">Audit-grade logging.</strong> Every SAP query, every agent action, every model response is logged with full lineage — meeting EU AI Act and SOX requirements out of the box.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-aurora-1 mt-0.5">→</span>
              <span><strong className="text-text-primary">No data movement.</strong> NXπ operates in-situ on your HANA instance. No data leaves your perimeter without explicit consent.</span>
            </li>
          </ul>
        </CalloutBox>
      </section>

      {/* Key use case sequence */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-10">How it works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {keyUseCases.map((uc) => (
            <div key={uc.number} className="rounded-xl border border-border-soft bg-surface p-6">
              <div className="text-4xl font-bold text-aurora-1/20 mb-4">{uc.number}</div>
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
            <p className="text-text-primary font-semibold text-lg mb-1">See NXπ over your SAP environment</p>
            <p className="text-text-secondary text-sm">Book a 30-minute live demo with a HANA architect.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-aurora-1 to-aurora-3 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book the demo →
          </a>
        </div>
      </section>
    </div>
  );
}
