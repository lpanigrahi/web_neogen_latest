import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ConsentBar } from "@/components/site/ConsentBar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-aurora-1 focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
      <ConsentBar />
    </>
  );
}
