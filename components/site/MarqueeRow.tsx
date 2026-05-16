"use client";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MarqueeRowProps {
  items: React.ReactNode[];
  speed?: number;
  className?: string;
  gap?: string;
}

export function MarqueeRow({ items, speed = 0.5, className, gap = "gap-4" }: MarqueeRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!pausedRef.current) {
        offsetRef.current -= speed;
        const half = track.scrollWidth / 2;
        if (Math.abs(offsetRef.current) >= half) offsetRef.current = 0;
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [speed]);

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={trackRef} className={`flex w-max ${gap}`}>
        {items}
        {items}
      </div>
    </div>
  );
}
