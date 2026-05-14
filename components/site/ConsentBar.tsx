"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function ConsentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dnt = navigator.doNotTrack === "1";
    const dismissed = localStorage.getItem("consent-dismissed");
    if (!dnt && !dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("consent-dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] border-t border-border-soft bg-bg-elev-1/95 backdrop-blur-sm px-5 py-3 flex items-center justify-between gap-4">
      <p className="text-xs text-text-tertiary">
        We use privacy-preserving analytics (no cookies, no tracking pixels). Your DNT preference is respected.{" "}
        <a href="/legal/privacy" className="text-aurora-1 hover:underline">
          Privacy Policy
        </a>
      </p>
      <button
        onClick={dismiss}
        className="text-text-muted hover:text-text-primary flex-shrink-0"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
}
