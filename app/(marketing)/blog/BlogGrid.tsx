"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/StaggerGroup";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
  tag: string;
}

interface BlogGridProps {
  posts: Post[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <motion.article key={post.slug} variants={staggerItem}>
          <Link
            href={`/blog/${post.slug}`}
            className="block h-full rounded-xl border border-border-soft bg-bg-elev-1 p-7 hover:bg-bg-elev-2 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center rounded-full border border-aurora-1/30 bg-aurora-1/10 px-2.5 py-0.5 text-xs text-aurora-1">
                {post.tag}
              </span>
              <span className="text-xs text-text-muted">{post.readTime}</span>
            </div>

            <h2 className="text-base font-semibold text-text-primary leading-snug mb-3 group-hover:text-aurora-1 transition-colors">
              {post.title}
            </h2>

            <p className="text-sm text-text-secondary leading-relaxed mb-6">{post.description}</p>

            <div className="flex items-center justify-between mt-auto">
              <time dateTime={post.date} className="text-xs text-text-muted">
                {formatDate(post.date)}
              </time>
              <span className="text-xs text-aurora-1 group-hover:translate-x-0.5 transition-transform">
                Read →
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </StaggerGroup>
  );
}
