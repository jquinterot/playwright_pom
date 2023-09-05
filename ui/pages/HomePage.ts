import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getNavBarTitle = () => this.page.getByRole('link', { name: 'PRODUCT STORE' });
}
