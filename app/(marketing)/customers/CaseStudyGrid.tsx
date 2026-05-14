"use client";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";

interface CaseStudy {
  industry: string;
  size: string;
  headline: string;
  quote: string;
  attribution: string;
  outcomes: string[];
}

interface CaseStudyGridProps {
  studies: CaseStudy[];
}

const industryColors: Record<string, string> = {
  "Financial Services": "text-aurora-1 bg-aurora-1/10 border-aurora-1/30",
  Manufacturing: "text-aurora-2 bg-aurora-2/10 border-aurora-2/30",
  Technology: "text-aurora-3 bg-aurora-3/10 border-aurora-3/30",
};

export function CaseStudyGrid({ studies }: CaseStudyGridProps) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-8">
      {studies.map((study) => (
        <motion.div
          key={study.industry}
          variants={staggerItem}
          className="rounded-2xl border border-border-soft bg-bg-elev-1 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Content */}
            <div className="flex-1 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${industryColors[study.industry] ?? "text-text-secondary bg-surface border-border-soft"}`}
                >
                  {study.industry}
                </span>
                <span className="text-xs text-text-tertiary">{study.size}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary leading-snug mb-6">
                {study.headline}
              </h2>

              <blockquote className="relative">
                <div
                  className="absolute -top-2 -left-1 text-5xl text-aurora-1/20 font-serif leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="pl-6 text-base text-text-secondary leading-relaxed italic">
                  {study.quote}
                </p>
                <footer className="mt-4 pl-6">
                  <cite className="text-sm text-text-tertiary not-italic">
                    — {study.attribution}
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Right: Outcomes */}
            <div className="lg:w-72 shrink-0 border-t border-border-soft lg:border-t-0 lg:border-l lg:border-border-soft bg-surface/50 p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-text-tertiary mb-4 font-medium">
                Key outcomes
              </p>
              <ul className="space-y-3">
                {study.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-aurora-1"
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
                    <span className="text-sm text-text-primary leading-snug">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
