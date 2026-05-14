import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { BlogGrid } from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research and perspectives from NXπ on enterprise AI, governed data infrastructure, and the Model Context Protocol.",
};

export const posts = [
  {
    slug: "why-enterprise-ai-assumes-a-graph",
    title: "Why every enterprise AI platform assumes a graph — and what we built instead",
    date: "2026-05-01",
    description:
      "Copilot assumes the productivity graph. Agentforce assumes the customer graph. Palantir assumes an ontology. We built something different.",
    readTime: "7 min read",
    tag: "Architecture",
  },
  {
    slug: "hybrid-rag-knowledge-runtime",
    title: "Hybrid RAG is not a search feature. It is a knowledge runtime.",
    date: "2026-04-15",
    description:
      "Vector search retrieves by meaning. BM25 retrieves by keyword. RRF combines them. The result is 91%+ recall.",
    readTime: "6 min read",
    tag: "Retrieval",
  },
  {
    slug: "eu-ai-act-august-2026",
    title: "August 2, 2026: what the EU AI Act high-risk deadline actually requires",
    date: "2026-04-01",
    description:
      "August 2, 2026 is the compliance deadline for high-risk AI systems. Here is what it actually requires.",
    readTime: "8 min read",
    tag: "Compliance",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="border-b border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 py-20 lg:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora-2/30 bg-aurora-2/10 px-3 py-1 text-xs text-aurora-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-2" />
              Blog
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight leading-[1.08] max-w-2xl">
              Research and perspectives
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary max-w-xl">
              On enterprise AI, governed data infrastructure, and the Model Context Protocol.
              Written by the NXπ team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto max-w-[1408px] px-5 lg:px-12 py-16">
        <BlogGrid posts={posts} />
      </section>
    </div>
  );
}
