# NXπ Website — Build Notes

## What was built

Full-scope production website for NXπ (Negentrophi), the Enterprise AI Operations Platform.

### Site structure
- 40+ pages across 5 domains: Home, Platform (7), Solutions (17), Technical (4), Content & Legal (10+)
- 6 interactive pillar demos (functional stubs with scripted animations)
- WebGL hero (React Three Fiber, particle field, reduced-motion fallback)
- Full design system: NXπ aurora color palette, Geist Sans/Mono + Instrument Serif typography, Tailwind v4

### Pages delivered
- **Home:** Finance-first narrative, 13 sections, WebGL hero, 6 bento pillar cards, stats row, SAP+Salesforce fusion showcase, architecture preview, AI demo island, solutions teaser
- **Platform:** Overview + 6 pillar deep-dives (MCP Fabric, Orchestration, Hybrid RAG, Workflows, Data Layer, Governance)
- **Solutions:** Hub (by role/system/industry) + SAP, Salesforce, Fusion + 7 CXO role pages + 5 industry pages
- **Technical:** Architecture (interactive 4-layer), Security (compliance grid, zero-trust), Integrations (search/filter, 20 entries from JSON), Pricing (3 tiers + ROI calculator)
- **Content:** Blog (3 MDX seed posts), Changelog (3 entries), Customers (3 case studies), About, Contact (form + zod validation)
- **Legal:** Privacy, Terms, DPA, EU AI Act Readiness (interactive 8-question widget)

### Components
- Primitives: Button, Card, Badge, Chip (CVA-based, Radix Slot support)
- Motion: FadeIn, StaggerGroup (Framer Motion, spring-based)
- Site: Nav (glassmorphic, mobile overlay, ⌘K search button), Footer (4-column, token meter), Mark (SVG logo), StatCounter, MarqueeRow (RAF), BentoGrid, PillarCard, ArchitectureDiagram, UseCaseTable, CalloutBox, ROICalculator, IntegrationsGrid, ConsentBar, CustomCursor, NoiseOverlay, MeshBackdrop
- Stretch: CommandPalette (⌘K), AIDemoIsland (simulated SAP+SF fusion), TokenMeter (live counter in footer), ArchitecturePoster (Shift+π full-screen poster), UTMPersonalizer (per-role hero copy via ?role=), AIActReadiness (8-question interactive widget)

### SEO
- Per-route OG images via `next/og`
- JSON-LD: Organization, SoftwareApplication, Article schemas
- `next-sitemap` generating `sitemap.xml` + `robots.txt` (blocks GPTBot/CCBot)
- Web manifest + SVG favicon

### Accessibility (Wave 4)
- Skip-to-content link on all marketing pages
- Visible focus rings via `:focus-visible` (2px aurora-2 outline)
- SolutionsTeaser tabs: `role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`, `aria-live="polite"`
- Proper `aria-label` on all icon buttons, dialogs (`aria-modal="true"`), and command palette

### Performance (Wave 4)
- Dynamic imports: ROICalculator and IntegrationsGrid loaded client-side with skeleton loading states
- `next/font` handles `font-display: swap` automatically
- `@layer base` focus styles ensure no layout shift on focus

### Testing
- 10 Vitest unit tests (Button, Badge, Chip, ROICalculator)
- Playwright E2E: 26 route smoke tests + functional tests (form, search, ROI calculator)
- GitHub Actions CI: typecheck → lint → test → build on every PR

### Deployment
- Dockerfile (multi-stage, Node 20 LTS, standalone output)
- docker-compose.yml
- Vercel-ready (default target)

## What was stubbed

- **Interactive demos:** All 6 demos are scripted/fixed-timeline stubs. The MCP Fabric 3D network (R3F), orchestration draggable canvas, RAG dual-column animation, and workflow DAG animation are simplified placeholders. Full implementation requires ~2 weeks of additional frontend engineering.
- **WebGL hero:** Particle field renders but does not implement the full π-mesh recomposition from cloud→lattice. The GSAP scroll-driven recomposition is not wired.
- **Real backend:** `/api/leads` is stubbed — HubSpot/Marketo integration TODO.
- **Analytics:** Vercel Analytics and PostHog stubs — wire up by adding env vars.
- **i18n:** Language switcher UI exists but only `en` content is present. Translation files TODO.
- **Customers:** 3 case studies are placeholder copy — real customer quotes and logos TODO.
- **Storybook:** Configuration not set up in this build — component stories exist as unit tests via Vitest + RTL.
- **Integration logos:** SVG logo files for the 20 integration entries are not present — placeholder text renders.
- **AI Demo Island:** The demo is a scripted simulation — not connected to real SAP/Salesforce APIs. The simulated response is fixed copy for marketing visualization only.
- **TokenMeter:** Counter is a marketing visualization starting from a fixed BASE value + a constant RATE. Not connected to real telemetry.

## What to do next (2 more weeks)

1. **Demo polish:** Build the real MCP Fabric 3D network (R3F, ≤80 draw calls), orchestration draggable canvas (XYFlow), and workflow DAG executor. These are the highest-impact conversion moments.
2. **WebGL hero:** Wire the GSAP ScrollTrigger recomposition — particles should reorganize into the π lattice as the user scrolls into the trust strip.
3. **Real customer logos + quotes:** Replace placeholder case studies. Three signed customer quotes would significantly increase enterprise credibility.
4. **HubSpot/Marketo integration:** Wire `/api/leads` to your CRM. Every "Book a briefing" CTA fires to this endpoint.
5. **Performance audit:** Run Lighthouse on production deployment. Target ≥95/95/100/100 desktop. The main risk is the R3F bundle size — verify the dynamic import boundary is working correctly.
6. **Storybook setup:** Run `pnpm storybook init` and write stories for all primitives + composites. Required for design system maintenance.
7. **Integration logos:** Add SVG logos for each of the 20 integrations in `public/brand/integrations/`. These dramatically improve the integrations page.
8. **Real i18n:** Wire `next-intl` or `next-i18next` for de/ja/ko/fr locales. Finance-first markets (India, Middle East, Germany) justify German as first priority.
9. **UTM A/B testing:** Wire UTMPersonalizer to a proper analytics event so per-role landing performance can be measured. Connect CTA overrides to real role-specific destinations.
10. **EU AI Act widget:** Connect the AIActReadiness widget to a lead capture flow — offer to email the readiness report and route to the legal team's inbox.

## Build stats (Wave 4 final)

- Pages: 40+
- Static routes: 35+
- Dynamic routes: 5
- Unit tests: 10 passing
- Commits: 9 (foundation → polish)
- Build time: ~45s
