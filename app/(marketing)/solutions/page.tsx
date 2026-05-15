import type { Metadata } from "next";
import { SolutionsHub } from "./_components/SolutionsHub";

export const metadata: Metadata = {
  title: "Solutions",
  description: "NXπ solutions for every CXO, every enterprise system, and every regulated industry.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-medium text-aurora-1 uppercase tracking-[0.16em] mb-4">Solutions</div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-[1.1] mb-6">
            Every CXO.<br />Every system.<br />Every industry.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            NXπ is the AI control plane that meets you where you are — by role, by system, or by sector.
            One governed platform. Every model. Every data source.
          </p>
        </div>

        <h2 className="sr-only">Solutions by role, system, and industry</h2>
        <SolutionsHub />
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-text-primary font-semibold text-lg mb-1">Not sure where to start?</p>
            <p className="text-text-secondary text-sm">Book a 30-minute architecture call with the NXπ team.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-aurora-1 to-aurora-3 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book a briefing →
          </a>
        </div>
      </section>
    </div>
  );
}
