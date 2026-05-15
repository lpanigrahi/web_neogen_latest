"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Mark } from "./Mark";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/platform", label: "Platform" },
    { href: "/solutions", label: "Solutions" },
    { href: "/architecture", label: "Architecture" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-bg-base/80 backdrop-blur-xl border-b border-border-soft" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="NXπ home"><Mark size={28} /></Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button
              className="hidden lg:flex items-center gap-2 text-text-muted hover:text-text-secondary text-xs border border-border-soft rounded-lg px-3 py-1.5 transition-colors"
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true });
                document.dispatchEvent(event);
              }}
              aria-label="Open command palette"
            >
              <Search size={12} />
              <span>Search</span>
              <kbd className="text-xs opacity-50">⌘K</kbd>
            </button>
            <Button variant="ghost" size="sm" asChild><Link href="/contact">Sign in</Link></Button>
            <Button size="sm" asChild><Link href="/contact">Book a briefing</Link></Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="flex items-center justify-center w-11 h-11 text-text-secondary hover:text-text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-bg-elev-1 border-t border-border-soft px-5 py-6 space-y-4">
          {[...navLinks, { href: "/about", label: "About" }].map((l) => (
            <Link key={l.href} href={l.href} className="block text-base text-text-secondary hover:text-text-primary py-2" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button variant="secondary" asChild><Link href="/contact">Sign in</Link></Button>
            <Button asChild><Link href="/contact">Book a briefing</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
}
