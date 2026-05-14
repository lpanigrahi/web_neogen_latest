import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "NXπ is EU AI Act-ready, SOC 2-aligned, and built on zero-trust principles. Every action is logged. Every decision is auditable.",
};

const COMPLIANCE = [
  {
    label: "EU AI Act",
    status: "Ready",
    statusColor: "text-green border-green/30 bg-green/10",
    description:
      "High-risk system requirements met. Transparency, human oversight, and audit logging built-in. Deadline: Aug 2, 2026.",
  },
  {
    label: "SOC 2 Type II",
    status: "In progress",
    statusColor: "text-amber border-amber/30 bg-amber/10",
    description:
      "Controls framework implemented. Audit period in progress. Report available Q3 2025.",
  },
  {
    label: "GDPR",
    status: "Ready",
    statusColor: "text-green border-green/30 bg-green/10",
    description:
      "Data residency controls, right-to-erasure workflow, and Data Processing Agreement available.",
  },
  {
    label: "HIPAA",
    status: "Available",
    statusColor: "text-aurora-1 border-aurora-1/30 bg-aurora-1/10",
    description:
      "PHI controls and audit logging. Self-hosted deployment option ensures data never leaves your perimeter.",
  },
  {
    label: "SOX",
    status: "Ready",
    statusColor: "text-green border-green/30 bg-green/10",
    description:
      "Append-only audit trail, financial process controls, segregation of duty enforcement through RBAC.",
  },
  {
    label: "ISO 27001",
    status: "Aligned",
    statusColor: "text-aurora-1 border-aurora-1/30 bg-aurora-1/10",
    description:
      "Information security management framework alignment. Formal certification roadmap in 2025.",
  },
];

const SECURITY_PRINCIPLES = [
  {
    title: "Zero-trust access",
    description:
      "Every request is authenticated and authorized. Per-user RBAC with label-based policies. MCP server scoping ensures agents can only access tools they are explicitly permitted to use.",
  },
  {
    title: "PII detection & masking",
    description:
      "Presidio-powered PII detection runs on every prompt before it reaches any LLM. Names, emails, financial identifiers, and health data are detected and masked. The original data stays in your store.",
  },
  {
    title: "Append-only audit logs",
    description:
      "Every agent action, tool call, and decision is written to an append-only, cryptographically chained log in your PostgreSQL. Logs are queryable but immutable. Your regulators can verify every decision.",
  },
  {
    title: "Context window compaction",
    description:
      "Sensitive conversation history is compacted and summarized at configurable intervals. Raw prompt content does not accumulate indefinitely in the context window.",
  },
];

const DEPLOYMENT_OPTIONS = [
  {
    title: "Self-hosted",
    color: "text-aurora-1",
    borderColor: "border-aurora-1/30",
    bgColor: "bg-aurora-1/5",
    points: [
      "Data never leaves your network",
      "Local Ollama — no external LLM calls",
      "Customer-owned PostgreSQL",
      "Air-gap compatible",
      "On-premises HSM for key management",
    ],
  },
  {
    title: "Private cloud",
    color: "text-aurora-3",
    borderColor: "border-aurora-3/30",
    bgColor: "bg-aurora-3/5",
    points: [
      "Your VPC, your keys, your control",
      "AWS / Azure / GCP private endpoints",
      "Customer-managed encryption keys",
      "VPC-only egress — no public internet",
      "Managed databases within your account",
    ],
  },
  {
    title: "Hybrid",
    color: "text-aurora-2",
    borderColor: "border-aurora-2/30",
    bgColor: "bg-aurora-2/5",
    points: [
      "Self-hosted data layer + cloud inference",
      "You choose what crosses the boundary",
      "Prompt/response only — no raw data to LLM",
      "Flexible model routing per use case",
      "Gradual migration path to full self-hosting",
    ],
  },
];

const SUBPROCESSORS = [
  {
    name: "Vercel",
    purpose: "Hosting (optional — can self-host)",
    region: "US / EU",
    dataType: "Web traffic, no business data",
  },
  {
    name: "Anthropic",
    purpose: "LLM inference (optional — can use Ollama)",
    region: "US",
    dataType: "Masked prompts only",
  },
  {
    name: "OpenAI",
    purpose: "LLM inference (optional)",
    region: "US",
    dataType: "Masked prompts only",
  },
  {
    name: "Google",
    purpose: "Gemini inference (optional)",
    region: "US / EU",
    dataType: "Masked prompts only",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs text-green mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              Security & Trust Center
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.08]">
              Every action logged.{" "}
              <span className="bg-gradient-to-r from-green to-aurora-2 bg-clip-text text-transparent">
                Every decision auditable.
              </span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              NXπ is EU AI Act-ready, SOC 2-aligned, and built on zero-trust principles.
              We designed for the regulated enterprise from day one — not as a compliance
              checkbox, but as an architectural invariant.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Compliance & Certifications
            </h2>
            <p className="text-text-secondary">
              Regulatory readiness built into the product, not bolted on afterward.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPLIANCE.map((cert) => (
              <div
                key={cert.label}
                className="rounded-xl border border-border-soft bg-bg-elev-2 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-text-primary">{cert.label}</h3>
                  <span
                    className={`text-xs font-medium border rounded-full px-2.5 py-0.5 ${cert.statusColor}`}
                  >
                    {cert.status}
                  </span>
                </div>
                <p className="text-sm text-text-tertiary leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Security Architecture
          </h2>
          <p className="text-text-secondary">
            Zero-trust from the first request to the last audit log entry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-border-soft bg-bg-elev-1 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-2 w-2 rounded-full bg-green flex-shrink-0" />
                <h3 className="font-semibold text-text-primary">{principle.title}</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed pl-5">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment Sovereignty */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Data Sovereignty
            </h2>
            <p className="text-text-secondary">
              Choose where your data lives. The platform is identical across all deployment modes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPLOYMENT_OPTIONS.map((opt) => (
              <div
                key={opt.title}
                className={`rounded-xl border p-6 ${opt.borderColor} ${opt.bgColor}`}
              >
                <h3 className={`font-semibold text-base mb-4 ${opt.color}`}>
                  {opt.title}
                </h3>
                <ul className="space-y-2.5">
                  {opt.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${opt.color}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subprocessors */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Subprocessors</h2>
          <p className="text-text-secondary">
            All external processing is optional. Every subprocessor can be eliminated with
            self-hosted or private-cloud deployment.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border-soft">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-soft bg-bg-elev-2">
                <th className="text-left px-6 py-4 text-text-muted font-medium">Subprocessor</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium">Purpose</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium">Region</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium">Data processed</th>
              </tr>
            </thead>
            <tbody>
              {SUBPROCESSORS.map((sp, idx) => (
                <tr
                  key={sp.name}
                  className={idx % 2 === 0 ? "bg-bg-elev-1" : "bg-bg-elev-2/50"}
                >
                  <td className="px-6 py-4 font-medium text-text-primary">{sp.name}</td>
                  <td className="px-6 py-4 text-text-tertiary">{sp.purpose}</td>
                  <td className="px-6 py-4 text-text-tertiary">{sp.region}</td>
                  <td className="px-6 py-4 text-text-tertiary">{sp.dataType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-text-muted">
          This list is illustrative. A complete, up-to-date subprocessor list is available
          upon request or within your DPA.
        </p>
      </section>

      {/* Vulnerability Disclosure */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Vulnerability Disclosure
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We operate a responsible disclosure program. If you discover a security
              vulnerability in NXπ, please report it to us privately before any public
              disclosure. We commit to acknowledging reports within 24 hours and providing
              a remediation timeline within 72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button asChild>
                <a href="mailto:security@nxpi.ai">security@nxpi.ai</a>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/legal/dpa">Download DPA</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
