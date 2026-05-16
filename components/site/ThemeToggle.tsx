"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  className,
  "aria-hidden": ariaHidden,
  tabIndex,
}: {
  className?: string;
  "aria-hidden"?: boolean | "true";
  tabIndex?: number;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const current = stored ?? "dark";
    setTheme(current as "dark" | "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-hidden={ariaHidden}
      tabIndex={tabIndex}
      className={cn(
        "flex items-center justify-center w-11 h-11 rounded-lg border border-border-soft",
        "text-text-muted hover:text-text-primary hover:bg-surface transition-all",
        className
      )}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
