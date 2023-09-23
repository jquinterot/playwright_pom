import { AboutUsPage } from '../pages/AboutUsPage';
import { Page, expect } from '@playwright/test';

export class AboutUsActions {
  private aboutUsPage: AboutUsPage;

  constructor(page: Page) {
    this.aboutUsPage = new AboutUsPage(page);
  }

  //Methods here
}