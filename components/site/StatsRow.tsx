"use client";
import { motion } from "framer-motion";
import { StatCounter } from "@/components/site/StatCounter";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";

interface Stat {
  value: string;
  label: string;
  source?: string;
}

interface StatsRowProps {
  stats: Stat[];
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
      {stats.map((stat) => (
        <motion.div key={stat.value} variants={staggerItem}>
          <StatCounter value={stat.value} label={stat.label} source={stat.source} />
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
