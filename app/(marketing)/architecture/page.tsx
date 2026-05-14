import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagramFull } from "@/components/site/ArchitectureDiagramFull";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "NXπ's 4-layer architecture: Client, API & Orchestration, AI Core, and Data & Storage. Self-hosted, private cloud, or hybrid deployment.",
};

const DEPLOYMENT_MATRIX = [
  {
    feature: "Database",
    selfHosted: "PostgreSQL on your hardware",
    privateCloud: "Managed RDS / Azure DB / Cloud SQL",
    hybrid: "Self-hosted PostgreSQL",
  },
  {
    feature: "LLM inference",
    selfHosted: "Ollama — fully local",
    privateCloud: "Anthropic / OpenAI / Gemini via VPC",
    hybrid: "Cloud LLMs via private endpoint",
  },
  {
    feature: "Infrastructure",
    selfHosted: "Your servers, your Kubernetes",
    privateCloud: "AWS / Azure / GCP VPC",
    hybrid: "Split — data local, inference cloud",
  },
  {
    feature: "Encryption keys",
    selfHosted: "Customer-managed, on-prem HSM",
    privateCloud: "Customer-managed CMKs (KMS/Key Vault)",
    hybrid: "Customer-managed for data layer",
  },
  {
    feature: "Data egress",
    selfHosted: "Zero — nothing leaves the perimeter",
    privateCloud: "VPC-only — no public internet",
    hybrid: "Prompt/response only to LLM provider",
  },
  {
    feature: "Air-gap support",
    selfHosted: "Yes",
    privateCloud: "Partial (with private endpoints)",
    hybrid: "No",
  },
];

const TECH_STACK = [
  {
    layer: "Client",
    color: "text-aurora-1",
    items: [
      { name: "Next.js 15", role: "Web UI & SSR" },
      { name: "React 19", role: "Component layer" },
      { name: "Tailwind CSS", role: "Design system" },
      { name: "Framer Motion", role: "Animation" },
    ],
  },
  {
    layer: "API & Orchestration",
    color: "text-aurora-3",
    items: [
      { name: "FastAPI / Node", role: "API gateway" },
      { name: "MCP Protocol", role: "Tool connectivity" },
      { name: "RBAC engine", role: "Policy enforcement" },
      { name: "Temporal (optional)", role: "Workflow scheduling" },
    ],
  },
  {
    layer: "AI Core",
    color: "text-aurora-2",
    items: [
      { name: "LangChain / custom", role: "Orchestration" },
      { name: "pgvector", role: "Vector search" },
      { name: "Presidio", role: "PII detection" },
      { name: "Ollama", role: "Local inference" },
    ],
  },
  {
    layer: "Data & Storage",
    color: "text-green",
    items: [
      { name: "PostgreSQL 16", role: "Primary store" },
      { name: "Redis", role: "Cache & sessions" },
      { name: "S3 / GCS / Azure Blob", role: "Document storage" },
      { name: "Append-only log", role: "Audit trail" },
    ],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aurora-1/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora-1/30 bg-aurora-1/10 px-3 py-1 text-xs text-aurora-1 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-1" />
              Technical Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.08]">
              Built for the enterprise.{" "}
              <span className="bg-gradient-to-r from-aurora-1 to-aurora-3 bg-clip-text text-transparent">
                Deployable anywhere.
              </span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Four clean layers. Every boundary is a security boundary. Every layer is
              independently replaceable. Self-hosted, private cloud, or hybrid — the
              architecture is the same. Only the infrastructure changes.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            4-Layer Architecture
          </h2>
          <p className="text-text-secondary mb-8">
            Click any layer to expand tech stack details and security properties.
          </p>
          <ArchitectureDiagramFull />
        </div>
      </section>

      {/* Deployment Matrix */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Deployment Matrix
            </h2>
            <p className="text-text-secondary">
              All deployment modes run the same codebase. Your choice of where data lives
              has no impact on feature parity.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border-soft">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-soft bg-bg-elev-2">
                  <th className="text-left px-6 py-4 text-text-muted font-medium w-40">
                    Feature
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-aurora-1 font-semibold">Self-hosted</span>
                    <p className="text-xs text-text-muted font-normal mt-0.5">
                      Your infrastructure, full control
                    </p>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-aurora-3 font-semibold">Private Cloud</span>
                    <p className="text-xs text-text-muted font-normal mt-0.5">
                      AWS / Azure / GCP VPC
                    </p>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-aurora-2 font-semibold">Hybrid</span>
                    <p className="text-xs text-text-muted font-normal mt-0.5">
                      Data local, inference cloud
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {DEPLOYMENT_MATRIX.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-bg-elev-1" : "bg-bg-elev-2/50"}
                  >
                    <td className="px-6 py-4 font-medium text-text-secondary">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-text-tertiary">{row.selfHosted}</td>
                    <td className="px-6 py-4 text-text-tertiary">{row.privateCloud}</td>
                    <td className="px-6 py-4 text-text-tertiary">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Technology Stack</h2>
          <p className="text-text-secondary">
            Boring, proven choices at every layer. No proprietary lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TECH_STACK.map((stack) => (
            <div
              key={stack.layer}
              className="rounded-xl border border-border-soft bg-bg-elev-1 p-6"
            >
              <h3 className={`text-sm font-semibold mb-4 ${stack.color}`}>
                {stack.layer}
              </h3>
              <ul className="space-y-3">
                {stack.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-text-primary">{item.name}</span>
                    <span className="text-xs text-text-muted">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Download Poster */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-16">
        <div className="max-w-3xl mx-auto text-right">
          <a
            href="/architecture/poster.svg"
            download="nxpi-architecture-poster.svg"
            className="inline-flex items-center gap-2 text-sm text-aurora-1 hover:text-aurora-2 transition-colors"
          >
            <Download size={16} />
            Download architecture poster (SVG, A1)
          </a>
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Need a deeper technical review?
            </h2>
            <p className="mt-2 text-text-secondary">
              We walk your team through the full architecture, threat model, and data flows.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button variant="secondary" asChild>
              <Link href="/security">Security overview</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Book a technical briefing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
