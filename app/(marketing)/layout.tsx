import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ConsentBar } from "@/components/site/ConsentBar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <ConsentBar />
    </>
  );
}
