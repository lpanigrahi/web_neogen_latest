"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px)`;
      animId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    animId = requestAnimationFrame(tick);
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(animId); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-aurora-2 will-change-transform hidden [.pointer-fine_&]:block" aria-hidden="true" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[9998] h-[28px] w-[28px] rounded-full border border-aurora-2/50 will-change-transform hidden [.pointer-fine_&]:block" aria-hidden="true" />
    </>
  );
}
