import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getBatleHeader = () => this.page.getByRole('heading', { name: 'Battle' });
}
