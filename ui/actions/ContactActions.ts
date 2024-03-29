import { ContactPage } from '../pages/ContactPage';
import { Page } from '@playwright/test';

export class ContactActions {
  private contactPage: ContactPage;

  constructor(page: Page) {
    this.contactPage = new ContactPage(page);
  }
}