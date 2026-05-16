"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
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

const reducedVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function FadeIn({ children, delay = 0, duration = 0.5, className, direction = "up" }: FadeInProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      // 200px margin means elements animate in before entering viewport,
      // reducing blank content flashes on slow connections.
      viewport={{ once: true, margin: "200px 0px" }}
      transition={
        prefersReduced
          ? { duration: 0 }
          : { duration, delay, type: "spring", stiffness: 220, damping: 28 }
      }
      variants={prefersReduced ? reducedVariants : directionVariants[direction]}
    >
      {children}
    </motion.div>
  );
}
