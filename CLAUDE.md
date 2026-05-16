# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # Start dev server on :3000
pnpm build        # Production build (runs next-sitemap via postbuild)
pnpm typecheck    # tsc --noEmit
pnpm lint         # next lint (ESLint 9 flat config in eslint.config.mjs)
pnpm test         # Vitest unit tests (run once)
pnpm test:watch   # Vitest in watch mode
pnpm e2e          # Playwright E2E (requires pnpm start running on :3000)
pnpm e2e:ui       # Playwright with interactive UI
```

Run a single unit test file: `pnpm test tests/unit/button.test.tsx`

Playwright E2E requires a production server: `pnpm build && pnpm start` before running `pnpm e2e`.

## Architecture

**Framework:** Next.js 16.2.6, React 19, TypeScript, Tailwind CSS v4, pnpm.

**App Router layout:**
- `app/layout.tsx` — root layout: fonts, theme hydration script, global overlays (CustomCursor, NoiseOverlay, CommandPalette, ArchitecturePoster)
- `app/(marketing)/layout.tsx` — marketing route group: wraps all public pages with Nav + Footer + ConsentBar
- `app/(marketing)/` — all public pages (home, platform, solutions, blog, pricing, etc.)
- `app/api/leads/` — stubbed lead capture endpoint (HubSpot/Marketo not wired)

**Path alias:** `@` resolves to the repo root (configured in both `tsconfig.json` and `vitest.config.ts`).

## Design system

**Tokens:** `styles/tokens.css` defines CSS custom properties (`--bg-base`, `--accent-aurora-1`, etc.) for both dark (`:root`) and light (`[data-theme="light"]`) modes. `app/globals.css` maps these into Tailwind via `@theme {}`, making them available as utilities (`bg-bg-base`, `text-aurora-1`, `border-border-soft`, etc.).

**Theme switching:** `data-theme` attribute on `<html>`. An inline script in `app/layout.tsx` body reads `localStorage` before React hydrates to prevent flash.

**Typography:** Geist Sans (`--font-sans`), Geist Mono (`--font-mono`), Instrument Serif (`--font-serif`).

## Components

All component subdirectories export via `index.ts`:

| Directory | Contents |
|---|---|
| `components/ui/` | Primitives: Button, Card, Badge, Chip — CVA-based with Radix Slot support |
| `components/site/` | Layout & interactive: Nav, Footer, CommandPalette, ConsentBar, ArchitectureDiagram, ROICalculator, IntegrationsGrid, AIDemoIsland, TokenMeter, UTMPersonalizer, AIActReadiness, etc. |
| `components/motion/` | FadeIn, StaggerGroup — Framer Motion spring wrappers |
| `components/three/` | HeroScene, HeroSceneWrapper — React Three Fiber WebGL particle hero |
| `components/demos/` | MCPFabricDemo, OrchestrationDemo, HybridRAGDemo, WorkflowBuilderDemo, DataLayerDemo, GovernanceDemo — scripted animation stubs |
| `components/platform/` | PillarCardGrid, PillarOutcomes, PillarRoles — platform pillar page sections |

**Dynamic imports:** `ROICalculatorDynamic` and `IntegrationsGridDynamic` are client-side dynamic wrappers (with skeleton loading) for their heavy counterparts. Use the `*Dynamic` version in page files.

**Component authoring:** Use `cn()` from `@/lib/utils` (clsx + tailwind-merge). Use CVA for variant-based components. Prefer `"use client"` only where needed; most components are server-safe.

## Content

**Blog:** MDX files live in `content/blog/*.mdx` with YAML frontmatter (`title`, `date`, `author`, `description`). Post metadata is also manually maintained as TypeScript objects in `app/(marketing)/blog/page.tsx` (for the listing) and `app/(marketing)/blog/[slug]/page.tsx` (for rendering + metadata). Adding a new post requires updating all three locations.

**Integrations:** `content/integrations.json` — source of truth for the integrations grid.

**Solutions:** `content/solutions/` — MDX content for solutions pages.

## SEO

- `lib/seo.ts` exports `generateProductSchema()`, `generateArticleSchema()`, `generateFAQSchema()` for JSON-LD structured data
- Per-route OG images use `opengraph-image.tsx` files with `next/og`
- `next-sitemap` runs automatically after `pnpm build` (configured in `next-sitemap.config.js`)
- `metadataBase` is `https://nxpi.ai`

## Testing

- **Unit tests:** Vitest + React Testing Library, files in `tests/unit/`, environment is jsdom. Setup file at `tests/unit/setup.ts`.
- **E2E:** Playwright, files in `tests/e2e/`. `smoke.test.ts` covers 35+ route loads; `accessibility.test.ts` covers a11y checks. Runs against `pnpm start` (production build).

## MDX

`next.config.ts` enables MDX via `@next/mdx`. Page extensions include `mdx`. Blog posts are loaded via dynamic `import()` of the MDX file by slug in `app/(marketing)/blog/[slug]/page.tsx`.
