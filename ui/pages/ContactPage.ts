import { Page } from '@playwright/test';

export class ContactPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}