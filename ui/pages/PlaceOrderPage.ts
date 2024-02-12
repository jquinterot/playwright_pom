import { Locator, Page } from '@playwright/test';

export class PlaceOrderPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getTotalInput = ():Locator => this.page.locator(`#totalm`);
  getNameInput = ():Locator => this.page.locator(`#name`);
  getCountryInput = ():Locator => this.page.locator(`#country`);
  getCityInput = ():Locator => this.page.locator(`#city`);
  getCardInput = ():Locator => this.page.locator(`#card`)
  getMonthInput = ():Locator => this.page.locator(`#month`);
  getYearInput = ():Locator => this.page.locator(`#year`);
  getPurchaseButton = ():Locator => this.page.getByRole('button', {name: `Purchase`});
  getThankYouLabel = ():Locator => this.page.getByRole('heading', { name: `Thank you for your purchase!`});
}