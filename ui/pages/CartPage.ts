import { Page } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getAddedProductTitle = (product:string) =>  this.page.getByRole('cell', {name: `${product}`});
  getDeleteButton = () =>  this.page.getByRole('link', {name: `Delete`});
}
