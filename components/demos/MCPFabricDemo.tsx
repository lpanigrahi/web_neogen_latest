"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  capabilities: string[];
  category: "erp" | "crm" | "db" | "cloud" | "llm";
}

const NODES: Node[] = [
  { id: "sap-hana", label: "SAP HANA", x: 15, y: 20, capabilities: ["read_table", "run_sql", "vector_search"], category: "erp" },
  { id: "s4hana", label: "S/4HANA", x: 15, y: 70, capabilities: ["financial_data", "procurement", "joule_extend"], category: "erp" },
  { id: "salesforce", label: "Salesforce", x: 82, y: 20, capabilities: ["opportunity", "account", "case_mgmt"], category: "crm" },
  { id: "mulesoft", label: "MuleSoft", x: 82, y: 70, capabilities: ["api_gateway", "transform", "event_stream"], category: "crm" },
  { id: "postgresql", label: "PostgreSQL", x: 15, y: 45, capabilities: ["sql_query", "pgvector", "audit_log"], category: "db" },
  { id: "mongodb", label: "MongoDB", x: 82, y: 45, capabilities: ["aggregate", "find", "text_search"], category: "db" },
  { id: "snowflake", label: "Snowflake", x: 48, y: 5, capabilities: ["warehouse_query", "share", "ml_functions"], category: "cloud" },
  { id: "s3", label: "S3", x: 48, y: 92, capabilities: ["list_objects", "get_object", "put_object"], category: "cloud" },
  { id: "anthropic", label: "Anthropic", x: 28, y: 88, capabilities: ["claude_3_5", "prompt_cache", "tool_use"], category: "llm" },
  { id: "ollama", label: "Ollama", x: 70, y: 88, capabilities: ["local_inference", "no_egress", "custom_model"], category: "llm" },
];

const CENTER = { x: 48, y: 48 };

const CATEGORY_COLORS: Record<string, string> = {
  erp: "#a78bfa",   // aurora-1 approx
  crm: "#67e8f9",   // aurora-3 approx
  db: "#818cf8",    // aurora-2 approx
  cloud: "#fbbf24", // amber approx
  llm: "#34d399",   // green approx
};

const CATEGORY_TEXT: Record<string, string> = {
  erp: "text-aurora-1",
  crm: "text-aurora-3",
  db: "text-aurora-2",
  cloud: "text-amber",
  llm: "text-green",
};

const CATEGORY_BADGE: Record<string, string> = {
  erp: "bg-aurora-1/10 border-aurora-1/30 text-aurora-1",
  crm: "bg-aurora-3/10 border-aurora-3/30 text-aurora-3",
  db: "bg-aurora-2/10 border-aurora-2/30 text-aurora-2",
  cloud: "bg-amber/10 border-amber/30 text-amber",
  llm: "bg-green/10 border-green/30 text-green",
};

const LEGEND = [
  { key: "erp", label: "ERP" },
  { key: "crm", label: "CRM" },
  { key: "db", label: "Database" },
  { key: "cloud", label: "Cloud" },
  { key: "llm", label: "LLM" },
] as const;

function getLineLength(node: Node) {
  const dx = CENTER.x - node.x;
  const dy = CENTER.y - node.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function MCPFabricDemo() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const hoveredNode = NODES.find((n) => n.id === hoveredId) ?? null;

  return (
    <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-4 select-none">
      <style>{`
        @keyframes pulse-traffic {
          0%   { stroke-dashoffset: 20; opacity: 0.25; }
          50%  { opacity: 0.75; }
          100% { stroke-dashoffset: 0;  opacity: 0.25; }
        }
        @keyframes travel-dot {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .mcp-line {
          animation: pulse-traffic 3s linear infinite;
          stroke-dasharray: 2 1.5;
        }
        .mcp-line-active {
          opacity: 0.9 !important;
        }
      `}</style>

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-text-secondary tracking-widest uppercase">
          MCP Fabric — Live Connections
        </p>
        <span className="text-[10px] text-green font-mono bg-green/10 border border-green/30 px-2 py-0.5 rounded-full">
          ● 10 nodes active
        </span>
      </div>

      {/* SVG canvas */}
      <div className="relative rounded-lg bg-bg-elev-2 border border-border-soft overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="w-full"
          style={{ height: "340px" }}
          onMouseLeave={() => { setHoveredId(null); setTooltipPos(null); }}
        >
          <defs>
            {/* Center hub gradient */}
            <radialGradient id="hub-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.4" />
            </radialGradient>
            <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Subtle grid */}
          {[20, 40, 60, 80].map((v) => (
            <g key={v}>
              <line x1={v} y1={0} x2={v} y2={100} stroke="white" strokeOpacity={0.03} strokeWidth={0.3} />
              <line x1={0} y1={v} x2={100} y2={v} stroke="white" strokeOpacity={0.03} strokeWidth={0.3} />
            </g>
          ))}

          {/* Hub glow ring */}
          <circle cx={CENTER.x} cy={CENTER.y} r={8} fill="url(#hub-glow)" />

          {/* Connection lines with animated dash */}
          {NODES.map((node, i) => {
            const isHovered = hoveredId === node.id;
            const lineLen = getLineLength(node);
            const color = CATEGORY_COLORS[node.category];
            const delay = `${(i * 0.3).toFixed(1)}s`;

            return (
              <line
                key={node.id}
                x1={node.x}
                y1={node.y}
                x2={CENTER.x}
                y2={CENTER.y}
                stroke={color}
                strokeWidth={isHovered ? 0.5 : 0.3}
                strokeOpacity={isHovered ? 0.9 : 0.4}
                strokeDasharray={isHovered ? "none" : "2 1.5"}
                className={isHovered ? undefined : "mcp-line"}
                style={
                  isHovered
                    ? undefined
                    : { animationDelay: delay, animationDuration: `${2.5 + (i % 3) * 0.5}s` }
                }
                filter={isHovered ? "url(#glow)" : undefined}
              />
            );
          })}

          {/* Traveling dots along each line */}
          {NODES.map((node, i) => {
            const color = CATEGORY_COLORS[node.category];
            const dur = `${2.5 + (i % 3) * 0.5}s`;
            const delay = `${(i * 0.3).toFixed(1)}s`;
            return (
              <circle
                key={`dot-${node.id}`}
                r={0.7}
                fill={color}
                opacity={0.85}
              >
                <animateMotion
                  dur={dur}
                  repeatCount="indefinite"
                  begin={delay}
                  keyTimes="0;1"
                  keyPoints="0;1"
                  calcMode="linear"
                  path={`M ${node.x} ${node.y} L ${CENTER.x} ${CENTER.y}`}
                />
              </circle>
            );
          })}

          {/* Center hub */}
          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r={5}
            fill="url(#hub-gradient)"
            stroke="#818cf8"
            strokeWidth={0.4}
            strokeOpacity={0.8}
            filter="url(#glow)"
          />
          <text
            x={CENTER.x}
            y={CENTER.y + 0.9}
            textAnchor="middle"
            fontSize={2.8}
            fontWeight="700"
            fill="white"
            fontFamily="sans-serif"
          >
            NXπ
          </text>

          {/* Node circles */}
          {NODES.map((node) => {
            const isHovered = hoveredId === node.id;
            const color = CATEGORY_COLORS[node.category];
            // label offset: push down if node is near top, up if near bottom
            const labelDy = node.y < 20 ? 5.5 : node.y > 80 ? -4.5 : 5;

            return (
              <g
                key={node.id}
                onMouseEnter={(e) => {
                  setHoveredId(node.id);
                  const rect = e.currentTarget.ownerSVGElement!.getBoundingClientRect();
                  const svgW = rect.width;
                  const svgH = rect.height;
                  setTooltipPos({
                    x: (node.x / 100) * svgW,
                    y: (node.y / 100) * svgH,
                  });
                }}
                style={{ cursor: "pointer" }}
              >
                {/* Glow behind hovered node */}
                {isHovered && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={6}
                    fill={color}
                    fillOpacity={0.15}
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 4 : 3.5}
                  fill={color}
                  fillOpacity={isHovered ? 1 : 0.85}
                  stroke="white"
                  strokeWidth={isHovered ? 0.5 : 0.2}
                  strokeOpacity={0.6}
                  filter={isHovered ? "url(#glow)" : undefined}
                />
                <text
                  x={node.x}
                  y={node.y + labelDy}
                  textAnchor="middle"
                  fontSize={2.4}
                  fill="white"
                  fillOpacity={isHovered ? 1 : 0.6}
                  fontFamily="sans-serif"
                  fontWeight={isHovered ? "600" : "400"}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip overlay */}
        {hoveredNode && tooltipPos && (
          <div
            className="pointer-events-none absolute z-10 max-w-[160px] rounded-lg border border-border-soft bg-bg-base/95 backdrop-blur-sm p-2.5 shadow-xl"
            style={{
              left: Math.min(tooltipPos.x + 12, 9999),
              top: Math.max(tooltipPos.y - 10, 4),
              transform: tooltipPos.x > 260 ? "translateX(-110%)" : undefined,
            }}
          >
            <p className={cn("text-[11px] font-semibold mb-1.5", CATEGORY_TEXT[hoveredNode.category])}>
              {hoveredNode.label}
            </p>
            <p className="text-[9px] text-text-muted uppercase tracking-widest mb-1.5 font-mono">
              MCP capabilities
            </p>
            <div className="flex flex-col gap-1">
              {hoveredNode.capabilities.map((cap) => (
                <span
                  key={cap}
                  className={cn(
                    "text-[10px] font-mono px-1.5 py-0.5 rounded border",
                    CATEGORY_BADGE[hoveredNode.category]
                  )}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-2">
        {LEGEND.map(({ key, label }) => (
          <span
            key={key}
            className={cn(
              "text-[10px] font-semibold px-2.5 py-1 rounded-full border",
              CATEGORY_BADGE[key]
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
