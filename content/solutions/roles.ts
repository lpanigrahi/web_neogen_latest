export interface Role {
  slug: string;
  title: string;
  headline: string;
  subhead: string;
  outcomes: string[];
  cta: { label: string; href: string };
}

export const roles: Role[] = [
  {
    slug: "cfo",
    title: "CFO",
    headline: "Transparent Token Economics.",
    subhead: "Every prompt costed. Every agent budgeted. Every ROI dollar measurable.",
    outcomes: ["1.7x average ROI in 12–18 months", "<15% token overhead vs direct API", "Chargeback dashboard per team and workflow"],
    cta: { label: "Download the AI ROI framework", href: "/contact" },
  },
  {
    slug: "cto-cio",
    title: "CTO / CIO",
    headline: "End the Tool Sprawl.",
    subhead: "One platform. Ten LLM providers. Forty models. 114+ API endpoints.",
    outcomes: ["$200K–$500K license savings", "99.9% uptime with provider failover", "80% self-service agent creation"],
    cta: { label: "See the architecture", href: "/architecture" },
  },
  {
    slug: "ceo",
    title: "CEO",
    headline: "Strategic AI Consolidation.",
    subhead: "Replace three to five point AI tools with one governed control plane.",
    outcomes: ["3–15% revenue impact", "Time-to-value under 30 minutes", "Executive briefing automation across 5+ data sources daily"],
    cta: { label: "Book an executive briefing", href: "/contact" },
  },
  {
    slug: "ciso",
    title: "CISO",
    headline: "Zero-Trust by Default.",
    subhead: "EU AI Act-ready. SOC 2-aligned. 100% action auditability.",
    outcomes: ["100% high-risk EU AI Act requirements met by Aug 2 2026", "Per-user MCP scoping", "Cross-system audit correlation"],
    cta: { label: "Read the security overview", href: "/security" },
  },
  {
    slug: "cdo",
    title: "CDO",
    headline: "One Data Fabric, Every Source.",
    subhead: "Real-time SAP. Real-time Salesforce. Hybrid RAG. Sub-200ms search.",
    outcomes: ["80% reduction in BI backlog", "91%+ retrieval recall", "Cross-source joins without replication"],
    cta: { label: "See the data layer", href: "/platform/data-layer" },
  },
  {
    slug: "coo",
    title: "COO",
    headline: "Process Automation at Enterprise Scale.",
    subhead: "Visual workflows, cron schedules, webhook triggers, DAG execution.",
    outcomes: ["30–50% manual process time reduction", "60–70% first-response automation", "90% data quality auto-resolution"],
    cta: { label: "See the workflow builder", href: "/platform/workflows" },
  },
  {
    slug: "cro-cmo",
    title: "CRO / CMO",
    headline: "Customer Intelligence as a Runtime.",
    subhead: "SAP order history + Salesforce CRM + market signals + your knowledge base — fused.",
    outcomes: ["30–50% retention lift", "25% win-rate lift", "15–20% forecast accuracy lift"],
    cta: { label: "See the Salesforce integration", href: "/solutions/salesforce" },
  },
];
