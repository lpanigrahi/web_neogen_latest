"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PillarCardProps {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  href: string;
  demo?: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function PillarCard({ eyebrow, title, body, bullets, href, demo, className, featured }: PillarCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative rounded-xl border border-border-soft bg-bg-elev-1 p-6 flex flex-col gap-4 overflow-hidden transition-all",
        featured && "md:col-span-2",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="absolute inset-0 rounded-xl border border-aurora-1/0 group-hover:border-aurora-1/20 transition-all duration-300 pointer-events-none" />
      {demo && <div className="mb-2">{demo}</div>}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-2">{eyebrow}</p>
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="text-xs text-text-tertiary flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-aurora-1 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1 text-xs text-aurora-1 hover:text-aurora-2 transition-colors min-h-[44px]"
      >
        Learn more <ArrowRight size={12} />
      </Link>
    </motion.div>
  );
}
