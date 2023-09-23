import { SignUpPage } from '../pages/SignUpPage';
import { Page, expect } from '@playwright/test';

export class SingUpActions {
  private signUpPage: SignUpPage;

  constructor(page: Page) {
    this.signUpPage = new SignUpPage(page);
  }
}