import { Page } from '@playwright/test';
import { HomeActions } from './HomeActions';
import { ProductActions } from './ProductActions';

export class ActionFactory {
  constructor(private page: Page) {}

  createHomeActions(): HomeActions {
    return new HomeActions(this.page);
  }

  createProductActions(): ProductActions {
    return new ProductActions(this.page);
  }
}
