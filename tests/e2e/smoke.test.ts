import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", title: "NXπ" },
  { path: "/platform", title: "Platform" },
  { path: "/platform/mcp-fabric", title: "MCP Integration Fabric" },
  { path: "/platform/orchestration", title: "Multi-Agent Orchestration" },
  { path: "/platform/rag", title: "Hybrid RAG" },
  { path: "/platform/workflows", title: "Workflow Automation" },
  { path: "/platform/data-layer", title: "Unified Data Layer" },
  { path: "/platform/governance", title: "Zero-Trust Governance" },
  { path: "/solutions", title: "Solutions" },
  { path: "/solutions/sap", title: "NXπ for SAP" },
  { path: "/solutions/salesforce", title: "NXπ for Salesforce" },
  { path: "/solutions/fusion", title: "Fusion" },
  { path: "/solutions/role/cfo", title: "CFO" },
  { path: "/solutions/role/cto-cio", title: "CTO" },
  { path: "/solutions/role/ciso", title: "CISO" },
  { path: "/solutions/industry/financial-services", title: "Financial Services" },
  { path: "/solutions/industry/manufacturing", title: "Manufacturing" },
  { path: "/architecture", title: "Architecture" },
  { path: "/security", title: "Security" },
  { path: "/integrations", title: "Integrations" },
  { path: "/pricing", title: "Pricing" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blog", title: "Blog" },
  { path: "/customers", title: "Customers" },
];

for (const route of routes) {
  test(`${route.path} — loads and has title`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page).toHaveTitle(new RegExp(route.title, "i"));
    await expect(page.locator("nav")).toBeVisible();
  });
}

test("home page — has primary CTA", async ({ page }) => {
  await page.goto("/");
  const cta = page.getByRole("link", { name: /book.*briefing/i }).first();
  await expect(cta).toBeVisible();
});

test("contact page — form is present and keyboard navigable", async ({ page }) => {
  await page.goto("/contact");
  const nameField = page.getByLabel(/name/i).first();
  await expect(nameField).toBeVisible();
  await nameField.focus();
  await expect(nameField).toBeFocused();
});

test("pricing page — ROI calculator is present", async ({ page }) => {
  await page.goto("/pricing");
  const calculator = page.getByText(/ROI Calculator/i);
  await expect(calculator).toBeVisible();
});

test("integrations page — search input works", async ({ page }) => {
  await page.goto("/integrations");
  const search = page.getByPlaceholder(/search integrations/i);
  await expect(search).toBeVisible();
  await search.fill("SAP");
  await expect(page.getByText("SAP HANA Cloud")).toBeVisible();
});

test("nav — all main links are present", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Platform" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Solutions" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible();
});
