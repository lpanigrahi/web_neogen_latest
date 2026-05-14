"use client";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";

interface RoleQuote {
  role: string;
  name: string;
  quote: string;
}

interface PillarRolesProps {
  roles: [RoleQuote, RoleQuote, RoleQuote];
}

export function PillarRoles({ roles }: PillarRolesProps) {
  return (
    <StaggerGroup className="grid gap-4 sm:grid-cols-3">
      {roles.map((r, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className="rounded-xl border border-border-soft bg-bg-elev-1 p-5"
        >
          <span className="mb-3 inline-block rounded-full border border-border-soft bg-surface px-3 py-1 text-xs font-semibold text-text-secondary">
            {r.role}
          </span>
          <p className="mb-3 text-sm italic text-text-secondary leading-relaxed">
            &ldquo;{r.quote}&rdquo;
          </p>
          <p className="text-xs text-text-muted">{r.name}</p>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
