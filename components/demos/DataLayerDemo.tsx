"use client";
import { useState } from "react";
import { Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    id: "relational",
    label: "Relational",
    system: "PostgreSQL",
    color: "aurora-1",
    query: `SELECT o.VBELN, o.NETWR, c.NAME1
FROM VBAK o
JOIN KNA1 c ON o.KUNNR = c.KUNNR
WHERE o.ERDAT >= '2026-01-01'
  AND o.NETWR > 100000
ORDER BY o.NETWR DESC
LIMIT 50;`,
    language: "sql",
  },
  {
    id: "document",
    label: "Document",
    system: "MongoDB",
    color: "aurora-3",
    query: `db.opportunities.aggregate([
  { $match: {
    closeDate: { $gte: ISODate("2026-07-01") },
    stage: { $in: ["Commit", "Best Case"] }
  }},
  { $group: {
    _id: "$accountId",
    totalValue: { $sum: "$amount" },
    dealCount: { $count: {} }
  }},
  { $sort: { totalValue: -1 } }
])`,
    language: "javascript",
  },
  {
    id: "key-value",
    label: "Key-Value",
    system: "Redis",
    color: "aurora-2",
    query: `# Get cached financial summary
GET nxpi:finance:q3:summary

# Set with 1-hour TTL
SET nxpi:agent:session:a7f2 \\
  '{"userId":"cfo@corp","tokens":2847}' \\
  EX 3600

# Pub/Sub for real-time audit
SUBSCRIBE nxpi:audit:financial`,
    language: "bash",
  },
  {
    id: "graph",
    label: "Graph",
    system: "Neo4j",
    color: "aurora-3",
    query: `MATCH (customer:Customer)-[:PLACED]->(order:Order)
      -[:CONTAINS]->(product:Product)
WHERE order.date >= date('2026-01-01')
  AND order.value > 50000
WITH customer,
     sum(order.value) AS totalSpend,
     count(order) AS orderCount
RETURN customer.name, totalSpend, orderCount
ORDER BY totalSpend DESC`,
    language: "cypher",
  },
  {
    id: "vector",
    label: "Vector",
    system: "pgvector",
    color: "aurora-1",
    query: `SELECT content, metadata,
  1 - (embedding <=> $1::vector) AS score
FROM documents
WHERE metadata->>'scope' IN ('finance','billing')
  AND 1 - (embedding <=> $1::vector) > 0.75
ORDER BY embedding <=> $1::vector
LIMIT 10;

-- $1 = embed("Q3 revenue reconciliation gap")`,
    language: "sql",
  },
  {
    id: "files",
    label: "Files",
    system: "S3 / Blob",
    color: "amber",
    query: `# List Q3 financial documents
aws s3 ls s3://corp-finance/q3-2026/ \\
  --recursive --human-readable

# Stream a large Excel file
aws s3 cp s3://corp-finance/q3-close.xlsx - \\
  | python3 parse_financials.py

# Signed URL for agent access (15min TTL)
aws s3 presign s3://corp/audit-log.pdf \\
  --expires-in 900`,
    language: "bash",
  },
  {
    id: "streams",
    label: "Streams",
    system: "Kafka",
    color: "green",
    query: `// Consume SAP IDoc events in real-time
consumer.subscribe(['sap.idoc.orders']);

consumer.on('message', async (msg) => {
  const order = parseIDoc(msg.value);
  if (order.netValue > THRESHOLD) {
    await agent.run('flag_large_order', {
      orderId: order.id,
      value: order.netValue
    });
  }
});`,
    language: "javascript",
  },
] as const;

type ColorKey = (typeof CATEGORIES)[number]["color"];

const COLOR_TEXT_MAP: Record<ColorKey, string> = {
  "aurora-1": "text-aurora-1",
  "aurora-2": "text-aurora-2",
  "aurora-3": "text-aurora-3",
  amber: "text-amber",
  green: "text-green",
};

const COLOR_BG_MAP: Record<ColorKey, string> = {
  "aurora-1": "bg-aurora-1/10 border-aurora-1/30",
  "aurora-2": "bg-aurora-2/10 border-aurora-2/30",
  "aurora-3": "bg-aurora-3/10 border-aurora-3/30",
  amber: "bg-amber/10 border-amber/30",
  green: "bg-green/10 border-green/30",
};

// SQL / Cypher keywords
const SQL_KEYWORDS =
  /\b(SELECT|FROM|WHERE|ORDER|BY|LIMIT|GROUP|JOIN|ON|WITH|AND|IN|AS|DESC|ASC|RETURN|MATCH|COUNT|SUM|DISTINCT|HAVING|INSERT|UPDATE|DELETE|SET|INTO|VALUES|LEFT|RIGHT|INNER|OUTER|NOT|NULL|IS|OR|LIKE|BETWEEN|EXISTS|UNION|ALL|CASE|WHEN|THEN|ELSE|END)\b/g;

// JS/bash keywords
const JS_KEYWORDS =
  /\b(const|let|var|async|await|function|return|if|else|for|while|of|in|new|true|false|null|undefined|import|export|default|class|extends|this|typeof|instanceof)\b/g;

// Strings (single and double quoted)
const STRING_PATTERN = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g;

// Comments
const COMMENT_PATTERN = /(\/\/[^\n]*|#[^\n]*|--[^\n]*)/g;

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightCode(code: string, lang: string): string {
  // Process line by line to keep highlighting contained
  const lines = code.split("\n");
  return lines
    .map((line) => {
      let escaped = escapeHtml(line);

      // Extract comments first so they don't get further processed
      const commentMatches: { placeholder: string; html: string }[] = [];
      escaped = escaped.replace(COMMENT_PATTERN, (match) => {
        const key = `\x00COMMENT${commentMatches.length}\x00`;
        commentMatches.push({
          placeholder: key,
          html: `<span class="text-text-muted italic">${match}</span>`,
        });
        return key;
      });

      // Extract strings
      const stringMatches: { placeholder: string; html: string }[] = [];
      escaped = escaped.replace(STRING_PATTERN, (match) => {
        const key = `\x00STRING${stringMatches.length}\x00`;
        stringMatches.push({
          placeholder: key,
          html: `<span class="text-green">${match}</span>`,
        });
        return key;
      });

      // Highlight keywords based on language
      if (lang === "sql" || lang === "cypher") {
        escaped = escaped.replace(
          SQL_KEYWORDS,
          (kw) => `<span class="text-aurora-1 font-semibold">${kw}</span>`
        );
      } else if (lang === "javascript") {
        escaped = escaped.replace(
          JS_KEYWORDS,
          (kw) => `<span class="text-aurora-2 font-semibold">${kw}</span>`
        );
      }

      // Restore strings then comments
      stringMatches.forEach(({ placeholder, html }) => {
        escaped = escaped.replace(placeholder, html);
      });
      commentMatches.forEach(({ placeholder, html }) => {
        escaped = escaped.replace(placeholder, html);
      });

      return escaped;
    })
    .join("\n");
}

export function DataLayerDemo() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);

  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <div className="w-full rounded-xl border border-border-soft bg-bg-elev-1 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-soft">
        <Database className="w-4 h-4 text-aurora-1" />
        <span className="text-text-secondary text-sm font-medium">
          Unified Data Layer
        </span>
        <span className="ml-auto text-text-muted text-xs">
          Sub-200ms · Data stays in place · No replication
        </span>
      </div>

      {/* Category chips */}
      <div className="px-4 py-3 border-b border-border-soft overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  "flex flex-col items-start gap-0.5 px-3 py-2 rounded-lg border text-xs transition-all duration-200 cursor-pointer whitespace-nowrap",
                  isActive
                    ? COLOR_BG_MAP[cat.color]
                    : "border-border-soft bg-bg-base hover:bg-bg-elev-2 hover:border-border-soft"
                )}
              >
                <span
                  className={cn(
                    "font-medium",
                    isActive
                      ? COLOR_TEXT_MAP[cat.color]
                      : "text-text-secondary"
                  )}
                >
                  {cat.label}
                </span>
                <span className="text-text-muted text-[10px]">
                  {cat.system}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Code block */}
      <div className="relative min-h-[220px] bg-bg-base">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Code header bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border-soft bg-bg-elev-2">
              <span
                className={cn(
                  "text-xs font-mono font-medium",
                  COLOR_TEXT_MAP[active.color]
                )}
              >
                {active.system}
              </span>
              <span className="text-text-muted text-xs font-mono ml-1">
                · {active.language}
              </span>
              <div className="ml-auto flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green/40" />
              </div>
            </div>

            {/* Code content */}
            <div className="p-4 overflow-x-auto">
              <pre className="text-xs font-mono leading-relaxed text-text-secondary">
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightCode(active.query, active.language),
                  }}
                />
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
