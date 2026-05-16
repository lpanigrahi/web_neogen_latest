import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateProductSchema } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarqueeRow } from "@/components/site/MarqueeRow";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { HeroSceneWrapper } from "@/components/three/HeroSceneWrapper";
import { FadeIn } from "@/components/motion/FadeIn";
import { StatsRow } from "@/components/site/StatsRow";
import { AIDemoIsland } from "@/components/site/AIDemoIsland";
import { Suspense } from "react";
import { UTMPersonalizer } from "@/components/site/UTMPersonalizer";
import { ArrowRight, Building2, Globe } from "lucide-react";

// ─── Integration logo definitions ─────────────────────────────────────────────
type IntegrationLogo = { name: string; color: string; bg: string; path: string };

const integrationLogos: IntegrationLogo[] = [
  {
    name: "Salesforce",
    color: "#00A1E0",
    bg: "#E8F4FB",
    path: "M11.5 2.5C9.3 2.5 7.4 3.5 6.1 5.2 5.6 5.1 5.1 5 4.5 5 2 5 0 7 0 9.5S2 14 4.5 14h15C22 14 24 12 24 9.5S22 5 19.5 5c-.6 0-1.1.1-1.6.3C16.7 3.5 14.8 2.5 12.7 2.5c-.4 0-.8.05-1.2.1z",
  },
  {
    name: "Slack",
    color: "#4A154B",
    bg: "#F5EFF6",
    path: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zm2.521-10.123a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
  },
  {
    name: "GitHub",
    color: "#181717",
    bg: "#F0F0F0",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "AWS",
    color: "#FF9900",
    bg: "#FFF5E6",
    path: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.483.483 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963zm16.878 3.853c.375-.558.583-1.205.583-1.94 0-.511-.112-.942-.327-1.293a2.224 2.224 0 0 0-.902-.847c.271-.191.494-.424.662-.694.168-.271.255-.598.255-.973 0-.543-.168-1.005-.503-1.38-.335-.376-.81-.567-1.42-.567-.254 0-.494.024-.71.072a4.13 4.13 0 0 0-.527.175v-5.15c0-.064-.024-.12-.072-.168a.238.238 0 0 0-.167-.064h-.854c-.064 0-.12.024-.168.072a.238.238 0 0 0-.064.168v13.627c0 .064.024.12.064.168.048.04.104.064.168.064h.854c.064 0 .12-.024.167-.064a.23.23 0 0 0 .072-.168v-.399c.176.168.368.303.567.4.199.095.415.143.638.143.606 0 1.101-.255 1.484-.694zm-8.617-.727c.08.112.184.215.311.303.128.088.272.136.44.136.175 0 .343-.056.503-.168a.838.838 0 0 0 .311-.455c.056-.192.088-.415.088-.67V8.906c0-.064.024-.12.064-.168a.238.238 0 0 1 .167-.064h.855c.064 0 .12.024.168.072.04.04.063.104.063.168v3.412c0 .447-.063.87-.191 1.261a2.82 2.82 0 0 1-.55.99 2.47 2.47 0 0 1-.87.647 2.912 2.912 0 0 1-1.133.223c-.391 0-.742-.056-1.053-.16a2.588 2.588 0 0 1-.83-.487 2.385 2.385 0 0 1-.567-.79 2.755 2.755 0 0 1-.207-1.094V8.906c0-.064.024-.12.064-.168a.238.238 0 0 1 .168-.064h.854c.064 0 .12.024.168.072.04.04.064.104.064.168v3.412c0 .255.024.487.08.686.056.2.143.367.255.503zm-1.55 2.084c-.048 0-.096-.008-.144-.016-.112-.04-.2-.128-.24-.232a.417.417 0 0 1-.015-.128V8.93c0-.064.016-.12.048-.16a.29.29 0 0 1 .144-.095.535.535 0 0 1 .135-.024h.814c.048 0 .096.008.143.016.112.04.2.128.24.232.016.04.016.08.016.128v6.838c0 .064-.016.12-.048.16a.29.29 0 0 1-.143.095.535.535 0 0 1-.136.024z",
  },
  {
    name: "Jira",
    color: "#0052CC",
    bg: "#E6EDFF",
    path: "M11.53 0a.53.53 0 0 0-.53.53v6.262L5.94 1.73a.53.53 0 0 0-.75 0L.24 6.679a.53.53 0 0 0 0 .749l4.93 4.929L0 17.286a.53.53 0 0 0 0 .749l4.93 4.93a.53.53 0 0 0 .75 0L11.003 17.7l5.323 5.264a.53.53 0 0 0 .75 0l4.93-4.93a.53.53 0 0 0 0-.748l-5.17-5.17 4.93-4.928a.53.53 0 0 0 0-.75L16.836 1.73a.53.53 0 0 0-.75 0l-5.056 5.063V.53A.53.53 0 0 0 11.53 0z",
  },
  {
    name: "Google Drive",
    color: "#4285F4",
    bg: "#EAF0FF",
    path: "M6.28 0L0 10.665l3.26 5.653L9.54 5.653zm11.44 0H6.28l3.26 5.653h11.44zM15.459 16.318H3.26L0 21.97h18.72zM24 10.665L17.72 0l-3.261 5.653 6.28 10.665zm-8.54 5.653l-3.26-5.653H3.26l3.26 5.653z",
  },
  {
    name: "Microsoft Teams",
    color: "#6264A7",
    bg: "#EEEEFF",
    path: "M19.5 6.5c0 1.38-1.12 2.5-2.5 2.5S14.5 7.88 14.5 6.5 15.62 4 17 4s2.5 1.12 2.5 2.5zM17 10c-1.2 0-2.3.4-3.2 1.1.1.3.2.6.2.9v6H22v-4.5C22 11.6 19.8 10 17 10zm-5.5-4C10.12 6 9 7.12 9 8.5S10.12 11 11.5 11 14 9.88 14 8.5 12.88 6 11.5 6zM7 13c0-.3.1-.6.2-.9C6.3 11.4 5.2 11 4 11c-2.8 0-4 1.6-4 3.5V19h8v-6zm4.5 0c-3.3 0-5.5 1.7-5.5 4.5V20h11v-2.5C17 14.7 14.8 13 11.5 13z",
  },
  {
    name: "Snowflake",
    color: "#29B5E8",
    bg: "#E6F7FD",
    path: "M23.7 13.5l-1.9-1.1 1.9-1.1c.4-.2.5-.7.3-1.1-.2-.4-.7-.5-1.1-.3l-1.9 1.1V8.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2.2l-1.9-1.1c-.4-.2-.9-.1-1.1.3-.2.4-.1.9.3 1.1l1.9 1.1-1.9 1.1c-.4.2-.5.7-.3 1.1.2.4.7.5 1.1.3l1.9-1.1v2.2c0 .5.4.9.9.9s.9-.4.9-.9v-2.2l1.9 1.1c.4.2.9.1 1.1-.3.2-.3.1-.8-.3-1.1zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.2c-5.6 0-10.2-4.6-10.2-10.2S6.4 1.8 12 1.8 22.2 6.4 22.2 12 17.6 22.2 12 22.2zm4.6-8.8l-1.9-1.1 1.9-1.1c.4-.2.5-.7.3-1.1-.2-.4-.7-.5-1.1-.3l-1.9 1.1V8.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2.2l-1.9-1.1c-.4-.2-.9-.1-1.1.3-.2.4-.1.9.3 1.1l1.9 1.1-1.9 1.1c-.4.2-.5.7-.3 1.1.2.4.7.5 1.1.3l1.9-1.1v2.2c0 .5.4.9.9.9s.9-.4.9-.9v-2.2l1.9 1.1c.4.2.9.1 1.1-.3.3-.3.1-.8-.3-1.1z",
  },
  {
    name: "OpenAI",
    color: "#412991",
    bg: "#EDEAF7",
    path: "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.804 19.9a4.5 4.5 0 0 1-6.203-1.596zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z",
  },
  {
    name: "Anthropic",
    color: "#D4703B",
    bg: "#FAF0E9",
    path: "M13.827 3.52h-3.654L5.636 20.08h3.213l.913-2.969h4.476l.913 2.969h3.213zm-3.056 10.948 1.58-5.142 1.58 5.142z",
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    bg: "#EAF0FF",
    path: "M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.258 10.375.516 9.5 1.027a10.805 10.805 0 0 0-.688-.41C7.378-.099 5.818-.244 4.76.185 3.07.87 2.222 2.574 2.056 5.234c-.038.604-.039 1.402.046 2.328a55.756 55.756 0 0 0 .075.72c.24 2.143 1.124 5.247 3.9 5.247.37 0 .77-.07 1.19-.25.4-.17.7-.39.94-.66.49.11 1.03.17 1.61.17 1.28 0 2.36-.35 3.16-.93.23-.17.44-.36.62-.56.09.28.22.54.4.78.8 1.05 2.22 1.47 3.66 1.47.87 0 1.67-.17 2.38-.51.49-.24.9-.57 1.21-.99.17-.23.31-.5.41-.78.35.27.72.51 1.11.7.28.14.56.25.85.33.29.08.57.12.84.12.78 0 1.54-.26 2.16-.72.63-.46 1.11-1.12 1.38-1.89.14-.4.21-.84.21-1.31 0-.82-.27-1.59-.74-2.11.25-.33.45-.7.59-1.09a5.68 5.68 0 0 0 .27-1.7c0-.79-.16-1.53-.48-2.14-.36-.67-.91-1.13-1.57-1.37C22.43.07 21.8 0 21.1 0c-.97 0-1.95.22-2.73.67A7.3 7.3 0 0 0 17.13 0zM12 2.143c.64 0 1.2.09 1.7.27-.38.34-.72.75-.98 1.22-.48.87-.72 1.89-.72 3.01 0 .76.1 1.49.3 2.19-.26.14-.55.25-.85.33-.3.07-.63.1-.98.1-.82 0-1.51-.19-2.03-.55v-.01c.3-.27.51-.62.6-1.02.06-.25.07-.52.04-.8-.01-.1-.02-.22-.03-.35-.09-.7-.42-2.62-1.68-2.62-.21 0-.4.07-.55.2a6.47 6.47 0 0 1 1.42-1.35A5.3 5.3 0 0 1 12 2.143z",
  },
  {
    name: "MuleSoft",
    color: "#00A0DF",
    bg: "#E6F5FD",
    path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.252 4.5h.504a7.752 7.752 0 0 1 7.49 5.76H4.258A7.752 7.752 0 0 1 11.748 4.5zm.504 15a7.754 7.754 0 0 1-7.994-7H19.74a7.752 7.752 0 0 1-7.488 7z",
  },
  {
    name: "Notion",
    color: "#000000",
    bg: "#F5F5F5",
    path: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z",
  },
];

const intRow1 = integrationLogos.slice(0, 7);
const intRow2 = integrationLogos.slice(7);

function IntegrationCard({
  logo,
  size = "md",
}: {
  logo: IntegrationLogo;
  size?: "md" | "sm";
}) {
  const isSmall = size === "sm";
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-border-soft bg-bg-base shadow-sm whitespace-nowrap select-none ${
        isSmall ? "px-4 py-2.5" : "px-5 py-3.5"
      }`}
    >
      {/* Logo icon box */}
      <div
        className={`flex items-center justify-center rounded-xl flex-shrink-0 ${
          isSmall ? "w-8 h-8" : "w-11 h-11"
        }`}
        style={{ backgroundColor: logo.bg }}
      >
        <svg
          viewBox="0 0 24 24"
          fill={logo.color}
          className={isSmall ? "w-4 h-4" : "w-6 h-6"}
          aria-hidden="true"
        >
          <path d={logo.path} />
        </svg>
      </div>
      {/* Name */}
      <span
        className={`font-semibold tracking-wide text-text-primary uppercase ${
          isSmall ? "text-xs" : "text-sm"
        }`}
        style={{ letterSpacing: "0.08em" }}
      >
        {logo.name}
      </span>
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    absolute: "NXπ — The Enterprise AI Operations Platform",
  },
  description:
    "NXπ connects SAP, Salesforce, and every data asset through governed AI agents — with the audit trail your regulators require and the sovereignty your CISO demands.",
};

const stats = [
  {
    value: "40%+",
    label: "of agentic AI projects cancelled by 2027",
    source: "Gartner, poll of 3,400 organisations",
  },
  {
    value: "$8.5B → $35B",
    label: "Agentic AI market, 2026 → 2030",
    source: "Deloitte 2026 TMT Predictions",
  },
  {
    value: "Aug 2, 2026",
    label: "EU AI Act high-risk deadline",
    source: "EU AI Act, Article 113",
  },
  {
    value: "1.7x",
    label: "Average enterprise AI ROI in 12–18 months",
    source: "Industry composite",
  },
  {
    value: "18,500+",
    label: "Salesforce Agentforce deals signed",
    source: "Salesforce, April 2026",
  },
  {
    value: "78%",
    label: "Enterprise AI teams with MCP-backed agents in production",
    source: "CData / MCP Foundation, Q2 2026",
  },
];

const complianceBadges = ["EU AI Act", "SOC 2", "GDPR", "HIPAA", "SOX", "ISO 27001"];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Layer 0: Infrastructure backdrop */}
        <div className="absolute inset-0">
          <Image
            src="/hero-neural-light.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover hero-infra-img"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="hero-infra-scrim" />
        </div>

        {/* Layer 2: WebGL particle field */}
        <HeroSceneWrapper />

        {/* Layer 3: Gradient vignette — theme-aware via CSS */}
        <div className="hero-vignette absolute inset-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1408px] px-5 lg:px-12 py-24 lg:py-32 [&_h1]:!text-white [&_p]:!text-white/80 [&_.text-text-muted]:!text-white/50">
          <FadeIn direction="up" delay={0}>
            <Badge variant="aurora" className="mb-6 gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-1 inline-block" />
              MCP-Native · Model-Agnostic · Self-Hostable
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary max-w-4xl mb-6 leading-[1.05] tracking-tight">
              The AI{" "}
              <span className="font-serif italic text-aurora-1">control plane</span>{" "}
              for the enterprise.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.14}>
            <p id="hero-subhead" className="text-lg lg:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
              NXπ connects SAP, Salesforce, and every data asset through governed agents — with the audit trail your regulators require and the sovereignty your CISO demands.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button size="lg" asChild>
                <Link href="/contact" id="hero-cta-primary">Book an executive briefing</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/architecture" className="flex items-center gap-2">
                  See the architecture <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.26}>
            <div className="flex flex-wrap gap-2">
              {complianceBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border border-border-soft bg-bg-elev-1/60 text-text-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 2: Integration marquee ──────────────────────────────── */}
      <section className="py-20 border-y border-border-soft bg-bg-elev-1/30">
        {/* Heading */}
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12 mb-12 text-center">
          <FadeIn direction="none">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-aurora-1 mb-4">
              Integrations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
              Works with the apps you already use.
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto leading-relaxed">
              NXπ connects to your entire enterprise stack via the Model Context Protocol. No custom code required.
            </p>
          </FadeIn>
        </div>

        {/* Row 1 — prominent logo cards */}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-bg-elev-1/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-bg-elev-1/80 to-transparent" />
          <MarqueeRow
            speed={0.55}
            gap="gap-3"
            items={intRow1.map((logo, i) => (
              <IntegrationCard key={`r1-${i}`} logo={logo} />
            ))}
          />
        </div>

        {/* Row 2 — dimmed, slightly slower */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-bg-elev-1/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-bg-elev-1/80 to-transparent" />
          <MarqueeRow
            speed={0.35}
            gap="gap-3"
            className="opacity-40 grayscale"
            items={intRow2.map((logo, i) => (
              <IntegrationCard key={`r2-${i}`} logo={logo} size="sm" />
            ))}
          />
        </div>
      </section>

      {/* ─── Section 3: The Wedge ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-4">
                  The Wedge
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
                  Every other AI platform assumes a graph.{" "}
                  <span className="font-serif italic text-aurora-1">NXπ does not require the choice.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Copilot Studio assumes productivity. Agentforce assumes the customer graph. Palantir AIP assumes an ontology. Glean assumes knowledge. ServiceNow assumes workflow.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="flex flex-col gap-8">
                <blockquote className="border-l-2 border-aurora-1 pl-6">
                  <p className="text-lg font-serif italic text-text-primary leading-relaxed">
                    "NXπ is the only enterprise AI platform that is MCP-native, model-agnostic, self-hostable, and built for SAP and Salesforce as first-class peers — under one governed control plane."
                  </p>
                </blockquote>

                <ul className="space-y-4">
                  {[
                    {
                      title: "MCP-native from day one",
                      body: "Not an adapter. Not a plugin. MCP is the architectural primitive — every agent, every tool call, every data connection.",
                    },
                    {
                      title: "Model-agnostic by design",
                      body: "Anthropic, OpenAI, Azure, Google, Cohere, Ollama. Swap the model without rewiring the agent. No lock-in.",
                    },
                    {
                      title: "Self-hostable with sovereignty",
                      body: "On-premise, VPC, or hybrid. Your data never leaves your perimeter without explicit, auditable consent.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-aurora-1 flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-text-primary mb-1">{item.title}</p>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Stats row ─────────────────────────────────────────── */}
      <section className="py-20 border-y border-border-soft bg-bg-elev-1/30">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <StatsRow stats={stats} />
        </div>
      </section>

      {/* ─── Section 5: SAP + Salesforce fusion ──────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-elev-1/50 border-y border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-3">
                First-class integration
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-3xl mx-auto leading-tight">
                SAP and Salesforce, finally unified under AI.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SAP column */}
            <FadeIn direction="right" delay={0.05}>
              <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-8 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-aurora-1/15 flex items-center justify-center">
                    <Building2 size={16} className="text-aurora-1" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">SAP Integration</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">
                  The first AI platform purpose-built for SAP.
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Native connectors for SAP HANA Cloud, S/4HANA, BTP, and ECC. MCP tools expose FI, CO, MM, SD, and HR modules as governed agent capabilities. Query financial data in natural language. Every agent action creates a change document.
                </p>
                <ul className="space-y-2">
                  {[
                    "SAP HANA Cloud vector store",
                    "S/4HANA native MCP tools",
                    "BTP integration suite bridge",
                    "ECC legacy connector",
                    "Approval workflow integration",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-tertiary">
                      <span className="h-1 w-1 rounded-full bg-aurora-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/sap"
                  className="flex items-center gap-1.5 text-sm text-aurora-1 hover:text-aurora-2 transition-colors mt-auto"
                >
                  SAP integration details <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            {/* Salesforce column */}
            <FadeIn direction="left" delay={0.1}>
              <div className="rounded-xl border border-border-soft bg-bg-elev-1 p-8 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-aurora-2/15 flex items-center justify-center">
                    <Globe size={16} className="text-aurora-2" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">Salesforce Integration</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">
                  Agentforce extends further when the data layer is complete.
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  NXπ connects Salesforce CRM, Revenue Cloud, and Marketing Cloud to SAP, databases, and knowledge bases via MCP. Salesforce announced native MCP GA in April 2026. NXπ extends that to every system in your stack.
                </p>
                <ul className="space-y-2">
                  {[
                    "Agentforce MCP bridge",
                    "Revenue Cloud integration",
                    "Marketing Cloud data sync",
                    "Salesforce Data Cloud connector",
                    "Cross-system 360° customer view",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-tertiary">
                      <span className="h-1 w-1 rounded-full bg-aurora-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/salesforce"
                  className="flex items-center gap-1.5 text-sm text-aurora-2 hover:text-aurora-1 transition-colors mt-auto"
                >
                  Salesforce integration details <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Section 6: AI Demo Island ──────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-3">Live demo</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary max-w-2xl mx-auto leading-tight">
                See an agent answer a real finance question.
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.08}>
            <div className="max-w-2xl mx-auto">
              <AIDemoIsland />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 7: Testimonial ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border-soft">
        <div className="mx-auto max-w-[1408px] px-5 lg:px-12">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote>
                <p className="text-3xl lg:text-4xl font-serif italic text-text-primary leading-relaxed mb-8">
                  "AI that survives an audit, a board meeting, and August 2, 2026."
                </p>
              </blockquote>
              <p className="text-sm text-text-muted">
                The NXπ promise — measurable AI ROI with full regulatory compliance from day one.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 8: CTA band ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden border-t border-border-soft">
        <MeshBackdrop intensity="medium" className="absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-[1408px] px-5 lg:px-12 text-center">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted mb-4">
              Get started
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary max-w-2xl mx-auto leading-tight mb-6">
              The AI control plane your enterprise has been waiting for.
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
              Connect your SAP, Salesforce, and every data asset. Deploy governed agents. Close the ROI gap before the board asks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book an executive briefing</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/architecture" className="flex items-center gap-2">
                  See the architecture <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* JSON-LD: Product schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema()) }}
      />

      {/* UTM Personalizer */}
      <Suspense fallback={null}>
        <UTMPersonalizer />
      </Suspense>
    </div>
  );
}
