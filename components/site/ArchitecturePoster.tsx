"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ArchitecturePoster() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === "π" || e.key === "P")) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[600] bg-bg-base flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-text-muted hover:text-text-primary"
            aria-label="Close architecture poster"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-aurora-1 mb-6">NXπ Architecture Poster</p>
            <h2 className="text-5xl font-bold text-text-primary mb-12">The Enterprise AI Control Plane</h2>
            <div className="grid grid-cols-4 gap-4 mb-12">
              {[
                { layer: "Client", items: ["Web App", "Mobile", "API Clients", "CLI"] },
                { layer: "Orchestration", items: ["Agent Router", "MCP Host", "Token Budget", "Audit Logger"] },
                { layer: "AI Core", items: ["10 LLM Providers", "Hybrid RAG", "Multi-Agent", "Embeddings"] },
                { layer: "Data", items: ["SAP HANA", "Salesforce", "PostgreSQL", "60+ Connectors"] },
              ].map(({ layer, items }) => (
                <div key={layer} className="rounded-xl border border-border-soft bg-bg-elev-1 p-4">
                  <p className="text-xs text-aurora-1 font-semibold uppercase tracking-[0.12em] mb-3">{layer}</p>
                  {items.map((item) => (
                    <p key={item} className="text-xs text-text-secondary py-1 border-b border-border-soft last:border-0">{item}</p>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm">Press Shift+π or Shift+P to dismiss · Download at /architecture/poster.svg</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
