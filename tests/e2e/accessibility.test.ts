import { test, expect } from "@playwright/test";

test("home page — no obvious accessibility violations (basic checks)", async ({ page }) => {
  await page.goto("/");

  // All images have alt text
  const images = page.locator("img");
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const alt = await img.getAttribute("alt");
    const role = await img.getAttribute("role");
    expect(alt !== null || role === "presentation", `Image ${i} missing alt`).toBeTruthy();
  }

  // Page has a main landmark
  await expect(page.locator("main")).toBeVisible();

  // Page has h1
  await expect(page.locator("h1").first()).toBeVisible();

  // Nav has aria-label
  await expect(page.locator("nav[aria-label]").first()).toBeVisible();
});

test("contact form — labels are associated with inputs", async ({ page }) => {
  await page.goto("/contact");

  // Every input should have an associated label
  const inputs = page.locator("input:not([type=hidden])");
  const count = await inputs.count();
  for (let i = 0; i < count; i++) {
    const input = inputs.nth(i);
    const id = await input.getAttribute("id");
    if (id) {
      const label = page.locator(`label[for="${id}"]`);
      const labelCount = await label.count();
      expect(labelCount, `Input ${id} has no associated label`).toBeGreaterThan(0);
    }
  }
});
