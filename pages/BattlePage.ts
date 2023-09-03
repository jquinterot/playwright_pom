import { Page } from '@playwright/test';
import { ButtonTypes } from '../enums/ButtonTypes';

export class BattlePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getBatleHeader = () => this.page.getByRole('heading', { name: 'Battle' });
  getButtonByClass = (buttonType: ButtonTypes) =>
    this.page.locator(`[data="${buttonType}"]`);
}
