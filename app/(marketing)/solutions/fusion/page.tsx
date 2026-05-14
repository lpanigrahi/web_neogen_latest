import type { Metadata } from "next";
import { CalloutBox } from "@/components/site/CalloutBox";

export const metadata: Metadata = {
  title: "SAP + Salesforce Fusion",
  description: "The ROI lives in the join. Revenue you cannot recognize until the order ships. Pipeline you cannot trust until you reconcile against billing.",
};

const fusionUseCases = [
  {
    title: "Revenue Recognition",
    sponsor: "CFO / CRO",
    body: "A deal closes in Salesforce. But the revenue cannot be recognized until the order ships in SAP. NXπ fuses both signals in real time — so finance and sales always share the same version of the truth.",
  },
  {
    title: "Customer Health Scoring",
    sponsor: "CRO / CSM",
    body: "Salesforce shows the relationship. SAP shows the behavior. The customer who looks healthy in CRM but has slowing order velocity in ERP is the one who churns. NXπ surfaces this before it happens.",
  },
  {
    title: "Collections Intelligence",
    sponsor: "CFO / COO",
    body: "Outstanding invoices in SAP, plus relationship context in Salesforce, plus AI-drafted communication — automated collections workflows that preserve the customer relationship.",
  },
];

export default function FusionPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-aurora-3 uppercase tracking-[0.16em] mb-4">SAP + Salesforce Fusion</div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-[1.1] mb-6">
            The ROI lives
            <span className="text-aurora-3"> in the join.</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-6">
            Every CXO knows it. The single most valuable AI use case in the enterprise is not inside
            SAP or inside Salesforce — it is the join between them.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Revenue you cannot recognize until the order ships. Pipeline you cannot trust until you
            reconcile against billing. Customer health you cannot measure until CRM meets ERP.
          </p>
        </div>
      </section>

      {/* The gap callout */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <CalloutBox variant="aurora">
          <h3 className="text-lg font-semibold text-text-primary mb-3">The gap that costs enterprises millions</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            SAP owns the transaction. Salesforce owns the relationship. Between them lives the most
            valuable data in the enterprise — and most organizations cannot access it without a
            multi-week data engineering project.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            NXπ eliminates that gap. Through MCP connectors to both systems, every agent has access
            to the full picture — live, reconciled, and query-ready — in under 200 milliseconds.
          </p>
        </CalloutBox>
      </section>

      {/* How the join works */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">How the join works</h2>
        <p className="text-text-secondary mb-10 max-w-2xl">
          NXπ's hybrid RAG layer indexes both systems simultaneously. When an agent queries customer
          data, it retrieves from SAP and Salesforce in a single round-trip — joining on account ID,
          order number, or any shared key — without ETL, without replication, without data leaving
          either system.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-aurora-3/20 bg-aurora-3/5 p-6">
            <div className="text-xs font-medium text-aurora-3 uppercase tracking-[0.12em] mb-3">SAP</div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>→ Order history & status</li>
              <li>→ Invoice & AR aging</li>
              <li>→ Inventory positions</li>
              <li>→ Procurement data</li>
              <li>→ Financial close state</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border-soft bg-surface p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-text-primary mb-2">⊕</div>
              <div className="text-xs text-text-muted uppercase tracking-[0.12em]">NXπ Join Layer</div>
              <div className="text-xs text-text-tertiary mt-1">Sub-200ms</div>
            </div>
          </div>
          <div className="rounded-xl border border-aurora-2/20 bg-aurora-2/5 p-6">
            <div className="text-xs font-medium text-aurora-2 uppercase tracking-[0.12em] mb-3">Salesforce</div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>→ Opportunity pipeline</li>
              <li>→ Account relationships</li>
              <li>→ Service case history</li>
              <li>→ Campaign engagement</li>
              <li>→ Contact intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-10">Fusion use cases</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {fusionUseCases.map((uc, i) => (
            <div key={i} className="rounded-xl border border-border-soft bg-surface p-6">
              <div className="text-xs font-medium text-text-muted uppercase tracking-[0.12em] mb-2">{uc.sponsor}</div>
              <h3 className="text-base font-semibold text-text-primary mb-3">{uc.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The manifesto section */}
      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">Why the join matters more than either system alone</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Most enterprise AI projects die because they operate inside one system. A Salesforce
                agent that does not know what is in SAP gives you a confident answer about a customer
                that is factually wrong. An SAP agent that ignores CRM context optimizes procurement
                without knowing which suppliers your key accounts depend on.
              </p>
              <p>
                The highest-ROI AI deployments in the enterprise are not vertical applications.
                They are horizontal joins — agents that read both systems, reason across the combined
                context, and act with full visibility into the transaction AND the relationship.
              </p>
              <p className="text-text-primary font-medium">
                NXπ is the only platform built for this join from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-text-primary font-semibold text-lg mb-1">See the join in action</p>
            <p className="text-text-secondary text-sm">Live demo: query SAP and Salesforce in a single agent call.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-aurora-3 to-aurora-1 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book the demo →
          </a>
        </div>
      </section>
    </div>
  );
}
