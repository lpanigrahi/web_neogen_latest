# NXπ Website — Claude Code Build Prompt

> **Mission for Claude Code:** Build the most innovative, beautiful, and category-defining AI product website on the open web for **NXπ — The Enterprise AI Operations Platform**. The site must rival Linear, Vercel, Anthropic, Stripe, and Arc Browser in craft, motion, and clarity — and beat every enterprise AI competitor (Glean, Writer, Agentforce, Copilot Studio, Palantir AIP, ServiceNow + Moveworks) in narrative sharpness and technical credibility.

This is a single‑file Claude Code build brief. Treat every section as binding. Do **not** skip the animation/interaction spec — it is the difference between a landing page and a category‑defining site.

---

## 0. How to use this prompt

You are Claude Code, working in an empty repository. Your job:

1. Read this entire file before writing a single line of code.
2. Initialize a Next.js 15 (App Router, TypeScript, Tailwind v4) project at the repo root.
3. Build the site to the spec below.
4. Ship a production‑ready build that passes the acceptance criteria in **§14**.

**Tone of work:**
- No filler. Every section must earn its pixel.
- Pixel‑level craft. If a margin looks wrong, fix it.
- No emoji in UI. No exclamation points. No “amazing”/“revolutionary” copy. Confident, calm, declarative voice.
- Accessibility is not optional. WCAG 2.2 AA minimum.
- Performance is not optional. Lighthouse ≥ 95 / 95 / 100 / 100 (perf/a11y/bp/seo) on desktop and ≥ 90 on mobile.

**Project files to read for context** (assumed colocated in `/brief` at repo root):
- `brief/NXpi-PRD_Draft.docx` — the canonical PRD (CXO Strategic Edition, March 25 2026).
- `brief/NXpi-Northstar.md` — north‑star narrative (optional; derive from PRD §1 if absent).
- `brief/NXpi-Why-We-Exist.md` — purpose narrative (optional; derive from PRD §1.1–1.3 if absent).
- `brief/NXpi-Website-Copy.docx` — the previously produced website content brief.

If any of the above are missing, generate equivalent content from the PRD and the research baked into this prompt (§4 and §13).

---

## 1. Product summary (for narrative grounding)

**NXπ** (pronounced *“en-ex-pi”*) is the enterprise AI operations platform. It is the single governed control plane that connects every enterprise data source — SAP, Salesforce, SQL and NoSQL databases, structured and unstructured data — through Model Context Protocol (MCP), and exposes that connected substrate as governed AI agents, hybrid RAG, and visual workflow automation.

**The wedge.** Every major rival assumes one graph: Copilot Studio assumes productivity, Agentforce assumes the customer graph, Palantir AIP assumes an ontology, Glean assumes knowledge, ServiceNow + Moveworks assume the workflow graph. **NXπ does not require the choice.** It is the only enterprise AI platform that is **MCP‑native, model‑agnostic, self‑hostable, and built for SAP + Salesforce as first‑class peers — under one governed control plane.**

**Audience.** CXOs (CEO, CTO/CIO, CFO, CISO, CDO, COO, CRO/CMO), technical buyers (platform architects, AI/ML leaders), and the engineering teams who will operate the platform.

**Promise to the buyer.** AI that survives an audit, a board meeting, and August 2, 2026 (the EU AI Act high‑risk deadline).

---

## 2. North Star & Voice

### 2.1 North Star
> *To become the single AI control plane for the enterprise — connecting SAP, Salesforce, and every data asset through governed AI agents and automated workflows that deliver measurable business outcomes with full regulatory compliance.*

### 2.2 Why we exist (manifesto)
> AI is no longer optional. But fragmented tools, disconnected data, and inadequate governance are blocking measurable ROI for 85% of enterprises. The market will hit **$8.5B in 2026 and $35B by 2030** — and Gartner predicts **over 40% of agentic AI projects will be cancelled by 2027** because the cost, value, and risk story never closes. We exist to close it. NXπ is the platform where AI meets your real business — every system connected, every decision logged, every dollar measurable.

### 2.3 Brand voice
- **Calm authority.** We do not hype. The market has enough hype.
- **Declarative.** Short sentences. Active voice. Nouns that do work.
- **Specific.** Names of systems, names of standards, named numbers. Concrete > clever.
- **Confident, never aggressive.** We do not punch down at competitors. We define the category.

### 2.4 Voice rules (enforce in every line of copy)
- Never: “amazing,” “revolutionary,” “game‑changing,” “seamless,” “unleash,” “supercharge,” “powered by AI.”
- Use: “governed,” “grounded,” “connected,” “portable,” “sovereign,” “auditable,” “MCP‑native.”
- One thought per sentence. Average sentence length 12–18 words.
- Numbers earn trust. Use real ones from §13 only.

---

## 3. Target competitive ceiling

Aim to feel as **crafted** as these references (do not copy — exceed):

- **linear.app** — type, restraint, micro‑interactions, depth of dark theme.
- **vercel.com** — bento sections, gradients, scroll‑linked product reveals.
- **anthropic.com** — typographic confidence, generous whitespace, serif accents.
- **arc.net** — playfulness without losing enterprise credibility.
- **stripe.com** — feature grids, scroll storytelling, code blocks that breathe.
- **modelcontextprotocol.io** — minimal, technically credible.

Beat these directly on positioning and narrative:

- **glean.com** — they own “knowledge graph beneath the interface.” We own “AI control plane across every graph.”
- **writer.com** — they own “agent skills + Palmyra LLMs.” We own “model‑agnostic, MCP‑native, self‑hostable.”
- **salesforce.com/agentforce** — they own the customer graph. We own the cross‑system fusion.
- **microsoft.com/copilot** — they own the productivity graph. We own the data‑sovereign deployment.

---

## 4. Research & evidence (use these and only these numbers in copy)

These are pre‑validated. Do not invent new statistics. Cite source in `data-source` attributes or footnotes where appropriate.

| Claim | Source |
|---|---|
| Agentic AI market $8.5B (2026) → $35B (2030); could reach $45B with orchestration | Deloitte 2026 TMT Predictions |
| Over 40% of agentic AI projects cancelled by end 2027 | Gartner, June 25, 2025 (poll of 3,400 orgs) |
| EU AI Act high‑risk system compliance deadline: August 2, 2026 | EU AI Act, Article 113 |
| 78% of enterprise AI teams have ≥1 MCP‑backed agent in production (Q2 2026) | CData / MCP Foundation |
| 17,468+ MCP servers indexed (Q1 2026); 97M+ monthly SDK downloads | Anthropic / MCP registry census |
| Salesforce Agentforce: 18,500+ deals, native MCP GA April 2026 | Salesforce |
| SAP: Joule Studio GA Q1 2026; HANA Cloud MCP support Q1 2026 | SAP news.sap.com |
| Hybrid RAG with RRF: recall@10 jumps 65–78% → 91%+ vs vector‑only | RAG benchmarking literature 2026 |
| Average enterprise AI ROI: 1.7x in 12–18 months; 26–31% cost savings | Industry benchmark composite |

---

## 5. Tech Stack (binding)

### 5.1 Framework
- **Next.js 15** (App Router, RSC, Server Actions where useful).
- **React 19**.
- **TypeScript 5.5+** in strict mode. `noUncheckedIndexedAccess: true`.
- **Tailwind CSS v4** (`@tailwindcss/postcss`, native CSS variables).
- **Node 20 LTS** target.

### 5.2 UI & components
- **shadcn/ui** (latest), customized to the NXπ design system (do not ship default colors).
- **Radix UI primitives** for any custom dialog/menu/tooltip/popover.
- **lucide-react** for icons (no other icon set — uniformity).
- **next/font** with **Geist Sans** (UI) and **Geist Mono** (code), plus **Instrument Serif** for editorial accents in hero and section openers.

### 5.3 Motion
- **Framer Motion** (`motion` package) for component‑level animation.
- **GSAP** + **ScrollTrigger** for scroll‑linked storytelling.
- **Lenis** for smooth scroll (disable on `prefers-reduced-motion`).
- **React Three Fiber** + **@react-three/drei** + **@react-three/postprocessing** for the hero WebGL canvas.
- **motion-canvas** is *not* required.

### 5.4 Content & SEO
- **MDX** for blog/changelog/docs (use `@next/mdx` + `rehype-pretty-code` with `shiki`).
- **next-sitemap** for sitemap + robots.
- **schema.org** JSON‑LD: `Organization`, `Product`, `SoftwareApplication`, `FAQPage`, `BreadcrumbList`, `Article`.
- **Open Graph** and Twitter cards on every route (use `next/og` for dynamic OG images).

### 5.5 Forms / lead capture
- **react-hook-form** + **zod** for validation.
- **Server Action** POSTs to a stubbed `/api/leads` (TODO: integrate HubSpot/Marketo).
- Honeypot + Turnstile/hCaptcha for spam protection.

### 5.6 Analytics & observability (stub but wire)
- **Vercel Analytics** + **Speed Insights** (stubbed; behind env var).
- **PostHog** stub for product analytics events.
- Cookie‑less consent banner that respects DNT and GPC.

### 5.7 Tooling
- **pnpm** as package manager. Lockfile checked in.
- **ESLint** (`@typescript-eslint`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y`).
- **Prettier** with Tailwind plugin.
- **Husky** + **lint-staged** pre‑commit.
- **Playwright** for E2E smoke tests on every page.
- **Vitest** + React Testing Library for components.
- **Storybook 8** with `@storybook/test`.

### 5.8 Deployment
- **Vercel** target (primary).
- Provide **Dockerfile** for self‑hosted deployment as a secondary target (matches NXπ's own self‑hosted ethos).
- Set up **GitHub Actions**: typecheck, lint, test, build on every PR.

---

## 6. Design System

### 6.1 Color tokens (Tailwind theme + CSS vars)

```
--bg-base:     #050914       /* deep ink, default dark */
--bg-elev-1:   #0B1124
--bg-elev-2:   #131A30
--surface:     #1A2240
--border:      #1F2A48
--border-soft: rgba(255,255,255,0.06)

--text-primary:   #F4F6FB
--text-secondary: #B9C2D8
--text-tertiary:  #7A88AC
--text-muted:     #51607F

--accent-aurora-1: #5B8DEF   /* electric blue */
--accent-aurora-2: #4ADEDE   /* cyan glow      */
--accent-aurora-3: #9D7CFF   /* royal violet   */
--accent-aurora-4: #FF7AB6   /* hot magenta accent (sparingly) */
--accent-amber:    #FFB547   /* warning / highlight */
--accent-green:    #5DD39E   /* success / live status */

--gradient-primary:   linear-gradient(135deg, #5B8DEF 0%, #9D7CFF 50%, #4ADEDE 100%);
--gradient-aurora:    radial-gradient(ellipse at top, rgba(91,141,239,0.35), transparent 60%),
                      radial-gradient(ellipse at bottom right, rgba(157,124,255,0.25), transparent 60%);
--gradient-mesh:      use SVG/Canvas mesh in §9.1.
```

Light mode is **opt‑in**, not the default. Default theme is dark. Light theme uses inverted neutrals with the same accents.

### 6.2 Typography

- **Display / hero:** Geist Sans, weights 500–700, tight tracking (`-0.04em` on display sizes).
- **Editorial accents:** Instrument Serif, italic, for one‑sentence section openers and pull quotes.
- **Body:** Geist Sans 400, line‑height 1.55, `text-balance` on headings.
- **Code:** Geist Mono.

Type scale (rem):

```
display-1:  6.5  / 1.0   tracking -0.045em
display-2:  4.5  / 1.02  tracking -0.04em
display-3:  3.25 / 1.05  tracking -0.035em
h1:         2.5  / 1.1
h2:         2.0  / 1.15
h3:         1.5  / 1.2
h4:         1.25 / 1.3
body-lg:    1.125/ 1.55
body:       1.0  / 1.55
body-sm:    0.875/ 1.5
eyebrow:    0.75 / 1.0   uppercase tracking 0.16em
mono-sm:    0.8125 / 1.4
```

### 6.3 Spacing, radius, shadow

- 4‑pt base scale. Tailwind default plus `13`, `15`, `30`, `34`.
- Radii: `--r-sm: 6px`, `--r-md: 10px`, `--r-lg: 16px`, `--r-xl: 24px`, `--r-2xl: 32px`, `--r-pill: 999px`.
- Shadows: 4 elevation levels using layered low‑opacity rgba(5,9,20). No black drop shadows.
- Borders are usually `1px solid var(--border-soft)`, never pure white.

### 6.4 Iconography & illustration
- lucide‑react only.
- Custom logo glyph: lowercase `π` formed by two MCP “rails” intersecting — see §11.
- Illustrations are **wireframe‑style** (1.5px stroke, accent gradients) rather than blobby vectors.

### 6.5 Layout grid
- 12 col, 96px max‑gutter, 1408px content max‑width.
- Mobile: single column, 20px side padding.
- Sections breathe: 160–200px vertical rhythm between major sections on desktop; 96px on mobile.

### 6.6 Cursor & focus
- Custom cursor on `pointer-fine` devices: a 6px dot with a 28px ring that magnetic‑snaps to interactive elements (Linear‑style).
- Focus ring: 2px solid `--accent-aurora-2`, 4px offset. Always visible.

---

## 7. Motion principles

1. **Motion is meaning.** Every animation explains a relationship (parent → child, before → after, connected → disconnected). Decorative animation is forbidden.
2. **Spring, not ease.** Default: `spring(stiffness: 220, damping: 28)`. Avoid linear unless physical.
3. **Choreograph.** Sibling elements stagger 40–80ms. Never burst all at once.
4. **Respect rest.** Every animation has a clear end state. No infinite loops except status indicators.
5. **Reduced motion.** `prefers-reduced-motion: reduce` cuts all non‑essential motion to fades ≤ 150ms. Required.
6. **60 FPS minimum.** Animate transform + opacity only. No layout animations on scroll.

---

## 8. Information Architecture

```
/                         Home (the manifesto + product surface tour)
/platform                 Platform overview (six pillars)
/platform/mcp-fabric      Pillar 1
/platform/orchestration   Pillar 2 — multi-agent orchestration
/platform/rag             Pillar 3 — hybrid RAG knowledge runtime
/platform/workflows       Pillar 4 — visual workflow automation
/platform/data-layer      Pillar 5 — unified data layer
/platform/governance      Pillar 6 — zero-trust governance

/solutions                Solutions hub
/solutions/sap            NXπ for SAP
/solutions/salesforce     NXπ for Salesforce
/solutions/fusion         NXπ for SAP + Salesforce Fusion

/solutions/role/ceo
/solutions/role/cto-cio
/solutions/role/cfo
/solutions/role/ciso
/solutions/role/cdo
/solutions/role/coo
/solutions/role/cro-cmo

/solutions/industry/financial-services
/solutions/industry/healthcare
/solutions/industry/public-sector
/solutions/industry/manufacturing
/solutions/industry/technology

/architecture             Technical architecture (4-layer + deployment)
/security                 Trust center: compliance, audit, deployment
/integrations             Integration grid (MCP servers + connectors)
/pricing                  Tiered pricing + token economics
/customers                Logos, case studies, quotes (stubbed)
/changelog                MDX-driven release log
/blog                     MDX blog index + posts (3 seed posts)
/about                    Company, leadership, principles, careers stub
/contact                  Contact form + offices
/legal/privacy
/legal/terms
/legal/dpa
/legal/ai-act-readiness   EU AI Act readiness summary
/manifest.webmanifest
/sitemap.xml
/robots.txt
```

Every page must have a unique `<title>`, meta description, OG image, JSON‑LD, and an explicit primary CTA + secondary CTA.

---

## 9. Page-by-page specification

### 9.1 Home — `/`

**Goal:** Convert a busy CXO and a skeptical technical buyer in 90 seconds.

**Sections (in order):**

1. **Nav** — sticky, glass‑morphism (`backdrop-blur-xl`), shows brand + nav links + “Book a briefing” primary CTA. Collapses to centered logo + hamburger on scroll past hero. Mobile: full‑screen overlay menu with stagger.

2. **Hero** — full‑viewport.
   - **Background:** custom **WebGL mesh** rendered in R3F. It is a slow‑drifting field of luminous nodes connected by curved edges that form the letter **π**. On scroll, the mesh recomposes from an explosive cloud (representing fragmented enterprise data) into a single ordered lattice (representing NXπ). Shader: custom GLSL noise + bloom postprocessing.
   - **Eyebrow:** `THE AI CONTROL PLANE FOR THE ENTERPRISE`
   - **Headline (Instrument Serif italic accent on “control plane”):**
     > **The AI control plane**
     > *for the enterprise.*
   - **Subhead:** “NXπ connects SAP, Salesforce, and every data asset through governed agents — with the audit trail your regulators require and the sovereignty your CISO demands.”
   - **CTAs:** `Book an executive briefing` (primary, gradient bg) + `See the architecture` (ghost, magnetic hover).
   - **Floating product peek:** a translucent card to the right showing a live‑looking NXπ console (agent run + token counter + governance badge). Implemented as static React but animated with shimmer and a typing‑caret effect.
   - **Down‑indicator:** a thin animated chevron with `whileInView` fade‑in.

3. **Trust strip** — “Built for the regulated enterprise.” Horizontal marquee of compliance badges (EU AI Act, SOC 2, GDPR, HIPAA, SOX, ISO 27001) and 10–14 mono‑style enterprise tech logos (SAP, Salesforce, MuleSoft, PostgreSQL, Snowflake, Databricks, MongoDB, Kafka, Anthropic, OpenAI, Google, Microsoft, Ollama, Cohere). Animated with a smooth `requestAnimationFrame` translateX (not CSS animation — needs pause on hover).

4. **The wedge** — a two‑column section:
   - Left: an **animated SVG diagram** that morphs through five labels — “The productivity graph (Copilot)” → “The customer graph (Agentforce)” → “The ontology (Palantir)” → “The knowledge graph (Glean)” → “The workflow graph (ServiceNow)” — then collapses into one centered hub labeled **NXπ**.
   - Right: the manifesto from §2.2, with an editorial pull‑quote.

5. **Stats row** — six stat cards with count‑up animation on `whileInView`:
   - `$8.5B → $35B` — Agentic AI market 2026 → 2030 (Deloitte).
   - `40%` — of agentic AI projects cancelled by 2027 (Gartner).
   - `Aug 2, 2026` — EU AI Act high‑risk deadline.
   - `78%` — of enterprise AI teams have ≥1 MCP‑backed agent in production.
   - `18,500+` — Salesforce Agentforce deals signed.
   - `1.7x` — average enterprise AI ROI in 12–18 months.

6. **The six pillars (bento)** — a 6‑card bento grid, **asymmetric**, with each card having:
   - An inline interactive **micro‑demo** (see §10).
   - Eyebrow, title, one‑sentence body, three bullets.
   - On hover, the card lifts (transform: translateY(-4px)), gradient border lights up, and the demo animates.
   - Cards: MCP Integration Fabric, Multi‑Agent Orchestration, Hybrid RAG, Workflow Automation, Unified Data Layer, Zero‑Trust Governance.

7. **SAP + Salesforce fusion showcase** — a horizontal scroll‑pinned section using GSAP ScrollTrigger. Three frames pin in sequence:
   - Frame 1: an SAP S/4HANA tile lit up with a financial close pipeline drawing itself across the screen.
   - Frame 2: a Salesforce Opportunity record lit up with predictive deal scoring overlaying.
   - Frame 3: both merge into a single executive briefing card that types out a generated CXO summary.

8. **Live architecture diagram** — an interactive 4‑layer architecture (Client / API / AI Core / Data & Storage). User hovers a layer; it expands; companion text on the right swaps in. Built with Framer Motion + shared layout animations.

9. **Solutions teaser** — three tabs: By Role / By System / By Industry. Each tab reveals a 3×2 grid of solution cards with destination links. Tabs animate underline.

10. **Compliance & deployment strip** — bold, calm statement: “EU AI Act. SOC 2. GDPR. HIPAA. SOX.” Beside it, three deployment chips: Self‑hosted · Private cloud · Hybrid. Each chip opens a side panel with details.

11. **Testimonial / pull‑quote** — single large Instrument Serif italic quote in the center, attributed to a placeholder CIO. (TODO: real customer.)

12. **CTA band** — gradient mesh background. Two CTAs: `Book an executive briefing` + `Read the SAP + Salesforce reference architecture`.

13. **Footer** — multi‑column site map, status indicator (live pulsing dot if `/status` returns 200), newsletter form, social, language switcher (en, de, ja, ko, fr — i18n stub), copyright, security@nxpi.ai mailto.

### 9.2 Platform overview — `/platform`

- Hero: short, declarative. “Six pillars. One platform. Every system, one protocol.”
- Six pillar cards, full‑width, each linking to its own page. Use the same micro‑demo language as the home bento.
- Architecture deep‑link, deployment deep‑link, security deep‑link at the bottom.

### 9.3 Each Pillar page — `/platform/{pillar}`

Standard template:

1. Hero: pillar name + one‑sentence promise + a single CTA.
2. **Interactive demo** appropriate to the pillar (see §10 for each).
3. “What it does” — three‑column outcomes.
4. “How it works” — annotated screenshot or diagram with hotspots.
5. “For who” — three role chips with quoted outcomes from §13.
6. “Proof points” — numbered list of capabilities.
7. Adjacent pillars (cross‑sell carousel).
8. CTA band.

### 9.4 Solutions hub — `/solutions`

- Hero with tabs: Role / System / Industry.
- Each tab is a grid of cards. Cards animate in with stagger.
- Each card: eyebrow, title, one‑line value statement, top three outcomes, link.

### 9.5 SAP, Salesforce, Fusion pages

Use the by‑system copy in §12.2. Each page must include:
- A scroll‑pinned “use case sequence” (3–5 use cases auto‑advance as the user scrolls).
- A signature outcome stat (e.g., “40–60% reduction in close cycle time”).
- A “Why NXπ wins for [system]‑led enterprises” callout box.

### 9.6 CXO Role pages — `/solutions/role/*`

Use copy from §12.3. Each page:
- Hero with the role and the one‑line outcome they own.
- Three signature outcomes (large stat cards).
- Three use cases (mini case studies, even if stubbed).
- A targeted CTA: e.g., CFO page → “Download the AI ROI framework.”

### 9.7 Industry pages — `/solutions/industry/*`

Use copy from §12.4. Each page leads with the regulatory pressure of that industry, then the proof.

### 9.8 Architecture — `/architecture`

- Interactive layer diagram (the home version, extended).
- Per‑layer deep dive (tech stack table from §13 in the prior brief).
- Deployment matrix (self‑hosted / private cloud / hybrid).
- Database schema overview (8 functional domains).

### 9.9 Security / Trust — `/security`

- A serious, calm page.
- Compliance grid with badges.
- Audit log architecture explainer.
- Subprocessors table (placeholder).
- DPA + security disclosure links.
- Bug bounty / vuln disclosure section.

### 9.10 Integrations — `/integrations`

- Searchable, filterable grid (search by name, filter by category: ERP, CRM, DB, Cloud, LLM, Tools).
- 60–80 stubbed integrations with logos and short descriptions.
- “Connect any MCP server” callout with code example.

### 9.11 Pricing — `/pricing`

- Three tiers: Team / Business / Enterprise. **Plus** an explicit "Self‑hosted" call‑out.
- Toggle: Monthly / Annual / Token‑based.
- A live **ROI calculator** widget (input: # of knowledge workers, current AI tool spend, # of business processes) → outputs projected annual savings using the formula from PRD §9.1.

### 9.12 Customers / Case studies — `/customers`

- Stub three case studies with placeholder logos and quotes; structured like Stripe’s case study template.

### 9.13 Changelog — `/changelog`

- MDX route. Seed with three entries that match PRD phase milestones.

### 9.14 Blog — `/blog`

- MDX index. Seed posts:
  1. “Why every enterprise AI platform assumes a graph — and what we built instead.”
  2. “Hybrid RAG is not a search feature. It is a knowledge runtime.”
  3. “August 2, 2026: what the EU AI Act high‑risk deadline actually requires.”

### 9.15 About — `/about`

- Manifesto, principles (five), placeholder leadership, careers teaser, press kit.

### 9.16 Contact — `/contact`

- Form with email, company, role, intent (briefing / demo / partner / press / security).
- Validation via zod. Submit to `/api/leads` stub. Success state with a confetti‑free, calm confirmation.

### 9.17 Legal — `/legal/*`

- Privacy, Terms, DPA, AI Act readiness. Use placeholder boilerplate clearly marked `TODO: legal review`.

---

## 10. Interactive micro‑demos (one per pillar)

These are the soul of the site. Each is a small, performant, **real‑feeling** component embedded in the relevant page. None require a backend.

### 10.1 MCP Fabric demo
A 3D network where 10 system nodes (SAP HANA, S/4HANA, Salesforce, MuleSoft, Snowflake, MongoDB, Neo4j, PostgreSQL, Redis, S3) pulse with traffic. Hover a node to spotlight its MCP capabilities in a tooltip. Built with R3F. Performance budget: ≤ 80 draw calls.

### 10.2 Orchestration demo
A draggable mini‑canvas with three pre‑placed agent nodes (SAP Agent, Salesforce Agent, Merger). Click `Run`. A token counter ticks up. A call tree expands on the right. Real timing: ~3 seconds of simulated work with realistic console output (use a fixed scripted timeline, not a real LLM call).

### 10.3 Hybrid RAG demo
A search box pre‑populated with “Q3 sales pipeline reconciliation against SAP billing.” On submit: two columns animate in — “Vector matches (semantic)” and “BM25 matches (keyword)”. A third column merges them via RRF with a small animated equation. Final answer card appears with source attribution chips.

### 10.4 Workflow builder demo
A miniature XYFlow canvas with 6 nodes connected as a DAG (Cron → SAP Tool → LLM → Condition → Salesforce Tool → Output). Click `Play`. Nodes light up in execution order. Per‑node duration appears.

### 10.5 Unified Data Layer demo
A horizontal bar showing 7 data categories (Relational, Document, Key‑Value, Graph, Vector, Files, Streams). Hover each → a sample query in the relevant query language renders below (SQL, MongoDB aggregation, Cypher, vector cosine, etc.). Use shiki for syntax highlighting.

### 10.6 Governance demo
A “permission matrix” component. Y‑axis: roles. X‑axis: dimensions (Models, MCP Servers, Tools, Data Scopes). Cells animate green / amber / red. Toggle a role to see policies update in real‑time. Below: a live audit log feed that emits a new entry every 2 seconds (fixture data).

---

## 11. The π logo / mark

Design a custom mark. The lowercase `π` is formed by two horizontal rails that represent MCP transport (SSE + WebSocket) intersecting two vertical legs that represent the two enterprise systems NXπ treats as peers (SAP + Salesforce). The rails should have a subtle gradient from `--accent-aurora-1` to `--accent-aurora-3`.

Deliver as an inline SVG component (`<Mark />`) with the brand name `NXπ` set in Geist Sans 600.

Favicon set: 16, 32, 180, 512. Maskable variant included.

---

## 12. Content — full copy to use verbatim

### 12.1 Home hero variants (pick #1 default, support A/B via env flag)

1. **The AI control plane for the enterprise.** *NXπ connects SAP, Salesforce, and every data asset through governed agents — with the audit trail your regulators require and the sovereignty your CISO demands.*
2. **One platform. Every agent. Every data source. Every decision logged.** *NXπ is the MCP‑native AI operations layer for the regulated enterprise.*
3. **Stop building AI on top of one graph.** *NXπ is vendor‑neutral, MCP‑native, and self‑hostable — so your agents act across SAP, Salesforce, and your data warehouse without lock‑in.*

### 12.2 By‑system pages

**SAP page lead:** *Where SAP HANA Cloud meets the open Model Context Protocol. Where Joule extends to every model.*
Body: SAP went generally available with Joule Studio in Q1 2026 and added full MCP support for HANA Cloud the same quarter. NXπ is a first‑class MCP host — the most natural way to extend Joule with model choice, RAG, multi‑agent orchestration, and the governance Joule does not yet provide on its own.

Use cases table (verbatim):

| Use case | CXO Sponsor | Outcome |
|---|---|---|
| Financial Close Acceleration | CFO | 40–60% reduction in close cycle time. |
| Procurement Intelligence | COO / CPO | 15–25% procurement savings. |
| Supply Chain Risk Detection | COO | Real‑time risk detection vs weekly batch. |
| HANA Data Exploration | CDO | 80% reduction in ad‑hoc BI request backlog. |
| S/4HANA Migration Planning | CTO | 50–70% faster migration assessment. |

**Salesforce page lead:** *Agentforce is the agent. NXπ is the control plane around it.*

| Use case | CXO Sponsor | Outcome |
|---|---|---|
| Customer 360 Intelligence | CRO / CMO | 30–50% improvement in retention. |
| Predictive Deal Scoring | CRO | 25% lift in win rates. |
| Service Case Automation | COO / CXO | 60–70% first‑response automation. |
| Marketing Campaign ROI | CMO | Real‑time campaign optimization. |
| Revenue Forecasting | CFO | 15–20% forecast accuracy lift. |

**Fusion page lead:** *The ROI lives in the join.*
Body: Every CXO knows it. The single most valuable AI use case in the enterprise is not inside SAP or inside Salesforce — it is the join between them. Revenue you cannot recognize until the order ships. Pipeline you cannot trust until you reconcile against billing. Customers you cannot retain until support, sales, and operations see the same picture.

### 12.3 CXO role pages — verbatim

- **CEO — Strategic AI Consolidation.** *Replace three to five point AI tools with one governed control plane.* Outcomes: 3–15% revenue impact; time‑to‑value under 30 minutes; executive briefing automation across 5+ data sources daily.
- **CTO / CIO — End the Tool Sprawl.** *One platform. Ten LLM providers. Forty models. 114+ API endpoints.* Outcomes: $200K–$500K license savings; 99.9% uptime with provider failover; 80% self‑service agent creation.
- **CFO — Transparent Token Economics.** *Every prompt costed. Every agent budgeted. Every ROI dollar measurable.* Outcomes: 1.7x average ROI in 12–18 months; <15% token overhead vs direct API; chargeback dashboard.
- **CISO — Zero‑Trust by Default.** *EU AI Act‑ready. SOC 2‑aligned. 100% action auditability.* Outcomes: 100% high‑risk EU AI Act requirements met by Aug 2 2026; per‑user MCP scoping; cross‑system audit correlation.
- **CDO — One Data Fabric, Every Source.** *Real‑time SAP. Real‑time Salesforce. Hybrid RAG. Sub‑200ms search.* Outcomes: 80% reduction in BI backlog; 91%+ retrieval recall; cross‑source joins.
- **COO — Process Automation at Enterprise Scale.** *Visual workflows, cron schedules, webhook triggers, DAG execution.* Outcomes: 30–50% manual process time reduction; 60–70% first‑response automation; 90% data quality auto‑resolution.
- **CRO / CMO — Customer Intelligence as a Runtime.** *SAP order history + Salesforce CRM + market signals + your knowledge base — fused.* Outcomes: 30–50% retention lift; 25% win‑rate lift; 15–20% forecast accuracy lift.

### 12.4 Industry pages — leads only (expand bodies from §13 of prior brief)

- **Financial Services:** *AI that survives an audit — and a board meeting.*
- **Healthcare & Life Sciences:** *HIPAA‑ready AI that never leaves your perimeter.*
- **Public Sector & Defense:** *AI sovereignty without the IT compromise.*
- **Manufacturing & Supply Chain:** *SAP at the core. AI across the chain.*
- **Technology & Software:** *The AI control plane for the AI‑native enterprise.*

### 12.5 Pull‑quotes (sprinkle throughout site)

- *“NXπ is the only enterprise AI platform that treats SAP and Salesforce as first‑class peers under one MCP‑native control plane.”*
- *“Every other AI platform makes you choose a graph. NXπ does not require the choice.”*
- *“AI that survives an audit, a board meeting, and August 2, 2026.”*
- *“Bring AI to your data. Keep your data where it lives.”*

### 12.6 Footer micro‑copy
- Status: a live dot + the words `All systems governed` (link to `/status`).
- Tagline above social: *Built for the regulated enterprise.*

---

## 13. Reusable components to build

All under `/components/ui/` (primitives) and `/components/site/` (composed).

Primitives (extend shadcn):
- `<Button>` — variants: `primary | ghost | secondary | link`. Sizes: `sm | md | lg`. Supports `magnetic` prop (cursor magnet effect).
- `<Chip>` — pill with optional dot indicator.
- `<Badge>` — for compliance / status.
- `<Card>` — surface with optional gradient border (`variant="aurora"`).
- `<Tabs>`, `<Dialog>`, `<Tooltip>`, `<Popover>`, `<Sheet>`, `<Toast>` — Radix‑powered.

Site composites:
- `<Nav>` — sticky glass nav with mega‑menu for Platform and Solutions.
- `<Hero>` — slot‑based, with `EditorialAccent` and `MagneticCTA`.
- `<StatCounter>` — count‑up on view, with prefix/suffix/decimals.
- `<MarqueeRow>` — paused on hover, two speeds (logos/badges).
- `<BentoGrid>` — 6/8/12 cell variants.
- `<PillarCard>` — used in bento and pillar pages.
- `<UseCaseTable>` — semantic table with row hover details.
- `<CalloutBox>` — quote/callout with left accent rail.
- `<ScrollPin>` — wraps GSAP ScrollTrigger pinning.
- `<RoleSwitcher>` — used on Solutions hub.
- `<ROICalculator>` — pricing page.
- `<AuditLogFeed>` — ticker of audit lines for the governance demo.
- `<CodeBlock>` — shiki‑highlighted, copy button, language label.
- `<ArchitectureDiagram>` — interactive 4‑layer.
- `<NetworkGraph>` — R3F MCP network demo.
- `<WorkflowCanvas>` — XYFlow mini canvas.
- `<MeshBackdrop>` — animated mesh/aurora background, used in hero + CTA bands.
- `<CustomCursor>` — global, mounted at root.
- `<NoiseOverlay>` — 4% noise SVG overlay for film‑grain texture on hero.

---

## 14. Acceptance criteria (must all pass)

- [ ] `pnpm build` succeeds with zero warnings.
- [ ] `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm e2e` all green.
- [ ] Lighthouse desktop ≥ 95/95/100/100 on `/`, `/platform`, `/solutions/sap`.
- [ ] Lighthouse mobile ≥ 90/95/100/100 on the same routes.
- [ ] LCP < 1.8s on `/` over Fast 3G in Lighthouse mobile.
- [ ] CLS < 0.05 on every page.
- [ ] All interactive elements keyboard‑navigable. Tab order matches visual order.
- [ ] All images have alt text. All SVGs that convey meaning have `<title>` and `role="img"`.
- [ ] Color contrast ≥ 4.5:1 on body text, ≥ 3:1 on large text.
- [ ] `prefers-reduced-motion: reduce` disables WebGL hero, GSAP scroll pins, marquee, and any non‑fade animation.
- [ ] No layout shift when fonts load (use `font-display: swap` + size‑adjust).
- [ ] Sitemap, robots, OG images, JSON‑LD all valid (Schema.org validator + Open Graph Debugger).
- [ ] Open Graph image generated per‑route via `next/og` with brand mark and route title.
- [ ] All form fields have visible labels, error messages tied via `aria-describedby`.
- [ ] Live region for audit log feed uses `aria-live="polite"` with throttling.
- [ ] No console errors in production build.
- [ ] No use of `any` in TypeScript outside generated types.
- [ ] Bundle: home route initial JS ≤ 180 KB gzipped (excluding the lazy‑loaded R3F chunk).
- [ ] R3F hero is **dynamic‑imported** and code‑split. Fallback is a CSS gradient.
- [ ] Works without JavaScript: at least the hero copy, nav, footer, and CTAs render server‑side and are clickable.
- [ ] Every route has unique title + description; no duplicates.
- [ ] Dark theme is default; light theme works on every page; theme persists in localStorage and respects `prefers-color-scheme`.

---

## 15. Stretch / “wow” features (build if time allows)

1. **Cmd+K command palette** that lets visitors jump to any page, search content, and trigger “Book a briefing.” (Use `cmdk`.)
2. **AI demo island.** A small chat input on `/` that, given a query like “forecast Q3 revenue,” simulates the SAP+Salesforce Fusion pipeline executing in real time, with a fake but realistic streaming response, citing fake but realistic sources (SAP S/4HANA `VBAK`, Salesforce `Opportunity`). Must be clearly labeled `simulation`.
3. **Live token meter** in the footer that pretends to show the running token count of public NXπ deployments. Animates upward. Pure decoration; clearly marked as a marketing visualization in source comments.
4. **Press‑and‑hold easter egg.** Press and hold `Shift + π` (or `Shift + P`) anywhere to summon a fullscreen architecture poster with parallax. (Discoverable via Cmd+K hint.)
5. **Per‑role landing routing.** Detect UTM `?role=cfo` and personalize the home hero subhead + primary CTA for the role.
6. **Schema‑driven `/integrations`.** Drive the grid from a single JSON file at `content/integrations.json` so PMs can add integrations without code.
7. **Open architecture poster** — a single SVG at `/architecture/poster.svg` printable at A1, downloadable from the architecture page.
8. **Built‑in compliance readiness widget** at `/legal/ai-act-readiness` that lets a CISO answer 8 questions and outputs a one‑page printable readiness summary.

---

## 16. Repo structure (target)

```
.
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                  # /
│   │   ├── platform/
│   │   │   ├── page.tsx
│   │   │   └── [pillar]/page.tsx
│   │   ├── solutions/
│   │   │   ├── page.tsx
│   │   │   ├── sap/page.tsx
│   │   │   ├── salesforce/page.tsx
│   │   │   ├── fusion/page.tsx
│   │   │   ├── role/[role]/page.tsx
│   │   │   └── industry/[industry]/page.tsx
│   │   ├── architecture/page.tsx
│   │   ├── security/page.tsx
│   │   ├── integrations/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── customers/page.tsx
│   │   ├── changelog/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── legal/[doc]/page.tsx
│   ├── api/
│   │   └── leads/route.ts
│   ├── opengraph-image.tsx
│   ├── twitter-image.tsx
│   └── layout.tsx
├── components/
│   ├── ui/                           # primitives
│   ├── site/                         # composites
│   ├── three/                        # R3F scenes
│   ├── motion/                       # animation primitives
│   └── demos/                        # six interactive micro-demos
├── content/
│   ├── blog/*.mdx
│   ├── changelog/*.mdx
│   ├── integrations.json
│   └── solutions/*.ts                # typed content modules
├── lib/
│   ├── analytics.ts
│   ├── seo.ts
│   ├── og.tsx
│   └── utils.ts
├── public/
│   ├── brand/                        # logo + mark + variations
│   ├── og/
│   └── images/
├── styles/
│   ├── globals.css
│   └── tokens.css
├── tests/
│   ├── e2e/                          # Playwright
│   └── unit/                         # Vitest
├── .storybook/
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 17. Build sequence Claude Code should follow

Execute these in order. Commit at each milestone.

1. **Scaffold.** `pnpm dlx create-next-app@latest` with TS, App Router, Tailwind. Add the rest of `package.json` deps from §5.
2. **Design tokens.** Implement `styles/tokens.css` + Tailwind theme. Verify in a Storybook color/typography page.
3. **Layout shell.** Root layout, theme provider, font loading, nav, footer, custom cursor, mesh backdrop.
4. **Home hero (no WebGL yet).** Static hero with copy, CTAs, product peek. Get typography and spacing right first.
5. **WebGL hero.** Build the R3F scene, lazy‑load it, fall back to gradient. Test reduced motion.
6. **Bento + six pillar cards + micro‑demos** (stubbed first, then real). Each demo on its own PR.
7. **Stats row, trust strip, wedge, fusion showcase, architecture preview, solutions teaser, CTA band.**
8. **Platform overview + six pillar pages.**
9. **Solutions hub + SAP, Salesforce, Fusion pages.**
10. **CXO role pages (7) + industry pages (5).**
11. **Architecture, Security, Integrations, Pricing (with ROI calculator), Customers, Changelog, Blog (3 seed posts), About, Contact, Legal.**
12. **OG image generation + sitemap + JSON‑LD + i18n stub.**
13. **Storybook coverage** for every primitive + composite.
14. **Playwright smoke tests** for every route + critical interactions (Cmd+K, ROI calculator, contact form).
15. **Perf pass:** image optimization, font subsetting, route‑level dynamic imports, prefetch hints, bundle analyzer review.
16. **Accessibility pass:** axe on every route, manual keyboard tour, screen reader spot‑check.
17. **Polish pass:** spacing, micro‑animations, hover states, empty states, error states, 404, 500.
18. **Stretch features from §15** (build as time allows; tag them in commit messages).

---

## 18. Things to deliberately avoid

- Carousels with auto‑rotating slides (low engagement, bad a11y).
- Parallax that fights scroll on trackpads.
- “Hero video” autoplay backgrounds (too heavy).
- Cookie banners that block content. Use a thin top bar instead.
- Glassmorphism on body text (only on chrome).
- Dropdowns that don’t close on `Escape`.
- Modal popups for newsletter capture (anti‑pattern).
- AI generated stock illustrations of robots, brains, or neural networks.
- The word “seamless.” Ever.

---

## 19. Definition of done

- All §14 acceptance criteria pass.
- The home page makes a busy CXO believe NXπ is the credible enterprise winner within 30 seconds of scrolling.
- The platform pages make a senior architect download the architecture poster within 90 seconds.
- The site loads as fast as Linear, looks as composed as Anthropic, and reads as serious as Stripe.
- Every page would survive an enterprise procurement review unedited.

When you finish, write a `BUILD-NOTES.md` summarizing what you built, what you stubbed, and what you would do next with another two weeks. Then ship it.

---

*End of Claude Code build brief.*
