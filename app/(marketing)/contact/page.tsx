import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book an executive briefing, request a demo, or reach our security team.",
};

const contactOptions = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Executive briefing",
    description: "90-minute session with your team — architecture deep-dive, security review, and a live demo against your stack.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Product demo",
    description: "Guided walkthrough of NXπ against a realistic enterprise use case. SAP + Salesforce integration preferred.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Security disclosure",
    description: "Responsible disclosure of security vulnerabilities. We respond within 24 hours and follow coordinated disclosure.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="border-b border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20 lg:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora-1/30 bg-aurora-1/10 px-3 py-1 text-xs text-aurora-1 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-1" />
              Contact
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight leading-[1.08] max-w-2xl">
              Let&apos;s talk about your{" "}
              <span className="bg-gradient-to-r from-aurora-1 to-aurora-3 bg-clip-text text-transparent">
                enterprise AI stack.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
              Book an executive briefing, request a demo, or reach our security team. We respond
              within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <FadeIn>
              <h2 className="text-xl font-semibold text-text-primary mb-8">Send us a message</h2>
              <ContactForm />
            </FadeIn>
          </div>

          {/* Right: Options + meta */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-widest mb-6">
                  What to expect
                </h2>
                <div className="space-y-6">
                  {contactOptions.map((opt) => (
                    <div key={opt.title} className="flex gap-4">
                      <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border border-border-soft bg-surface text-text-secondary">
                        {opt.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-1">{opt.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{opt.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-6">
                <p className="text-xs uppercase tracking-widest text-text-tertiary mb-4 font-medium">
                  Response commitment
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We respond to all inquiries within one business day. Security disclosures receive
                  a response within 24 hours regardless of day or time.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
