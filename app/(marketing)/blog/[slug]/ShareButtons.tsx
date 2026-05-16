"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ShareButtons({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://nxpi.ai/blog/${slug}`;

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-xs text-text-muted">Share:</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-text-tertiary hover:text-aurora-1 transition-colors border border-border-soft rounded-md px-3 py-1.5"
      >
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-text-tertiary hover:text-aurora-3 transition-colors border border-border-soft rounded-md px-3 py-1.5"
      >
        X / Twitter
      </a>
      <button
        onClick={copyLink}
        className={cn(
          "text-xs border rounded-md px-3 py-1.5 transition-colors border-border-soft",
          copied
            ? "text-aurora-2 border-aurora-2/30"
            : "text-text-tertiary hover:text-text-primary"
        )}
      >
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
