import { ProductPage } from '../pages/ProductPage';
import { Page, expect } from '@playwright/test';

export class ProductActions {
  private productPage: ProductPage;

  constructor(page: Page) {
    this.productPage = new ProductPage(page);
  }

  async checkHomePageTitle(page: Page) {
    await expect(page).toHaveTitle(/STORE/);
  }

  async checkAddedProduct(product:string) {
    await expect(this.productPage.getProductLabel(product)).toHaveText(`${product}`);
  }

  
}