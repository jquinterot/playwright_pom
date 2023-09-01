import { HomePage } from '../pages/HomePage';
import { Page } from '@playwright/test';

export class HomeActions {
  private homePage: HomePage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
  }

  async clickBattleMainButton() {
    const battleHeader = this.homePage.getBatleHeader();
    await battleHeader.click();
  }
}
