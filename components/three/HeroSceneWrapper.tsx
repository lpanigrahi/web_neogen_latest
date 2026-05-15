"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })), { ssr: false });

// Suppress THREE.Clock deprecation warning from R3F internals at module scope so
// it persists across component mount/unmount cycles during navigation.
// Remove when @react-three/fiber migrates to THREE.Timer internally.
if (typeof window !== "undefined") {
  const _warn = console.warn.bind(console);
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
    _warn(...args);
  };
}

export function HeroSceneWrapper() {
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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
