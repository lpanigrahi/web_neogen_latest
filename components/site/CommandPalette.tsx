"use client";
import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search, FileText, Layers, Users, DollarSign, Shield, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CommandEntry {
  group: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

const commands: CommandEntry[] = [
  { group: "Pages", label: "Home", href: "/", icon: ArrowRight },
  { group: "Pages", label: "Platform Overview", href: "/platform", icon: Layers },
  { group: "Platform", label: "MCP Integration Fabric", href: "/platform/mcp-fabric", icon: ArrowRight },
  { group: "Platform", label: "Multi-Agent Orchestration", href: "/platform/orchestration", icon: ArrowRight },
  { group: "Platform", label: "Hybrid RAG", href: "/platform/rag", icon: ArrowRight },
  { group: "Platform", label: "Workflow Automation", href: "/platform/workflows", icon: ArrowRight },
  { group: "Platform", label: "Unified Data Layer", href: "/platform/data-layer", icon: ArrowRight },
  { group: "Platform", label: "Zero-Trust Governance", href: "/platform/governance", icon: ArrowRight },
  { group: "Solutions", label: "NXπ for SAP", href: "/solutions/sap", icon: ArrowRight },
  { group: "Solutions", label: "NXπ for Salesforce", href: "/solutions/salesforce", icon: ArrowRight },
  { group: "Solutions", label: "SAP + Salesforce Fusion", href: "/solutions/fusion", icon: ArrowRight },
  { group: "Solutions", label: "For the CFO", href: "/solutions/role/cfo", icon: DollarSign },
  { group: "Solutions", label: "For the CISO", href: "/solutions/role/ciso", icon: Shield },
  { group: "Pages", label: "Architecture", href: "/architecture", icon: Layers },
  { group: "Pages", label: "Security", href: "/security", icon: Shield },
  { group: "Pages", label: "Pricing", href: "/pricing", icon: DollarSign },
  { group: "Pages", label: "Customers", href: "/customers", icon: Users },
  { group: "Pages", label: "Blog", href: "/blog", icon: FileText },
  { group: "Actions", label: "Book an executive briefing", href: "/contact", icon: ArrowRight },
  { group: "Actions", label: "See the architecture", href: "/architecture", icon: ArrowRight },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const navigate = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-bg-base/60 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative w-full max-w-xl mx-5 rounded-xl border border-border-soft bg-bg-elev-1 shadow-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Command palette"
        aria-modal="true"
      >
        <Command>
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border-soft">
            <Search size={16} className="text-text-muted flex-shrink-0" />
            <Command.Input
              className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
              placeholder="Search pages and actions..."
              autoFocus
            />
            <kbd className="text-xs text-text-muted border border-border-soft rounded px-1.5 py-0.5">ESC</kbd>
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-text-muted">
              No results found.
            </Command.Empty>
            {["Actions", "Pages", "Platform", "Solutions"].map((group) => (
              <Command.Group
                key={group}
                heading={group}
                className="[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.1em]"
              >
                {commands
                  .filter((c) => c.group === group)
                  .map((cmd) => (
                    <Command.Item
                      key={cmd.href + cmd.label}
                      value={cmd.label}
                      onSelect={() => navigate(cmd.href)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-secondary cursor-pointer data-[selected=true]:bg-surface data-[selected=true]:text-text-primary"
                    >
                      <cmd.icon size={14} className="text-text-muted flex-shrink-0" />
                      {cmd.label}
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
