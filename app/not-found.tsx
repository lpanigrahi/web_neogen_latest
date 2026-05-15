import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { Nav } from "@/components/site/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      {/* bg always dark — 404 is a full-screen recovery moment, not theme-dependent */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#050914" }}
      >
        <MeshBackdrop intensity="low" className="inset-0" />
        <div className="relative z-10 text-center px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] mb-6" style={{ color: "#7A88AC" }}>
            404
          </p>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#F4F6FB" }}>
            Page not found.
          </h1>
          <p className="mb-8 max-w-md mx-auto" style={{ color: "#B9C2D8" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Return to home</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
