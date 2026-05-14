"use client";
import dynamic from "next/dynamic";

const ROICalculatorLazy = dynamic(
  () => import("@/components/site/ROICalculator").then((m) => ({ default: m.ROICalculator })),
  { ssr: false, loading: () => <div className="h-64 rounded-xl bg-bg-elev-1 animate-pulse" /> }
);

export function ROICalculatorDynamic() {
  return <ROICalculatorLazy />;
}
