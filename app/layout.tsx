import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { CustomCursor } from "@/components/site/CustomCursor";
import { NoiseOverlay } from "@/components/site/NoiseOverlay";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "NXπ — The Enterprise AI Operations Platform", template: "%s | NXπ" },
  description: "NXπ connects SAP, Salesforce, and every data asset through governed AI agents — with the audit trail your regulators require and the sovereignty your CISO demands.",
  metadataBase: new URL("https://nxpi.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <body className="bg-bg-base text-text-primary antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')}catch{}`,
          }}
        />
        <CustomCursor />
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
