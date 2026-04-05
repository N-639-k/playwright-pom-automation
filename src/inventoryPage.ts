import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.getByText('Products')).toBeVisible();
  }
}