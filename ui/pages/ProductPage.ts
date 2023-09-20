import { Page } from '@playwright/test';

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getProductLabel = (product:string) => this.page.getByRole('heading', { name: `${product}`});
}