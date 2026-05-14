"use client";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";

interface LeadershipMember {
  role: string;
  name: string;
  bio: string;
}

interface AboutLeadershipProps {
  leadership: LeadershipMember[];
}

export function AboutLeadership({ leadership }: AboutLeadershipProps) {
  return (
    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {leadership.map((person) => (
        <motion.div
          key={person.role}
          variants={staggerItem}
          className="rounded-xl border border-border-soft bg-bg-elev-1 p-6 h-full"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-aurora-1/20 to-aurora-3/20 border border-border-soft mb-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-xs text-text-tertiary mb-1 font-medium uppercase tracking-wide">
            {person.role}
          </p>
          <h3 className="font-semibold text-text-primary text-base mb-3">{person.name}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{person.bio}</p>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
