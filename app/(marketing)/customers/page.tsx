import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { FadeIn } from "@/components/motion/FadeIn";
import { CaseStudyGrid } from "./CaseStudyGrid";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "How regulated enterprises use NXπ to connect SAP, Salesforce, and their data under one governed AI control plane.",
};

export const caseStudies = [
  {
    industry: "Financial Services",
    size: "12,000 employees",
    headline: "40% reduction in financial close cycle time.",
    quote:
      "NXπ connects our SAP billing data with Salesforce revenue recognition in one governed pipeline. What took four analysts three days now takes one agent four hours — with a full audit trail our CFO can show the board.",
    attribution: "Controller, Global Financial Services Firm",
    outcomes: [
      "40% reduction in close cycle time",
      "100% audit trail coverage",
      "3 analysts redeployed to strategic work",
    ],
  },
  {
    industry: "Manufacturing",
    size: "45,000 employees",
    headline: "Real-time supply chain risk detection across 200+ suppliers.",
    quote:
      "We were doing weekly batch analysis on SAP procurement data. NXπ gave us real-time risk scoring across our entire supplier network — with explanations our procurement team actually understands.",
    attribution: "CDO, Global Manufacturing Enterprise",
    outcomes: [
      "Real-time vs weekly batch detection",
      "200+ suppliers monitored continuously",
      "15–25% procurement cost reduction",
    ],
  },
  {
    industry: "Technology",
    size: "3,200 employees",
    headline: "80% reduction in BI request backlog.",
    quote:
      "Our data team was buried in ad-hoc requests from finance, sales, and operations. NXπ's hybrid RAG lets any executive query across SAP and Salesforce in plain language — without touching our data team's queue.",
    attribution: "CTO, Enterprise Software Company",
    outcomes: [
      "80% reduction in BI backlog",
      "Sub-200ms query response time",
      "$200K annual BI tooling savings",
    ],
  },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <MeshBackdrop intensity="low" />
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32 relative">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora-1/30 bg-aurora-1/10 px-3 py-1 text-xs text-aurora-1 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-1" />
              Customers
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.08] max-w-3xl">
              Regulated enterprises,{" "}
              <span className="bg-gradient-to-r from-aurora-1 to-aurora-3 bg-clip-text text-transparent">
                real results.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              How enterprise teams in financial services, manufacturing, and technology use NXπ
              to connect SAP, Salesforce, and their data — under one governed AI control plane.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16">
        <CaseStudyGrid studies={caseStudies} />
      </section>

      {/* Pull Quote */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl lg:text-3xl font-semibold text-text-primary leading-snug">
                &ldquo;The most valuable AI use cases in the enterprise live in the{" "}
                <span className="bg-gradient-to-r from-aurora-1 to-aurora-3 bg-clip-text text-transparent">
                  join between systems
                </span>
                {" "}— not inside any one of them.&rdquo;
              </p>
              <p className="mt-6 text-text-tertiary text-sm">NXπ Research, 2026</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
        <FadeIn>
          <div className="rounded-2xl border border-border-soft bg-bg-elev-1 p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
                See what NXπ can do for your organization.
              </h2>
              <p className="mt-3 text-text-secondary max-w-xl">
                We run a 90-minute technical briefing with your team — architecture, security,
                and a live demo against your stack.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="secondary" asChild>
                <Link href="/platform">Explore the platform</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Book a briefing</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
