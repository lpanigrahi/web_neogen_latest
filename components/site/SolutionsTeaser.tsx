"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["By Role", "By System", "By Industry"] as const;
type Tab = (typeof tabs)[number];

const roleItems = [
  {
    role: "CFO",
    headline: "Close the AI ROI gap before the board asks.",
    body: "NXπ connects GL, ERP, and FP&A agents to real-time financial data — SAP S/4HANA, Salesforce Revenue Cloud, and SQL warehouses. Every agent action is logged with a cost code. Your AI investment closes the books on itself.",
    tags: ["Finance AI", "Audit trail", "SAP S/4HANA"],
  },
  {
    role: "CTO / CIO",
    headline: "One control plane. Every model. Zero lock-in.",
    body: "Deploy Anthropic, OpenAI, Azure, Google, Cohere, or self-hosted Ollama behind a single MCP gateway. Swap models without rewiring agents. Host on-premise, in your VPC, or hybrid. Architecture docs ship on day one.",
    tags: ["Model-agnostic", "Self-hostable", "MCP-native"],
  },
  {
    role: "CISO",
    headline: "Data sovereignty is not a feature request. It is the baseline.",
    body: "NXπ never replicates enterprise data without consent. Every agent call passes through a zero-trust policy engine. EU AI Act, SOC 2, GDPR, HIPAA, and SOX compliance are built into the runtime, not bolted on.",
    tags: ["Zero-trust", "EU AI Act", "Data sovereignty"],
  },
  {
    role: "COO",
    headline: "Automate the workflows your ERP cannot reach.",
    body: "Visual workflow builder connects SAP, Salesforce, and 200+ MCP servers. Loop agents handle exceptions. Human-in-the-loop approvals integrate with your existing ticketing system. No code required for the first automation.",
    tags: ["Workflow automation", "Human-in-the-loop", "SAP + Salesforce"],
  },
];

const systemItems = [
  {
    role: "SAP",
    headline: "The first AI platform purpose-built for SAP.",
    body: "Native connectors for SAP HANA Cloud, S/4HANA, BTP, and ECC. MCP tools expose FI, CO, MM, SD, and HR modules as governed agent capabilities. Query in natural language. Actions require approval chains.",
    tags: ["SAP HANA Cloud", "S/4HANA", "BTP"],
  },
  {
    role: "Salesforce",
    headline: "Agentforce extends further when the data layer is complete.",
    body: "NXπ connects Salesforce CRM, Revenue Cloud, and Marketing Cloud to SAP, databases, and knowledge bases via MCP. Your Agentforce agents gain cross-system context they cannot access today.",
    tags: ["Agentforce", "Revenue Cloud", "MCP bridge"],
  },
  {
    role: "Data Warehouse",
    headline: "Query Snowflake, BigQuery, and Redshift in natural language.",
    body: "Hybrid RAG indexes structured and unstructured data. RRF fusion delivers 91%+ retrieval recall. Agent queries are scoped by role, not by table grants. Every query is logged.",
    tags: ["Snowflake", "Hybrid RAG", "91%+ recall"],
  },
  {
    role: "Databases",
    headline: "PostgreSQL, MongoDB, Neo4j — all under one agent gateway.",
    body: "Unified data layer abstracts SQL, document, and graph stores. pgvector enables semantic search alongside relational joins. Neo4j powers entity relationship traversal for complex compliance queries.",
    tags: ["pgvector", "MongoDB", "Neo4j"],
  },
];

const industryItems = [
  {
    role: "Financial Services",
    headline: "AI that survives a regulator audit.",
    body: "NXπ ships with SOX, GDPR, and EU AI Act controls built into the agent runtime. Complete audit trail for every model call, every data access, every approval. Suitable for tier-1 banks and insurance carriers.",
    tags: ["SOX", "GDPR", "EU AI Act"],
  },
  {
    role: "Manufacturing",
    headline: "Connect SAP PP, MM, and QM to AI agents that act.",
    body: "Procurement agents negotiate within approved parameters. Quality agents flag deviations against spec sheets stored in the knowledge base. Every action logged to the ERP with a change document.",
    tags: ["SAP PP/MM/QM", "Procurement AI", "Quality control"],
  },
  {
    role: "Healthcare",
    headline: "HIPAA-grade AI across clinical and operational data.",
    body: "Patient data never leaves your VPC. Agents operate on de-identified or role-gated data only. Clinical workflow automation with mandatory human-in-the-loop gates at every care decision.",
    tags: ["HIPAA", "Clinical workflows", "De-identification"],
  },
  {
    role: "Retail & CPG",
    headline: "Demand sensing to shelf replenishment — one agent loop.",
    body: "Connect Salesforce Commerce, SAP S/4, and 3PL systems. Demand-sensing agents reorder against real inventory. Promotional agents pull margin data from SAP CO before approval.",
    tags: ["Demand sensing", "Salesforce Commerce", "3PL integration"],
  },
];

const tabData: Record<Tab, typeof roleItems> = {
  "By Role": roleItems,
  "By System": systemItems,
  "By Industry": industryItems,
};

export function SolutionsTeaser() {
  const [activeTab, setActiveTab] = useState<Tab>("By Role");
  const [activeItem, setActiveItem] = useState(0);

  const items = tabData[activeTab];
  const resolved = items[activeItem] ?? items[0];

  if (!resolved) return null;
  const current = resolved;

  return (
    <div className="flex flex-col gap-6">
      {/* Tab bar */}
      <div role="tablist" aria-label="Solutions categories" className="flex gap-1 rounded-lg bg-bg-elev-1 border border-border-soft p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            id={`tab-${tab.replace(/\s+/g, "-").toLowerCase()}`}
            aria-controls="solutions-tabpanel"
            onClick={() => { setActiveTab(tab); setActiveItem(0); }}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              activeTab === tab
                ? "bg-aurora-1/15 text-aurora-1 border border-aurora-1/25"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4">
        {/* Left nav */}
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
          {items.map((item, i) => (
            <button
              key={item.role}
              onClick={() => setActiveItem(i)}
              aria-pressed={activeItem === i}
              className={cn(
                "text-left rounded-lg border px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap lg:whitespace-normal",
                activeItem === i
                  ? "border-aurora-1/40 bg-aurora-1/10 text-aurora-1"
                  : "border-border-soft bg-bg-elev-1 text-text-secondary hover:text-text-primary hover:border-border"
              )}
            >
              {item.role}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeItem}`}
            id="solutions-tabpanel"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.replace(/\s+/g, "-").toLowerCase()}`}
            aria-live="polite"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-border-soft bg-bg-elev-1 p-6 flex flex-col gap-4"
          >
            <h3 className="text-xl font-semibold text-text-primary">{current.headline}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{current.body}</p>
            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border border-aurora-1/20 bg-aurora-1/8 text-aurora-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
