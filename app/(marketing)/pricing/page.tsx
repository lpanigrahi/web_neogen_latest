import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PricingTiers } from "@/components/site/PricingTiers";
import { ROICalculator } from "@/components/site/ROICalculator";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Platform subscription pricing — not per-token. NXπ charges a predictable annual fee. You own your infrastructure and your LLM spend.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aurora-3/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora-3/30 bg-aurora-3/10 px-3 py-1 text-xs text-aurora-3 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-3" />
              Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.08]">
              Predictable pricing.{" "}
              <span className="bg-gradient-to-r from-aurora-3 to-aurora-1 bg-clip-text text-transparent">
                Aligned incentives.
              </span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Platform subscription — not per-token. You own your infrastructure and your
              LLM spend. Our success is measured by how much your total AI cost goes down.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy callout */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-aurora-1/30 bg-aurora-1/5 p-8">
              <p className="text-base text-text-primary leading-relaxed">
                <span className="font-semibold text-aurora-1">We do not charge per token.</span>{" "}
                You own your infrastructure and your LLM spend. NXπ charges a predictable
                platform subscription — so our incentives align: we succeed when your total
                AI spend goes down while your decision throughput goes up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <PricingTiers />
      </section>

      {/* Self-hosted callout */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-green/30 bg-green/5 p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green/15 border border-green/30">
                <svg
                  className="w-5 h-5 text-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 12l5 5L20 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary text-base mb-2">
                  Self-hosted on all tiers
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Self-hosted deployment is available on every tier including Team. Run NXπ
                  entirely within your infrastructure — on-premises, private cloud, or
                  air-gapped. No data leaves your perimeter. No vendor access to your systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Estimate your return
            </h2>
            <p className="text-text-secondary">
              Adjust the inputs to estimate what NXπ could save your organisation
              in the first 12–18 months.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* CTA Band */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Ready to see it in your environment?
            </h2>
            <p className="mt-2 text-text-secondary">
              We run a 90-minute technical briefing with your team — architecture,
              security, and a live demo against your stack.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button variant="secondary" asChild>
              <Link href="/security">Security overview</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Book a briefing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
