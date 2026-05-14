export interface Industry {
  slug: string;
  title: string;
  lead: string;
  body: string;
  regulatoryFocus: string;
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    lead: "AI that survives an audit — and a board meeting.",
    body: "Financial institutions face simultaneous pressure from regulators, auditors, and boards. NXπ delivers AI with the governance controls required for Basel III, MiFID II, and the EU AI Act — with every decision logged, every source cited, and every model action auditable.",
    regulatoryFocus: "Basel III · MiFID II · EU AI Act · SOX",
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    lead: "HIPAA-ready AI that never leaves your perimeter.",
    body: "Clinical data, patient records, and research assets require the strictest data residency controls. NXπ's self-hosted deployment means AI inference runs inside your environment — nothing leaves your perimeter without explicit consent.",
    regulatoryFocus: "HIPAA · HITECH · FDA 21 CFR Part 11",
  },
  {
    slug: "public-sector",
    title: "Public Sector & Defense",
    lead: "AI sovereignty without the IT compromise.",
    body: "Government agencies require air-gapped, sovereign AI deployments. NXπ runs entirely on your infrastructure with local Ollama models — no data transits to commercial cloud APIs without explicit authorization.",
    regulatoryFocus: "FedRAMP · ITAR · NIST SP 800-171",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Supply Chain",
    lead: "SAP at the core. AI across the chain.",
    body: "Manufacturing organizations run their operations on SAP. NXπ extends SAP's intelligence across the supply chain — from procurement to delivery — with real-time risk detection, demand forecasting, and quality analysis.",
    regulatoryFocus: "ISO 9001 · REACH · EU AI Act",
  },
  {
    slug: "technology",
    title: "Technology & Software",
    lead: "The AI control plane for the AI-native enterprise.",
    body: "Technology companies building their own AI products need an operations layer that scales with them. NXπ provides the governed substrate — MCP, RAG, agents, workflows — so engineering teams build on a proven foundation.",
    regulatoryFocus: "SOC 2 · GDPR · EU AI Act",
  },
];
