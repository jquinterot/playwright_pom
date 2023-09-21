import { Page } from '@playwright/test';
import { HomeActions } from './HomeActions';
import { ProductActions } from './ProductActions';
import { CartActions } from './CartActions';

export class ActionFactory {
  constructor(private page: Page) {}

  createHomeActions(): HomeActions {
    return new HomeActions(this.page);
  }

  createProductActions(): ProductActions {
    return new ProductActions(this.page);
  }

  createCartActions(): CartActions {
    return new CartActions(this.page);
  }
}
