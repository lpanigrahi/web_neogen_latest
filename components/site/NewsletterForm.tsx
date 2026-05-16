"use client";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterForm({ source }: { source: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-aurora-2">You&apos;re on the list. Thank you.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        disabled={status === "submitting"}
        className="flex-1 rounded-lg border border-border-soft bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-aurora-1/50 disabled:opacity-50"
      />
      <Button type="submit" size="sm" disabled={status === "submitting"}>
        {status === "submitting" ? "…" : "Subscribe"}
      </Button>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-1 sm:col-span-2">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
