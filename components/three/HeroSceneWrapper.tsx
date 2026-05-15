"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })), { ssr: false });

export function HeroSceneWrapper() {
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Suppress THREE.Clock deprecation warning from R3F internals
    // Remove when @react-three/fiber updates to THREE.Timer internally
    const _warn = console.warn.bind(console);
    console.warn = (...args: unknown[]) => {
      if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
      _warn(...args);
    };

    setMounted(true);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    return () => {
      console.warn = _warn;
    };
  }, []);

  if (!mounted || reduced) {
    return (
      <div className="absolute inset-0">
        <MeshBackdrop intensity="high" className="inset-0" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 opacity-60">
      <HeroScene />
    </div>
  );
}
