import { cn } from "@/lib/utils";

interface CalloutBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "aurora";
}

export function CalloutBox({ children, className, variant = "default" }: CalloutBoxProps) {
  return (
    <div className={cn(
      "rounded-xl border-l-2 pl-6 py-4 pr-4",
      variant === "default" && "border-l-aurora-1 bg-aurora-1/5",
      variant === "aurora" && "border-l-aurora-3 bg-aurora-3/5",
      className
    )}>
      {children}
    </div>
  );
}
