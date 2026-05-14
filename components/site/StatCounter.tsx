"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  source?: string;
  className?: string;
}

export function StatCounter({ value, label, source, className }: StatCounterProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="text-4xl font-bold text-text-primary tracking-tight">{value}</div>
      <div className="text-sm text-text-secondary">{label}</div>
      {source && <div className="text-xs text-text-muted">{source}</div>}
    </div>
  );
}
