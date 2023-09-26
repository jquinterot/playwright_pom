import { Page } from '@playwright/test';

export class PlaceOrderPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getTotalInput = () => this.page.locator(`#totalm`);

  getNameInput = () => this.page.locator(`#name`);

  getCountryInput = () => this.page.locator(`#country`);

  getCityInput = () => this.page.locator(`#city`);

  getCardInput = () => this.page.locator(`#card`)

  getMonthInput = () => this.page.locator(`#month`);

  getYearInput = () => this.page.locator(`#year`);

  getPurchaseButton = () => this.page.getByRole('button', {name: `Purchase`});
  
  getThankYouLabel = () => this.page.getByRole('heading', { name: `Thank you for your purchase!`});
}