import { Page, Locator } from '@playwright/test';

export class BattlePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getBatleHeader = () => this.page.getByRole('heading', { name: 'Battle' });
  getButtonByClass = (buttonType: string) =>
    this.page.locator(`[data="${buttonType}"]`);
}
