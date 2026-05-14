"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-base px-5">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-6">500</p>
        <h1 className="text-4xl font-bold text-text-primary mb-4">Something went wrong.</h1>
        <p className="text-text-secondary mb-8">An unexpected error occurred. Please try again.</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}
