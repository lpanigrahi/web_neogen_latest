import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { FadeIn } from "@/components/motion/FadeIn";
import { AboutPrinciples } from "./AboutPrinciples";
import { AboutLeadership } from "./AboutLeadership";

export const metadata: Metadata = {
  title: "About",
  description:
    "Negentrophi builds the governed AI layer for the enterprise. We exist to reverse entropy — to create coherent intelligence from fragmented systems, siloed data, and ungoverned AI experiments.",
};

export const principles = [
  {
    number: "01",
    title: "People First, Always",
    description:
      "Technology is a means, not an end. Every design decision is weighed by its impact on the humans who use it — and the humans whose lives are touched by decisions it informs. Governance is not a constraint. It is care.",
  },
  {
    number: "02",
    title: "Open by Default, Governed by Design",
    description:
      "We build on open protocols — MCP, PostgreSQL, standard LLM APIs. Interoperability is non-negotiable. But openness without governance is chaos. Every integration point is a governance point.",
  },
  {
    number: "03",
    title: "The Compound Value of Integration",
    description:
      "The value of connected systems compounds. One integration is useful. Ten integrations, properly governed, unlock capabilities that could not exist in any single system. This is why we build the join layer.",
  },
  {
    number: "04",
    title: "Earn Trust Through Transparency",
    description:
      "Every action is logged. Every decision is traceable. Every model output is attributed to its sources. We do not ask customers to trust us — we build systems that make trust verifiable.",
  },
  {
    number: "05",
    title: "Long-Term Thinking, Iterative Delivery",
    description:
      "Enterprise infrastructure is not replaced overnight. We design for the 10-year horizon while shipping every sprint. Patient about vision, impatient about execution.",
  },
];

export const leadership = [
  {
    role: "Founder / CEO",
    name: "[Name]",
    bio: "Previously led enterprise AI strategy at a Fortune 500. Deep background in financial systems, ERP integration, and enterprise architecture.",
  },
  {
    role: "Co-Founder / CTO",
    name: "[Name]",
    bio: "Prior infrastructure and platform engineering leadership. Built data infrastructure at scale for regulated industries. Open-source contributor to the MCP ecosystem.",
  },
  {
    role: "Head of Product",
    name: "[Name]",
    bio: "Enterprise software product leadership across ERP, analytics, and AI workflow platforms. Focused on making complex systems legible to non-technical decision-makers.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero / Manifesto */}
      <section className="relative overflow-hidden">
        <MeshBackdrop intensity="low" />
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32 relative">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora-2/30 bg-aurora-2/10 px-3 py-1 text-xs text-aurora-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-2" />
              About Negentrophi
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.08] max-w-4xl">
              We exist to{" "}
              <span className="bg-gradient-to-r from-aurora-1 via-aurora-2 to-aurora-3 bg-clip-text text-transparent">
                reverse entropy
              </span>{" "}
              in the enterprise.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-xl text-text-secondary leading-relaxed max-w-3xl">
              Organizations drown in fragmented tools, siloed data, and ungoverned AI experiments.
              Negentrophi builds the unifying layer that transforms this disorder into coherent
              intelligence — governed, transparent, and humane.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-base text-text-tertiary leading-relaxed max-w-3xl">
              Negentropy is the tendency of complex systems to create order from chaos. It is the
              organizing principle of life itself. We named our company after it because we believe
              that the most important work in enterprise AI is not building smarter models — it is
              building the infrastructure that transforms organizational chaos into coherent,
              trustworthy intelligence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Five founding principles
            </h2>
            <p className="text-text-secondary max-w-2xl mb-16">
              These are not values we aspire to. They are the constraints we design within.
            </p>
          </FadeIn>
          <AboutPrinciples principles={principles} />
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <FadeIn>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">Leadership</h2>
          <p className="text-text-secondary max-w-2xl mb-16">
            Small team. Deep domain expertise. Long time horizon.
          </p>
        </FadeIn>
        <AboutLeadership leadership={leadership} />
      </section>

      {/* Careers */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                We are hiring.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Small teams. Deep ownership. Work on infrastructure that will govern how enterprises
                deploy AI at scale. If you care about building systems that are both powerful and
                trustworthy, we want to talk to you.
              </p>
              <Button asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
