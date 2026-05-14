"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ROLE_HERO_COPY: Record<string, { subhead: string; cta: string }> = {
  cfo: {
    subhead:
      "Every prompt costed. Every agent budgeted. Every ROI dollar measurable. NXπ gives your finance team AI that survives a board audit.",
    cta: "Download the AI ROI framework",
  },
  ciso: {
    subhead:
      "EU AI Act-ready by August 2, 2026. Zero-trust by default. Every action logged in your PostgreSQL — not ours.",
    cta: "Read the security overview",
  },
  cto: {
    subhead:
      "One platform. Ten LLM providers. Forty models. 114+ API endpoints. End the AI tool sprawl without a rip-and-replace.",
    cta: "See the architecture",
  },
  cdo: {
    subhead:
      "Real-time SAP. Real-time Salesforce. Hybrid RAG at 91%+ recall. Sub-200ms queries across your unified data fabric.",
    cta: "Explore the data layer",
  },
};

export function UTMPersonalizer() {
  const params = useSearchParams();

  useEffect(() => {
    const role = params.get("role");
    if (!role) return;
    const copy = ROLE_HERO_COPY[role];
    if (!copy) return;

    // Update hero subhead if present
    const subhead = document.getElementById("hero-subhead");
    if (subhead) subhead.textContent = copy.subhead;

    const ctaText = document.getElementById("hero-cta-primary");
    if (ctaText) ctaText.textContent = copy.cta;
  }, [params]);

  return null;
}
