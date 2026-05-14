import { cn } from "@/lib/utils";

interface MarkProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export function Mark({ className, size = 32, showWordmark = true }: MarkProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        role="img"
        aria-label="NXπ logo mark"
      >
        <title>NXπ logo mark</title>
        <defs>
          <linearGradient id="mark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B8DEF" />
            <stop offset="100%" stopColor="#9D7CFF" />
          </linearGradient>
        </defs>
        <rect x="4" y="8" width="24" height="2.5" rx="1.25" fill="url(#mark-gradient)" />
        <rect x="7" y="10.5" width="2.5" height="14" rx="1.25" fill="url(#mark-gradient)" />
        <rect x="22.5" y="10.5" width="2.5" height="14" rx="1.25" fill="url(#mark-gradient)" />
        <path d="M7 24.5 Q7 27 9.5 27" stroke="url(#mark-gradient)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
      {showWordmark && (
        <span className="font-sans font-semibold text-text-primary tracking-tight" style={{ fontSize: size * 0.6 }}>
          NX<span style={{ fontStyle: "italic" }}>π</span>
        </span>
      )}
    </div>
  );
}
