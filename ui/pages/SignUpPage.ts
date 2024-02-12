import { Page } from '@playwright/test';

export class SignUpPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getUserNameInput = () => this.page.locator('#sign-username');
  getUserPasswordInput = () => this.page.locator('#sign-password');
  getSignupButton = () => this.page.getByRole('button', { name: 'Sign up'});
}