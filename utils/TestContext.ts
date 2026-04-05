import { Browser, Page, chromium } from '@playwright/test';

class TestContext {
  browser!: Browser;
  page!: Page;

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

export const testContext = new TestContext();