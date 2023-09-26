import { AboutUsPage } from '../pages/AboutUsPage';
import { Page, expect } from '@playwright/test';

export class AboutUsActions {
  private aboutUsPage: AboutUsPage;

  constructor(page: Page) {
    this.aboutUsPage = new AboutUsPage(page);
  }

  async isAboutUsTitleDisplayed(){
    await expect(this.aboutUsPage.getAboutUsTitle()).toBeVisible();
  }

  async closeModal(){
    await this.aboutUsPage.getCloseButton().click();
  }
}