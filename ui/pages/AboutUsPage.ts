import { Page } from '@playwright/test';

export class AboutUsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getAboutUsTitle = () =>  this.page.getByRole('heading', {name: `About us`});

  getCloseButton = () => this.page.locator('#videoModal').getByText('Close', { exact: true });
}