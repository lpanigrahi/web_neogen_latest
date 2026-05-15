"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Tier {
  name: string;
  tagline: string;
  price: string;
  annualPrice: string;
  highlighted: boolean;
  cta: string;
  ctaHref: string;
  features: string[];
}

const TIERS: Tier[] = [
  {
    name: "Team",
    tagline: "For teams starting with governed AI.",
    price: "Contact us",
    annualPrice: "Contact us",
    highlighted: false,
    cta: "Start free trial",
    ctaHref: "/contact",
    features: [
      "Up to 25 users",
      "5 MCP server connections",
      "3 workflow templates",
      "Hybrid RAG (self-hosted)",
      "Append-only audit log",
      "Community support",
    ],
  },
  {
    name: "Business",
    tagline: "For enterprises scaling AI operations.",
    price: "Custom",
    annualPrice: "Custom",
    highlighted: true,
    cta: "Book a demo",
    ctaHref: "/contact",
    features: [
      "Up to 250 users",
      "Unlimited MCP connections",
      "Full workflow builder",
      "Hybrid RAG + pgvector",
      "SOC 2 alignment tooling",
      "Priority support",
      "Dedicated onboarding",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For regulated, mission-critical deployments.",
    price: "Custom",
    annualPrice: "Custom",
    highlighted: false,
    cta: "Contact sales",
    ctaHref: "/contact",
    features: [
      "Unlimited users",
      "Self-hosted option",
      "EU AI Act compliance tooling",
      "Air-gap compatible",
      "Dedicated success engineer",
      "SLA guarantee",
      "Custom contract & DPA",
      "Custom model routing",
    ],
  },
];

const FAQ = [
  {
    q: "Do you charge per token?",
    a: "No. NXπ charges a platform subscription only. You pay your LLM provider directly — Anthropic, OpenAI, Google, or nobody if you run Ollama locally. Our pricing is completely decoupled from your inference costs.",
  },
  {
    q: "Can I self-host on all tiers?",
    a: "Yes. Self-hosted deployment is available on every tier, including Team. You can run NXπ entirely within your infrastructure — on-premises, private cloud, or air-gapped. No data needs to leave your perimeter.",
  },
  {
    q: "What is included in the platform fee?",
    a: "The platform fee covers the orchestration engine, hybrid RAG, workflow builder, governance and RBAC, audit logging, MCP connectivity, all compliance tooling, and all future releases during your subscription term.",
  },
  {
    q: "How is this different from per-seat AI tools?",
    a: "Per-seat AI tools scale their cost with your headcount and often with your usage. NXπ's platform subscription is predictable. As you automate more, your cost-per-decision goes down — not up.",
  },
];

export function PricingTiers() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span
          className={cn(
            "text-sm transition-colors",
            !annual ? "text-text-primary font-medium" : "text-text-muted"
          )}
        >
          Monthly
        </span>
        <button
          role="switch"
          aria-checked={annual}
          onClick={() => setAnnual(!annual)}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-1",
            annual ? "bg-aurora-1" : "bg-border-soft"
          )}
          aria-label="Toggle annual billing"
        >
          <span
            className={cn(
              "inline-block h-4 w-4 rounded-full bg-white shadow transition-transform duration-200",
              annual ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        <span
          className={cn(
            "text-sm transition-colors",
            annual ? "text-text-primary font-medium" : "text-text-muted"
          )}
        >
          Annual
          {annual && (
            <span className="ml-1.5 inline-flex items-center rounded-full bg-green/15 border border-green/30 px-1.5 py-0.5 text-xs text-green">
              Save 20%
            </span>
          )}
        </span>
      </div>

      {/* Tiers */}
      <h2 className="sr-only">Pricing tiers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative rounded-2xl border p-8 flex flex-col",
              tier.highlighted
                ? "border-aurora-1/50 bg-aurora-1/5"
                : "border-border-soft bg-bg-elev-1"
            )}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-aurora-1 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-bold text-text-primary">{tier.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{tier.tagline}</p>
            </div>

            <div className="mb-8">
              <p className="text-3xl font-bold text-text-primary">
                {annual ? tier.annualPrice : tier.price}
              </p>
              <p className="text-xs text-text-muted mt-1">
                {annual ? "Billed annually · 20% off monthly rate" : "Billed monthly · switch to annual to save 20%"}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg
                    className={cn(
                      "w-4 h-4 mt-0.5 flex-shrink-0",
                      tier.highlighted ? "text-aurora-1" : "text-green"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={tier.highlighted ? "primary" : "secondary"}
              asChild
              className="w-full"
            >
              <Link href={tier.ctaHref}>{tier.cta}</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
          Common questions
        </h2>
        <div className="space-y-6">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-border-soft bg-bg-elev-1 p-6"
            >
              <h3 className="font-semibold text-text-primary mb-2">{item.q}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
