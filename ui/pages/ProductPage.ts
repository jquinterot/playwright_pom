import { Page } from '@playwright/test';

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getProductLabel = (product:string) => this.page.getByRole('heading', { name: `${product}`});

  getPriceLabel = (price:string) => this.page.getByRole('heading', { name: `${price}`});

  getAddToCartButton = () => this.page.getByRole('link', {name: `Add to cart`,  exact: true});
}