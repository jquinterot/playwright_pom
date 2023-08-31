import { Page, Locator } from '@playwright/test';

export class BattlePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getBatleHeader = () => this.page.getByRole('heading', { name: 'Battle' });
  getSingleButton = () => this.page.locator('[data="single"]');
  getMultiButton = () => this.page.locator('[data="multi"]');
  getMatrixButton = () => this.page.locator('[data="matrix"]');
}
