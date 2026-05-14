import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { PillarCardGrid } from "@/components/platform/PillarCardGrid";
import { ArrowRight, Shield, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Six pillars. One platform. Every system, one protocol. NXπ is the enterprise AI operations platform built for SAP, Salesforce, and every data source.",
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-bg-base">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <MeshBackdrop intensity="low" />
        <div className="relative mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn>
            <p className="mb-4 text-xs font-semibold tracking-widest uppercase text-aurora-1">
              NXπ Platform
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Six pillars.{" "}
              <span className="bg-gradient-to-r from-aurora-1 via-aurora-2 to-aurora-3 bg-clip-text text-transparent">
                One platform.
              </span>
              <br />
              Every system, one protocol.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-text-secondary">
              NXπ is the enterprise AI operations platform built for SAP, Salesforce, and every data
              source — connected through the Model Context Protocol, orchestrated by intelligent agents,
              governed by zero-trust policy.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Book an executive briefing</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/architecture">
                  View architecture <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pillar grid */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-24">
        <FadeIn>
          <p className="mb-8 text-sm text-text-muted">
            Explore all six pillars — click any card for a deep dive.
          </p>
        </FadeIn>
        <PillarCardGrid />
      </section>

      {/* Deep-link band: Architecture + Security */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16">
          <FadeIn>
            <p className="mb-8 text-xs font-semibold tracking-widest uppercase text-text-muted">
              Go deeper
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            <FadeIn delay={0.05}>
              <Link
                href="/architecture"
                className="group flex items-start gap-4 rounded-xl border border-border-soft bg-bg-base p-6 transition-all hover:border-aurora-1/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border-soft bg-bg-elev-1">
                  <Layers className="h-5 w-5 text-aurora-2" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-text-primary group-hover:text-aurora-1 transition-colors">
                    Architecture deep-dive
                  </h3>
                  <p className="text-sm text-text-secondary">
                    How the six pillars interconnect — data flow, agent graph, and deployment topology.
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 flex-shrink-0 text-text-muted group-hover:text-aurora-1 group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/security"
                className="group flex items-start gap-4 rounded-xl border border-border-soft bg-bg-base p-6 transition-all hover:border-aurora-1/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border-soft bg-bg-elev-1">
                  <Shield className="h-5 w-5 text-green" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-text-primary group-hover:text-aurora-1 transition-colors">
                    Security &amp; compliance
                  </h3>
                  <p className="text-sm text-text-secondary">
                    EU AI Act readiness, SOC 2 Type II, zero-trust posture, and audit guarantees.
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 flex-shrink-0 text-text-muted group-hover:text-aurora-1 group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-t border-border-soft py-24">
        <MeshBackdrop intensity="medium" />
        <div className="relative mx-auto max-w-[1408px] px-5 lg:px-12 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">
              Ready to see it in action?
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mb-8 text-lg text-text-secondary">
              Book an executive briefing and get a live walkthrough of all six pillars.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Book an executive briefing</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
