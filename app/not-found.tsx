import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      <Nav />
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <MeshBackdrop intensity="low" className="inset-0" />
        <div className="relative z-10 text-center px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-6">
            404
          </p>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Page not found.
          </h1>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Return to home</Link>
          </Button>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/platform"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors border border-border-soft rounded-md px-4 py-2"
            >
              Platform
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors border border-border-soft rounded-md px-4 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors border border-border-soft rounded-md px-4 py-2"
            >
              Contact
            </Link>
          </div>
          <p className="mt-8 text-xs text-text-muted">
            Or press{" "}
            <kbd className="rounded border border-border-soft px-1.5 py-0.5 text-xs text-text-tertiary">
              ⌘K
            </kbd>{" "}
            to search
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
