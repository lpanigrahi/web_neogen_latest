"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionVariants: Record<string, Variants> = {
  up: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function FadeIn({ children, delay = 0, duration = 0.5, className, direction = "up" }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, type: "spring", stiffness: 220, damping: 28 }}
      variants={directionVariants[direction]}
    >
      {children}
    </motion.div>
  );
}
