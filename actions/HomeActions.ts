import { HomePage } from '../pages/HomePage';
import { Page, expect } from '@playwright/test';

export class HomeActions {
  private homePage: HomePage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
  }

  async checkHomePageTitle(page: Page) {
    await expect(page).toHaveTitle(/STORE/);
  }

  async verifyHomePageNavbarTitle() {
    await expect(this.homePage.getNavBarTitle()).toHaveText('PRODUCT STORE');
  }
}
