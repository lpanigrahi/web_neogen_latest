import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { AIActReadiness } from "@/components/site/AIActReadiness";

interface Props {
  params: Promise<{ doc: string }>;
}

const legalDocs = {
  privacy: { title: "Privacy Policy", lastUpdated: "2026-05-01" },
  terms: { title: "Terms of Service", lastUpdated: "2026-05-01" },
  dpa: { title: "Data Processing Agreement", lastUpdated: "2026-05-01" },
  "ai-act-readiness": { title: "EU AI Act Readiness Summary", lastUpdated: "2026-05-01" },
} as const;

type LegalDocKey = keyof typeof legalDocs;

export async function generateStaticParams() {
  return Object.keys(legalDocs).map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doc } = await params;
  const docData = legalDocs[doc as LegalDocKey];
  if (!docData) return { title: "Legal" };
  return { title: docData.title, description: `NXπ ${docData.title}` };
}

function DraftBanner() {
  return (
    <div
      role="alert"
      className="mb-10 rounded-lg border border-amber-500/40 bg-amber-500/10 px-5 py-4 flex items-start gap-3"
    >
      <svg
        className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div>
        <p className="text-sm font-semibold text-amber-400 mb-0.5">Pending legal review</p>
        <p className="text-xs text-amber-300/80">
          This document is a draft placeholder and has not been reviewed by legal counsel. It is not
          legally binding and must not be relied upon. Final versions will be published following
          review.
        </p>
      </div>
    </div>
  );
}

function PlaceholderSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-text-primary mb-3">{title}</h2>
      <div className="text-sm text-text-secondary leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function PrivacyContent() {
  return (
    <>
      <PlaceholderSection title="1. Information We Collect">
        <p>
          <em>[DRAFT — pending legal review]</em> Negentrophi, Inc. (&quot;Negentrophi&quot;,
          &quot;NXπ&quot;, &quot;we&quot;, &quot;us&quot;) collects information you provide
          directly to us when you use our platform, create an account, or contact us. This includes
          name, email address, company name, role, and any information you choose to provide in
          messages.
        </p>
        <p>
          We collect usage data and technical information about how you interact with the NXπ
          platform, including log data, device information, and analytics. When you connect
          third-party systems (SAP, Salesforce, etc.) through our MCP connectors, we act as a data
          processor on your behalf — we do not store or train on your enterprise data.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="2. How We Use Your Information">
        <p>
          <em>[DRAFT — pending legal review]</em> We use information collected to provide and
          improve the NXπ platform, respond to your inquiries, send product updates and security
          notices, and comply with our legal obligations.
        </p>
        <p>
          We do not sell your personal data to third parties. We do not use your enterprise data to
          train AI models. All data processed through the NXπ platform remains yours.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="3. Data Retention and Deletion">
        <p>
          <em>[DRAFT — pending legal review]</em> We retain personal account data for the duration
          of your account plus 90 days following termination. Audit logs are retained for the period
          specified in your subscription agreement (default: 12 months). You may request deletion of
          your personal data at any time by contacting our privacy team.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="4. Your Rights">
        <p>
          <em>[DRAFT — pending legal review]</em> Depending on your jurisdiction, you may have
          rights including: access to your personal data, correction of inaccurate data, deletion of
          your data, objection to processing, and data portability. To exercise these rights, contact
          us at privacy@negentrophi.ai.
        </p>
      </PlaceholderSection>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <PlaceholderSection title="1. Acceptance of Terms">
        <p>
          <em>[DRAFT — pending legal review]</em> By accessing or using the NXπ platform, you agree
          to be bound by these Terms of Service. If you are using NXπ on behalf of an organization,
          you represent that you have authority to bind that organization to these terms.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="2. License and Use">
        <p>
          <em>[DRAFT — pending legal review]</em> Subject to your compliance with these Terms and
          payment of applicable fees, Negentrophi grants you a limited, non-exclusive,
          non-transferable right to access and use the NXπ platform for your internal business
          purposes during the subscription term.
        </p>
        <p>
          You may not: reverse engineer the platform, use the platform to build a competing product,
          share access credentials with unauthorized users, or use the platform to process data in
          violation of applicable law.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="3. Data and Privacy">
        <p>
          <em>[DRAFT — pending legal review]</em> You own your data. Negentrophi acts as a data
          processor when processing your enterprise data through the NXπ platform. We process your
          data only as necessary to provide the services and in accordance with your instructions and
          our Data Processing Agreement.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="4. Limitation of Liability">
        <p>
          <em>[DRAFT — pending legal review]</em> To the maximum extent permitted by applicable law,
          in no event shall Negentrophi&apos;s total liability to you exceed the fees paid by you in
          the 12 months preceding the claim. Negentrophi shall not be liable for indirect,
          incidental, special, consequential, or punitive damages.
        </p>
      </PlaceholderSection>
    </>
  );
}

function DPAContent() {
  return (
    <>
      <PlaceholderSection title="1. Scope and Definitions">
        <p>
          <em>[DRAFT — pending legal review]</em> This Data Processing Agreement (&quot;DPA&quot;)
          governs Negentrophi&apos;s processing of personal data on behalf of the Customer in
          connection with the NXπ platform. &quot;Controller&quot; means the Customer. &quot;Processor&quot;
          means Negentrophi, Inc. &quot;Data Subject&quot; means individuals whose personal data is
          processed through the platform.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="2. Processing Instructions">
        <p>
          <em>[DRAFT — pending legal review]</em> Negentrophi will process personal data only on
          documented instructions from the Customer, unless required to do so by applicable law. The
          Customer instructs Negentrophi to process personal data as necessary to provide the NXπ
          platform services.
        </p>
        <p>
          Negentrophi will immediately inform the Customer if, in its opinion, an instruction
          infringes applicable data protection law.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="3. Security Measures">
        <p>
          <em>[DRAFT — pending legal review]</em> Negentrophi implements appropriate technical and
          organizational measures to protect personal data, including: encryption in transit and at
          rest, access controls and RBAC, PII detection and masking, append-only audit logging, and
          regular security assessments.
        </p>
      </PlaceholderSection>
      <PlaceholderSection title="4. Sub-processors">
        <p>
          <em>[DRAFT — pending legal review]</em> Negentrophi may engage sub-processors to assist in
          providing the NXπ platform. Current sub-processors are listed at
          negentrophi.ai/legal/sub-processors. Negentrophi will notify the Customer 30 days in
          advance of adding or replacing sub-processors.
        </p>
      </PlaceholderSection>
    </>
  );
}

function AiActContent() {
  return (
    <>
      <PlaceholderSection title="1. Scope: Which NXπ Use Cases Are High-Risk">
        <p>
          NXπ is a platform — its risk classification depends on how it is deployed. Use cases that
          directly inform consequential decisions about individuals (employment, credit, access to
          services) may trigger high-risk classification under Annex III of the EU AI Act.
        </p>
        <p>
          Use cases where NXπ generates analysis for human review (financial close reports, supply
          chain risk summaries, procurement recommendations) are generally lower-risk, provided human
          oversight is preserved.
        </p>
        <p>
          <em>[DRAFT — pending legal review. Customers should perform their own risk classification
          in consultation with legal counsel.]</em>
        </p>
      </PlaceholderSection>

      <PlaceholderSection title="2. Risk Management System">
        <p>
          NXπ supports customer risk management obligations through: a model allowlist that prevents
          deployment of unapproved models, per-workflow configuration that constrains agent
          capabilities, and the workflow audit log that records every agent decision for ongoing
          monitoring and incident response.
        </p>
        <p>
          Customers are responsible for implementing and maintaining their own risk management system
          covering NXπ deployments in their environment.
        </p>
      </PlaceholderSection>

      <PlaceholderSection title="3. Data Governance">
        <p>
          For RAG pipelines, NXπ provides source attribution on every answer — the system records
          which documents informed each response, including document metadata and retrieval scores.
          This supports documentation of the knowledge base used to inform AI outputs.
        </p>
        <p>
          NXπ does not train on customer data. The platform does not use enterprise data processed
          through MCP connectors for model training or improvement.
        </p>
      </PlaceholderSection>

      <PlaceholderSection title="4. Technical Documentation">
        <p>
          NXπ generates machine-readable configuration exports covering: active MCP connections and
          their scopes, model allowlists and version pins, RBAC policies and user assignments,
          workflow DAGs and approval node configuration, and audit log retention settings.
        </p>
        <p>
          These exports are designed to support the technical documentation requirement under Article
          11 and Annex IV of the EU AI Act.
        </p>
      </PlaceholderSection>

      <PlaceholderSection title="5. Record-Keeping and Audit Logging">
        <p>
          NXπ writes an append-only, tamper-evident audit log to the customer&apos;s PostgreSQL
          instance. The log captures: agent run initiation (timestamp, trigger, user), every tool
          call and MCP invocation, retrieved documents (source, metadata, retrieval score), model
          prompts and responses (summarized to avoid context accumulation), and workflow approvals
          and overrides.
        </p>
        <p>
          Log retention is configurable. Default is 12 months. Extended retention (up to 7 years) is
          available on Enterprise tier. The compliance export function formats log data in the
          structure required for EU AI Act technical documentation.
        </p>
      </PlaceholderSection>

      <PlaceholderSection title="6. Human Oversight">
        <p>
          NXπ workflow builder supports approval nodes at any point in an automated workflow.
          Approval nodes pause execution and require a designated human approver to review the
          AI-generated recommendation before any consequential action proceeds.
        </p>
        <p>
          Operators can configure: which actions require approval, who is authorized to approve, time
          limits for approval (with automatic escalation), and what information is presented to the
          approver. All approvals and overrides are written to the audit log.
        </p>
        <p>
          <em>[DRAFT — pending legal review. This summary does not constitute legal advice. Customers
          should consult qualified legal counsel on their EU AI Act compliance obligations.]</em>
        </p>
      </PlaceholderSection>
    </>
  );
}

const docContent: Record<LegalDocKey, React.FC> = {
  privacy: PrivacyContent,
  terms: TermsContent,
  dpa: DPAContent,
  "ai-act-readiness": AiActContent,
};

export default async function LegalDocPage({ params }: Props) {
  const { doc } = await params;
  const docKey = doc as LegalDocKey;
  const docData = legalDocs[docKey];

  if (!docData) {
    notFound();
  }

  const Content = docContent[docKey];
  const isAiActReadiness = docKey === "ai-act-readiness";

  return (
    <div className="min-h-screen pt-16">
      <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20">
        <div className={isAiActReadiness ? "max-w-3xl" : "max-w-3xl"}>
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-3 py-1 text-xs text-text-tertiary mb-6">
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-3">
              {docData.title}
            </h1>
            <p className="text-sm text-text-muted mb-10">
              Last updated:{" "}
              {new Date(docData.lastUpdated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            {isAiActReadiness ? (
              <AIActReadiness />
            ) : (
              <>
                <DraftBanner />
                <Content />
              </>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
