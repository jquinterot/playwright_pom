import { Page } from '@playwright/test';
import { HomeActions } from './HomeActions';

export class ActionFactory {
  constructor(private page: Page) {}

  createHomeActions(): HomeActions {
    return new HomeActions(this.page);
  }
}
