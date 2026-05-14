import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IntegrationsGrid } from "@/components/site/IntegrationsGrid";
import type { Integration } from "@/components/site/IntegrationsGrid";
import rawIntegrations from "@/content/integrations.json";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "60+ integrations across ERP, CRM, databases, cloud, and LLM providers. Every system connected through MCP.",
};

const integrations = rawIntegrations as Integration[];

const MCP_CODE = `// Any MCP-compatible server connects instantly
{
  "mcpServers": {
    "your-system": {
      "command": "your-mcp-server",
      "args": ["--connection-string", "..."]
    }
  }
}`;

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aurora-2/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora-2/30 bg-aurora-2/10 px-3 py-1 text-xs text-aurora-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-2" />
              Integrations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.08]">
              Every system.{" "}
              <span className="bg-gradient-to-r from-aurora-2 to-aurora-1 bg-clip-text text-transparent">
                One protocol.
              </span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              NXπ connects to your existing stack through MCP — the open standard for
              agent-to-tool connectivity. ERP, CRM, databases, cloud, LLMs. Any system
              that speaks MCP connects in minutes.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-bold text-text-primary">{integrations.length}+</p>
                <p className="text-sm text-text-muted">Pre-built integrations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary">
                  {integrations.filter((i) => i.mcpServer).length}
                </p>
                <p className="text-sm text-text-muted">Native MCP servers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-primary">∞</p>
                <p className="text-sm text-text-muted">Custom MCP servers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 pb-24">
        <IntegrationsGrid integrations={integrations} />
      </section>

      {/* Custom MCP Callout */}
      <section className="border-t border-border-soft bg-bg-elev-1">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Connect any MCP server
              </h2>
              <p className="text-text-secondary">
                If your system exposes an MCP-compatible interface, NXπ connects to it
                immediately — no custom integration required. Point the config at your
                server and your agents gain access.
              </p>
            </div>

            <div className="rounded-xl border border-border-soft bg-bg-base overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-soft bg-bg-elev-2">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-amber/60" />
                <span className="h-3 w-3 rounded-full bg-green/60" />
                <span className="ml-2 text-xs text-text-muted font-mono">
                  nxpi.config.json
                </span>
              </div>
              <pre className="p-6 text-sm font-mono text-text-secondary leading-relaxed overflow-x-auto">
                <code>{MCP_CODE}</code>
              </pre>
            </div>

            <p className="mt-4 text-sm text-text-muted">
              Access is scoped per-agent through RBAC policy. Agents can only invoke the
              tools they are explicitly permitted to use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Need a specific integration?
            </h2>
            <p className="mt-2 text-text-secondary">
              If your system isn't listed, we can build a custom MCP server or help your
              team wire one up.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button variant="secondary" asChild>
              <Link href="/architecture">See architecture</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Request an integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
