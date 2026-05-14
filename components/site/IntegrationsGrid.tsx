"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  mcpServer: boolean;
}

const CATEGORIES = ["All", "ERP", "CRM", "DB", "Cloud", "LLM", "Tools"];

export function IntegrationsGrid({ integrations }: { integrations: Integration[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = integrations.filter((i) => {
    const matchSearch =
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || i.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            size={16}
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search integrations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-border-soft bg-bg-elev-1 pl-9 pr-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-aurora-1/50"
            aria-label="Search integrations"
          />
        </div>
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                category === cat
                  ? "bg-aurora-1 text-white"
                  : "bg-bg-elev-1 border border-border-soft text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="text-text-muted text-sm text-center py-12">
          No integrations match your search.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((integration) => (
          <div
            key={integration.id}
            className="rounded-lg border border-border-soft bg-bg-elev-1 p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-text-primary text-sm">{integration.name}</p>
              <span className="text-xs text-text-muted border border-border-soft rounded-full px-2 py-0.5">
                {integration.category}
              </span>
            </div>
            <p className="text-xs text-text-tertiary leading-relaxed">{integration.description}</p>
            {integration.mcpServer && (
              <span className="inline-flex items-center gap-1 text-xs text-aurora-1">
                <span className="h-1.5 w-1.5 rounded-full bg-aurora-1" aria-hidden="true" />
                MCP Server
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
