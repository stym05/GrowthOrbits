import { expect, test } from "@playwright/test";

test("homepage exposes primary conversion paths", async ({ page }) => {
  await page.goto("/");
  const heroHeading = page.getByRole("heading", { level: 1 });
  await expect(heroHeading).toContainText("qualified sales conversations");
  await expect(heroHeading).toHaveClass(/is-visible/);
  await expect(page.getByRole("link", { name: /book a strategy call/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /one connected system/i })).toBeVisible();
});

test("contact form is keyboard accessible", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Work email")).toHaveAttribute("type", "email");
  await expect(page.getByRole("button", { name: /send enquiry/i })).toBeEnabled();
});

test("founder and team page presents replaceable sample profiles", async ({ page }) => {
  await page.goto("/about/founder-team");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("A specialist team");
  await expect(page.getByRole("note")).toContainText("Names, biographies, roles, and portraits");
  await expect(page.getByRole("heading", { name: "Aarav Mehta" })).toBeVisible();
  await expect(page.locator('img[alt*="fictional"]')).toHaveCount(7);
  await expect(page.getByRole("heading", { name: "Maya Chen" })).toBeVisible();
});

test("mobile navigation opens, closes, and follows links", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation is only rendered at the mobile breakpoint");

  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Open navigation" });
  const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });

  await menuButton.click();
  await expect(page.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
  await expect(mobileNavigation).toBeVisible();
  await expect(mobileNavigation.getByRole("link", { name: "Who we serve", exact: true })).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");

  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
  await expect(mobileNavigation).toBeHidden();
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");

  await page.getByRole("button", { name: "Open navigation" }).click();
  await mobileNavigation.getByRole("link", { name: "Who we serve", exact: true }).click();
  await expect(page).toHaveURL(/\/who-we-serve$/);
  await expect(mobileNavigation).toBeHidden();
});
