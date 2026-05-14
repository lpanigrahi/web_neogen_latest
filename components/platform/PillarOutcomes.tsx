"use client";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";
import { CheckCircle } from "lucide-react";

interface PillarOutcomesProps {
  outcomes: [string, string, string];
  accentClass: string;
}

export function PillarOutcomes({ outcomes, accentClass }: PillarOutcomesProps) {
  return (
    <StaggerGroup className="grid gap-4 sm:grid-cols-3">
      {outcomes.map((outcome, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className="flex items-start gap-3 rounded-xl border border-border-soft bg-bg-elev-2 p-5"
        >
          <CheckCircle className={`mt-0.5 h-5 w-5 flex-shrink-0 ${accentClass}`} />
          <p className="text-sm text-text-secondary leading-relaxed">{outcome}</p>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
