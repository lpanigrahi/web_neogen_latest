"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { roles } from "@/content/solutions/roles";
import { industries } from "@/content/solutions/industries";

type Tab = "role" | "system" | "industry";

const systems = [
  {
    slug: "sap",
    title: "SAP",
    lead: "Where SAP HANA Cloud meets the open Model Context Protocol. Where Joule extends to every model.",
    href: "/solutions/sap",
  },
  {
    slug: "salesforce",
    title: "Salesforce",
    lead: "Agentforce is the agent. NXπ is the control plane around it.",
    href: "/solutions/salesforce",
  },
  {
    slug: "fusion",
    title: "SAP + Salesforce Fusion",
    lead: "The ROI lives in the join. Revenue you cannot recognize until the order ships.",
    href: "/solutions/fusion",
  },
];

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-5 py-2 rounded-full text-sm font-medium transition-all",
        active
          ? "bg-gradient-to-r from-aurora-1 to-aurora-3 text-white shadow"
          : "text-text-secondary hover:text-text-primary hover:bg-bg-elev-1"
      )}
    >
      {children}
    </button>
  );
}

function RoleCard({ slug, title, headline, subhead }: { slug: string; title: string; headline: string; subhead: string }) {
  return (
    <Link
      href={`/solutions/role/${slug}`}
      className="group block rounded-xl border border-border-soft bg-surface p-6 hover:border-aurora-1/40 hover:bg-bg-elev-1 transition-all"
    >
      <div className="text-xs font-medium text-text-muted uppercase tracking-[0.12em] mb-3">{title}</div>
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-aurora-1 transition-colors">{headline}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{subhead}</p>
      <div className="mt-4 text-xs text-aurora-1 font-medium group-hover:translate-x-1 transition-transform inline-block">
        Explore →
      </div>
    </Link>
  );
}

function SystemCard({ slug, title, lead, href }: { slug: string; title: string; lead: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border-soft bg-surface p-6 hover:border-aurora-2/40 hover:bg-bg-elev-1 transition-all"
    >
      <div className="text-xs font-medium text-text-muted uppercase tracking-[0.12em] mb-3">Integration</div>
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-aurora-2 transition-colors">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{lead}</p>
      <div className="mt-4 text-xs text-aurora-2 font-medium group-hover:translate-x-1 transition-transform inline-block">
        Explore →
      </div>
    </Link>
  );
}

function IndustryCard({ slug, title, lead }: { slug: string; title: string; lead: string }) {
  return (
    <Link
      href={`/solutions/industry/${slug}`}
      className="group block rounded-xl border border-border-soft bg-surface p-6 hover:border-aurora-3/40 hover:bg-bg-elev-1 transition-all"
    >
      <div className="text-xs font-medium text-text-muted uppercase tracking-[0.12em] mb-3">Industry</div>
      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-aurora-3 transition-colors">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{lead}</p>
      <div className="mt-4 text-xs text-aurora-3 font-medium group-hover:translate-x-1 transition-transform inline-block">
        Explore →
      </div>
    </Link>
  );
}

export function SolutionsHub() {
  const [activeTab, setActiveTab] = useState<Tab>("role");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex items-center gap-2 mb-10 border border-border-soft rounded-full p-1 bg-bg-elev-1 w-fit">
        <TabButton active={activeTab === "role"} onClick={() => setActiveTab("role")}>By Role</TabButton>
        <TabButton active={activeTab === "system"} onClick={() => setActiveTab("system")}>By System</TabButton>
        <TabButton active={activeTab === "industry"} onClick={() => setActiveTab("industry")}>By Industry</TabButton>
      </div>

      {/* By Role */}
      {activeTab === "role" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* CFO first */}
          {[...roles].sort((a, b) => (a.slug === "cfo" ? -1 : b.slug === "cfo" ? 1 : 0)).map((role) => (
            <RoleCard key={role.slug} slug={role.slug} title={role.title} headline={role.headline} subhead={role.subhead} />
          ))}
        </div>
      )}

      {/* By System */}
      {activeTab === "system" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((system) => (
            <SystemCard key={system.slug} {...system} />
          ))}
        </div>
      )}

      {/* By Industry */}
      {activeTab === "industry" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} slug={industry.slug} title={industry.title} lead={industry.lead} />
          ))}
        </div>
      )}
    </div>
  );
}
