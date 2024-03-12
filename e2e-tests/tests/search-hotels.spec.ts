import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  //get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password");

  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Signed in successfully!")).toBeVisible();
});

test("should show hotel search results", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByPlaceholder("where are you going?").fill("Manali");
  await page.getByRole("button", { name: "Search" }).click();

  await expect(page.getByText("Hotels found in Manali")).toBeVisible();
  await expect(page.getByText("The Himalayan Hideaway").first()).toBeVisible();
});

test("should show hotel details", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByPlaceholder("where are you going?").fill("Manali");
  await page.getByRole("button", { name: "Search" }).click();

  await page.getByText("The Himalayan Hideaway").first().click();
  await expect(page).toHaveURL(/details/);
  await expect(page.getByRole("button", { name: "Book Now" })).toBeVisible();
});
