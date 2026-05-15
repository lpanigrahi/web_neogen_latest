"use client";
import { useEffect, useState } from "react";

const BASE = 847_293_441;
const RATE = 127; // tokens per second (marketing visualization)

export function TokenMeter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(BASE);
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      setCount(Math.floor(BASE + elapsed * RATE));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (count === null) return null;

  return (
    <div
      className="flex items-center gap-2 text-xs text-text-muted"
      title="Marketing visualization — not real telemetry"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-aurora-1 animate-pulse" aria-hidden="true" />
      <span className="font-mono">{count.toLocaleString("en-US")}</span>
      <span>tokens processed</span>
    </div>
  );
}
