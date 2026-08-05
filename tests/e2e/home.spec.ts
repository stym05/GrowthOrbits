import { expect, test } from "@playwright/test";

test("homepage exposes primary conversion paths", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("qualified sales conversations");
  await expect(page.getByRole("link", { name: /book a strategy call/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /one connected system/i })).toBeVisible();
});

test("contact form is keyboard accessible", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Work email")).toHaveAttribute("type", "email");
  await expect(page.getByRole("button", { name: /send enquiry/i })).toBeEnabled();
});
