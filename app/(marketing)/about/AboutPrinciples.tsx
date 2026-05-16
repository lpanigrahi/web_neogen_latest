"use client";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";

interface Principle {
  number: string;
  title: string;
  description: string;
}

interface AboutPrinciplesProps {
  principles: Principle[];
}

export function AboutPrinciples({ principles }: AboutPrinciplesProps) {
  const topRow = principles.slice(0, 3);
  const bottomRow = principles.slice(3);
  return (
    <div className="space-y-6">
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRow.map((p) => (
          <motion.div
            key={p.number}
            variants={staggerItem}
            className="rounded-xl border border-border-soft bg-surface p-6 h-full"
          >
            <div className="text-xs font-mono text-text-muted mb-3">{p.number}</div>
            <h3 className="font-semibold text-text-primary text-base mb-3">{p.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </StaggerGroup>
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bottomRow.map((p) => (
          <motion.div
            key={p.number}
            variants={staggerItem}
            className="rounded-xl border border-border-soft bg-surface p-6 h-full"
          >
            <div className="text-xs font-mono text-text-muted mb-3">{p.number}</div>
            <h3 className="font-semibold text-text-primary text-base mb-3">{p.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </StaggerGroup>
    </div>
  );
}
