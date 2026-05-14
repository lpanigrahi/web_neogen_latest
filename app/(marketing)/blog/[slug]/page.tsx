import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

interface Props {
  params: Promise<{ slug: string }>;
}

const postMeta = {
  "why-enterprise-ai-assumes-a-graph": {
    title: "Why every enterprise AI platform assumes a graph — and what we built instead",
    date: "2026-05-01",
    author: "NXπ Research",
    description:
      "Copilot assumes the productivity graph. Agentforce assumes the customer graph. Palantir assumes an ontology. Glean assumes a knowledge graph. We built something different.",
    readTime: "7 min read",
    tag: "Architecture",
  },
  "hybrid-rag-knowledge-runtime": {
    title: "Hybrid RAG is not a search feature. It is a knowledge runtime.",
    date: "2026-04-15",
    author: "NXπ Research",
    description:
      "Vector search retrieves by meaning. BM25 retrieves by keyword. Reciprocal Rank Fusion combines them. The result is 91%+ recall — and a knowledge substrate that your agents can reason on.",
    readTime: "6 min read",
    tag: "Retrieval",
  },
  "eu-ai-act-august-2026": {
    title: "August 2, 2026: what the EU AI Act high-risk deadline actually requires",
    date: "2026-04-01",
    author: "NXπ Research",
    description:
      "August 2, 2026 is the compliance deadline for high-risk AI systems under the EU AI Act. Here is what it actually requires — and what it means for enterprise AI deployments.",
    readTime: "8 min read",
    tag: "Compliance",
  },
} as const;

type Slug = keyof typeof postMeta;

export async function generateStaticParams() {
  return [
    { slug: "why-enterprise-ai-assumes-a-graph" },
    { slug: "hybrid-rag-knowledge-runtime" },
    { slug: "eu-ai-act-august-2026" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postMeta[slug as Slug];
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.description };
}

function PostHeader({ slug }: { slug: Slug }) {
  const post = postMeta[slug];
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/blog"
          className="text-xs text-text-tertiary hover:text-text-primary transition-colors"
        >
          &larr; Blog
        </Link>
        <span className="text-text-muted text-xs">/</span>
        <span className="inline-flex items-center rounded-full border border-aurora-1/30 bg-aurora-1/10 px-2.5 py-0.5 text-xs text-aurora-1">
          {post.tag}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.1] mb-6">
        {post.title}
      </h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-text-tertiary">
        <span>{post.author}</span>
        <span>&middot;</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>&middot;</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  );
}

function WhyGraphContent() {
  return (
    <article className="space-y-6 text-text-secondary leading-relaxed">
      <p className="text-lg text-text-primary font-medium">
        Every major enterprise AI platform is built around a central assumption: that your
        organization has one primary graph.
      </p>
      <p>
        Microsoft Copilot assumes the{" "}
        <strong className="text-text-primary">productivity graph</strong> — your emails, meetings,
        documents, and calendar are the center of organizational intelligence.
      </p>
      <p>
        Salesforce Agentforce assumes the{" "}
        <strong className="text-text-primary">customer graph</strong> — CRM data, pipeline stages,
        and support tickets are where decisions happen.
      </p>
      <p>
        Palantir AIP assumes an <strong className="text-text-primary">ontology</strong> — a
        carefully modeled representation of your enterprise entities and their relationships.
      </p>
      <p>
        Glean assumes a <strong className="text-text-primary">knowledge graph</strong> — that
        search over internal content is the primary lever for organizational intelligence.
      </p>
      <p>
        ServiceNow and Moveworks assume the{" "}
        <strong className="text-text-primary">workflow graph</strong> — that process automation is
        where AI creates the most value.
      </p>
      <p>
        Every one of these platforms is right. For some organizations, for some problems, for some
        parts of the business.
      </p>
      <p>
        The problem is that enterprise organizations are not single-graph entities. A financial
        close requires data from SAP, Salesforce, and a dozen data warehouses. A procurement
        decision requires supplier intelligence from ERP, contract terms from documents, and market
        signals from external sources. A customer retention action requires service history from
        support, product usage from analytics, and order history from billing.
      </p>
      <p className="text-text-primary font-semibold text-lg border-l-4 border-aurora-1 pl-5 py-1">
        The most valuable AI use cases in the enterprise live in the join between graphs — not
        inside any one of them.
      </p>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-2">What we built instead</h2>
      <p>
        NXπ does not assume a primary graph. It is designed to be the{" "}
        <strong className="text-text-primary">control plane across all graphs</strong> — connecting
        them through the Model Context Protocol (MCP), governing access through zero-trust policies,
        and exposing the unified substrate to AI agents and workflows.
      </p>
      <p>
        In Q1 2026, both SAP and Salesforce announced native MCP support. For the first time, it
        became technically feasible to build a genuinely cross-system AI layer without proprietary
        connectors or data replication.
      </p>
      <p>
        78% of enterprise AI teams now have at least one MCP-backed agent in production. The
        protocol has become the standard.
      </p>
      <p>
        NXπ is built on that standard — as a first-class MCP host that treats SAP and Salesforce as
        equals, alongside PostgreSQL, MongoDB, Snowflake, and every other system your enterprise
        runs.
      </p>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-2">
        The governance layer no one else has
      </h2>
      <p>Connecting multiple systems creates a new problem: governance at the intersection.</p>
      <p>
        When an agent can query both SAP billing and Salesforce pipeline, who decides what it can
        access? When an action updates both systems, what is the audit trail? When a financial model
        draws on five sources, how does the regulator trace the decision?
      </p>
      <p>
        NXπ answers these questions with zero-trust governance built into the data plane — not
        bolted on top. Every MCP connection is scoped per user, per role, and per data label. Every
        action is written to an append-only audit log in your PostgreSQL. PII is detected and masked
        before it reaches any LLM.
      </p>
      <p>
        This is the architecture that survives an audit, a board meeting, and August 2, 2026.
      </p>
    </article>
  );
}

function HybridRagContent() {
  return (
    <article className="space-y-6 text-text-secondary leading-relaxed">
      <p className="text-lg text-text-primary font-medium">
        Most enterprise AI teams treat retrieval-augmented generation as a search feature. Build an
        index, embed your documents, retrieve the top-k results, append to the prompt. Ship it.
      </p>
      <p>
        This works well enough to pass a demo. It does not work well enough to run financial
        analysis, answer regulatory questions, or drive autonomous agents that need accurate context
        every time.
      </p>
      <p>
        The failure mode is silent and expensive. Vector-only retrieval achieves recall@10 between
        65% and 78% on enterprise knowledge bases. That means in 22–35% of queries, the relevant
        document is not in the retrieved set. The model answers confidently from incomplete
        information.
      </p>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-2">The hybrid approach</h2>
      <p>Hybrid RAG combines two retrieval strategies:</p>
      <p>
        <strong className="text-text-primary">Dense retrieval (vector search):</strong> Documents
        are embedded into a high-dimensional vector space. Query time: embed the question, find
        nearest neighbors by cosine similarity. Excellent at semantic understanding — finds relevant
        content even when exact terms differ.
      </p>
      <p>
        <strong className="text-text-primary">Sparse retrieval (BM25):</strong> Classical
        keyword-based ranking. Excellent at precise term matching — finds exact product names,
        regulation numbers, account IDs, error codes. Does not suffer from embedding drift.
      </p>
      <p>
        Neither approach alone is sufficient. Together, they cover each other&apos;s failure modes.
      </p>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-2">Reciprocal Rank Fusion</h2>
      <p>
        The combination method matters. Naive approaches — score averaging, threshold filtering —
        do not work well in practice. Reciprocal Rank Fusion (RRF) is the correct algorithm.
      </p>
      <p>
        RRF assigns each document a score based on its rank in each retrieval list, not its raw
        score. The formula is simple:
      </p>
      <div className="rounded-lg bg-surface border border-border-soft px-6 py-4 font-mono text-sm text-text-primary my-2">
        RRF(d) = &Sigma; 1 / (k + rank_i(d))
      </div>
      <p>
        where k is a constant (typically 60) and rank_i is the document&apos;s rank in retrieval
        system i.
      </p>
      <p>
        The result: documents that appear in the top results of both retrieval systems get a strong
        combined score. Documents that excel in one system but are absent in the other are
        appropriately discounted.
      </p>
      <p>
        Benchmark results from 2026 RAG evaluations: recall@10 jumps from 65–78% (vector-only) to
        91%+ (hybrid with RRF).
      </p>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-2">
        Why this matters for agents
      </h2>
      <p>
        Autonomous agents that drive business processes — financial close, procurement analysis,
        customer retention — cannot tolerate 22–35% retrieval failure rates. A missed document in a
        financial reconciliation means a wrong answer. A missed contract term means a compliance
        gap.
      </p>
      <p className="text-text-primary font-semibold border-l-4 border-aurora-2 pl-5 py-1">
        At 91%+ recall, retrieval becomes a reliable substrate for reasoning, not a best-effort
        lookup.
      </p>
      <p>
        NXπ implements hybrid RAG with RRF as the default retrieval strategy. Every RAG pipeline
        benefits from it automatically. Sources are attributed per chunk. Every answer is grounded.
      </p>
    </article>
  );
}

function EuAiActContent() {
  const requirements = [
    {
      n: "1",
      title: "Risk management system",
      body: "A documented process for identifying, analyzing, and mitigating risks throughout the AI system lifecycle. Updated continuously.",
    },
    {
      n: "2",
      title: "Data governance",
      body: "Training data (and fine-tuning data) must be documented, assessed for bias, and subject to appropriate quality controls. For RAG systems: the knowledge base sources must be documented and auditable.",
    },
    {
      n: "3",
      title: "Technical documentation",
      body: "A comprehensive technical file describing the system's purpose, architecture, data flows, performance metrics, and limitations. Must be made available to regulators on request.",
    },
    {
      n: "4",
      title: "Record-keeping",
      body: "Automatic logging sufficient to ensure traceability of outputs. For agentic AI: this means the full agent call tree, tool invocations, retrieved sources, and model outputs — for a defined retention period.",
    },
    {
      n: "5",
      title: "Transparency and user information",
      body: "Users must know they are interacting with an AI system. Outputs must be labeled as AI-generated when used in consequential decisions.",
    },
    {
      n: "6",
      title: "Human oversight",
      body: "High-risk systems must be designed to allow human oversight, correction, and overriding of AI outputs. The system must support — not undermine — human control.",
    },
  ];

  return (
    <article className="space-y-6 text-text-secondary leading-relaxed">
      <p className="text-lg text-text-primary font-medium">
        August 2, 2026 is the date by which organizations deploying high-risk AI systems in the EU
        must demonstrate compliance with the EU AI Act (Article 113). Many enterprise AI teams are
        behind.
      </p>
      <p>This post explains what the Act actually requires — without the legal fog.</p>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-2">
        What counts as high-risk?
      </h2>
      <p>
        The EU AI Act classifies AI systems as high-risk if they are used in specific areas:
        employment (CV screening, performance monitoring), credit and insurance decisions, access to
        education, law enforcement, migration, and administration of justice.
      </p>
      <p>
        For most enterprise AI use cases — financial analysis, supply chain optimization, customer
        intelligence, workflow automation — the high-risk classification applies when the AI output
        directly informs a consequential decision about a person.
      </p>
      <p>
        An AI agent that generates financial close reports for CFO review is lower risk than one
        that automatically approves or rejects supplier invoices. The distinction is human
        oversight.
      </p>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">
        The six core requirements
      </h2>
      <div className="space-y-4">
        {requirements.map((req) => (
          <div
            key={req.n}
            className="flex gap-4 p-5 rounded-lg border border-border-soft bg-surface"
          >
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-aurora-1/10 border border-aurora-1/30 text-aurora-1 text-sm font-bold">
              {req.n}
            </div>
            <div>
              <p className="font-semibold text-text-primary mb-1">{req.title}</p>
              <p className="text-sm">{req.body}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-text-primary mt-10 mb-2">What NXπ does</h2>
      <p>NXπ is designed around these requirements, not retrofitted to them:</p>
      <p>
        <strong className="text-text-primary">Record-keeping</strong> is handled by the append-only
        audit log — every agent run, every tool call, every retrieved document, every model
        response, written to your PostgreSQL with tamper-evident timestamps.
      </p>
      <p>
        <strong className="text-text-primary">Technical documentation</strong> is generated from
        the platform&apos;s own configuration: MCP connections, model allowlists, RBAC policies,
        workflow DAGs — all machine-readable and exportable.
      </p>
      <p>
        <strong className="text-text-primary">Data governance</strong> for RAG is addressed through
        source attribution on every answer — the system records which documents informed each
        response, including document metadata and retrieval scores.
      </p>
      <p>
        <strong className="text-text-primary">Human oversight</strong> is built into the workflow
        builder — approval nodes can be inserted at any point in an automated workflow, requiring
        human sign-off before consequential actions execute.
      </p>
      <p className="border-l-4 border-aurora-3 pl-5 py-1 text-text-primary font-medium">
        The August 2 deadline is not a one-time certification. It marks the beginning of ongoing
        compliance. Organizations that built their AI stack without audit infrastructure will spend
        the next 12–18 months retrofitting. Organizations that built on NXπ are already there.
      </p>
    </article>
  );
}

const contentMap: Record<Slug, React.FC> = {
  "why-enterprise-ai-assumes-a-graph": WhyGraphContent,
  "hybrid-rag-knowledge-runtime": HybridRagContent,
  "eu-ai-act-august-2026": EuAiActContent,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const slugKey = slug as Slug;
  const post = postMeta[slugKey];

  if (!post) {
    notFound();
  }

  const Content = contentMap[slugKey];

  return (
    <div className="min-h-screen pt-16">
      <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <PostHeader slug={slugKey} />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Content />
          </FadeIn>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-border-soft">
            <Link
              href="/blog"
              className="text-sm text-aurora-1 hover:opacity-80 transition-opacity"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
