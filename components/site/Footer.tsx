import Link from "next/link";
import { Mark } from "./Mark";
import { TokenMeter } from "./TokenMeter";

const links = {
  Platform: [
    { href: "/platform/mcp-fabric", label: "MCP Fabric" },
    { href: "/platform/orchestration", label: "Orchestration" },
    { href: "/platform/rag", label: "Hybrid RAG" },
    { href: "/platform/workflows", label: "Workflows" },
    { href: "/platform/data-layer", label: "Data Layer" },
    { href: "/platform/governance", label: "Governance" },
  ],
  Solutions: [
    { href: "/solutions/sap", label: "NXπ for SAP" },
    { href: "/solutions/salesforce", label: "NXπ for Salesforce" },
    { href: "/solutions/fusion", label: "SAP + Salesforce Fusion" },
    { href: "/solutions/role/cfo", label: "For the CFO" },
    { href: "/solutions/role/ciso", label: "For the CISO" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/customers", label: "Customers" },
    { href: "/blog", label: "Blog" },
    { href: "/changelog", label: "Changelog" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/dpa", label: "DPA" },
    { href: "/legal/ai-act-readiness", label: "EU AI Act Readiness" },
    { href: "/security", label: "Security" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-elev-1">
      <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Mark size={28} />
            <p className="mt-4 text-sm text-text-tertiary leading-relaxed">Built for the regulated enterprise.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
              </span>
              <Link href="/contact" className="text-xs text-text-muted hover:text-text-tertiary">All systems governed</Link>
            </div>
          </div>
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-4">{cat}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link href={item.href} className="text-sm text-text-tertiary hover:text-text-secondary transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs text-text-muted">© {new Date().getFullYear()} Negentrophi, Inc. All rights reserved.</p>
            <TokenMeter />
          </div>
          <a href="mailto:security@nxpi.ai" className="text-xs text-text-muted hover:text-text-tertiary transition-colors">security@nxpi.ai</a>
        </div>
      </div>
    </footer>
  );
}
