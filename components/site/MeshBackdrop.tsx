"use client";
import { cn } from "@/lib/utils";

interface MeshBackdropProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function MeshBackdrop({ className, intensity = "medium" }: MeshBackdropProps) {
  const op = { low: 0.2, medium: 0.35, high: 0.5 }[intensity];
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, rgba(91,141,239,${op}) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(157,124,255,${op * 0.7}) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(74,222,222,${op * 0.4}) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
