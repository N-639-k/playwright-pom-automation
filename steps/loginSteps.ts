import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch({
    headless: false, // 👈 headed mode
    slowMo: 200
  });

  const context = await browser.newContext();
  page = await context.newPage();
});

Given("I launch the application", async function () {
  await page.goto("https://www.saucedemo.com/");
});

When("I login with valid credentials", async function () {
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
});

Then("I should see the inventory page", async function () {
  await expect(page).toHaveURL(/inventory/);
});

After(async () => {
  await browser.close();
});