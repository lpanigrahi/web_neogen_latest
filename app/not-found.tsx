import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-base">
      <MeshBackdrop intensity="low" className="inset-0" />
      <div className="relative z-10 text-center px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-6">404</p>
        <h1 className="text-4xl font-bold text-text-primary mb-4">Page not found.</h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Return to home</Link>
        </Button>
      </div>
    </div>
  );
}
