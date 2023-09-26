import { CommonPage } from '../pages/CommonPage';
import { Page, expect } from '@playwright/test';

export class CommonActions {
  private contactPage: CommonPage;

  constructor(page: Page) {
    this.contactPage = new CommonPage(page);
  }
}