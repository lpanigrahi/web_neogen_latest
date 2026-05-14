import type { Metadata } from "next";
import { UseCaseTable } from "@/components/site/UseCaseTable";
import { CalloutBox } from "@/components/site/CalloutBox";

export const metadata: Metadata = {
  title: "NXπ for Salesforce",
  description: "Agentforce is the agent. NXπ is the control plane around it. Extend Salesforce with model choice, enterprise RAG, and cross-system governance.",
};

const salesforceUseCases = [
  { useCase: "Customer 360", sponsor: "CRO/CMO", outcome: "30–50% improvement in retention" },
  { useCase: "Predictive Deal Scoring", sponsor: "CRO", outcome: "25% lift in win rates" },
  { useCase: "Service Case Automation", sponsor: "COO/CXO", outcome: "60–70% first-response automation" },
  { useCase: "Campaign ROI", sponsor: "CMO", outcome: "Real-time campaign optimization" },
  { useCase: "Revenue Forecasting", sponsor: "CFO", outcome: "15–20% forecast accuracy lift" },
];

export default function SalesforcePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-aurora-2 uppercase tracking-[0.16em] mb-4">Salesforce Integration</div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-[1.1] mb-6">
            Agentforce is the agent.
            <span className="block text-aurora-2 mt-1">NXπ is the control plane around it.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Salesforce Agentforce excels inside the Salesforce cloud. NXπ surrounds it with model
            choice, cross-system intelligence, enterprise RAG, and the governance controls your CISO
            actually needs — including full audit trails across every CRM action.
          </p>
        </div>
      </section>

      {/* Use Case Table */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Salesforce Use Cases</h2>
        <UseCaseTable useCases={salesforceUseCases} />
      </section>

      {/* Why NXπ callout */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <CalloutBox variant="aurora">
          <h3 className="text-lg font-semibold text-text-primary mb-3">Why NXπ wins for Salesforce-led enterprises</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex gap-3">
              <span className="text-aurora-3 mt-0.5">→</span>
              <span><strong className="text-text-primary">Real-time CRM intelligence.</strong> MCP connectors stream live Salesforce data into agent context — no stale exports, no ETL lag.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-aurora-3 mt-0.5">→</span>
              <span><strong className="text-text-primary">Model choice beyond Einstein.</strong> Route tasks to Claude for reasoning, Gemini for multimodal, Llama for on-prem — then write results back to Salesforce.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-aurora-3 mt-0.5">→</span>
              <span><strong className="text-text-primary">Cross-system grounding.</strong> Enrich every Salesforce record with SAP order data, support tickets, web signals, and internal knowledge — in a single agent call.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-aurora-3 mt-0.5">→</span>
              <span><strong className="text-text-primary">Governed agent execution.</strong> Every Agentforce action, every NXπ agent step is logged with full lineage — meeting SOX and EU AI Act auditability requirements.</span>
            </li>
          </ul>
        </CalloutBox>
      </section>

      {/* Key use cases */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-10">What changes with NXπ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Customer 360 that actually closes", body: "Pull SAP order history, Salesforce CRM signals, and support case data into a single agent-generated account brief — before every sales call." },
            { title: "Deal scoring at commit time", body: "Predictive scoring that uses real-time pipe velocity, competitive signals, and historical close patterns — not a static ML model trained six months ago." },
            { title: "Service cases that resolve themselves", body: "60–70% of first-response service cases are handled autonomously — classified, routed, responded to, and escalated only when human judgment is required." },
          ].map((uc, i) => (
            <div key={i} className="rounded-xl border border-border-soft bg-surface p-6">
              <div className="text-4xl font-bold text-aurora-2/20 mb-4">0{i + 1}</div>
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
            <p className="text-text-primary font-semibold text-lg mb-1">Connect NXπ to your Salesforce org</p>
            <p className="text-text-secondary text-sm">See live CRM intelligence in 30 minutes.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-aurora-2 to-aurora-3 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book the demo →
          </a>
        </div>
      </section>
    </div>
  );
}
