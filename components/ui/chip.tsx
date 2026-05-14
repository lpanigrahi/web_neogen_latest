import * as React from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  dot?: boolean;
  dotColor?: "green" | "amber" | "aurora";
}

export function Chip({ className, dot, dotColor = "green", children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-surface px-3 py-1 text-xs text-text-secondary",
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            dotColor === "green" && "bg-green",
            dotColor === "amber" && "bg-amber",
            dotColor === "aurora" && "bg-aurora-1"
          )}
        />
      )}
      {children}
    </span>
  );
}
