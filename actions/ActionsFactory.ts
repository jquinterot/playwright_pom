import { Page } from '@playwright/test';
import { HomeActions } from './HomeActions';
import { BattleActions } from './BattleActions';

export class ActionFactory {
  constructor(private page: Page) {}

  createHomeActions(): HomeActions {
    return new HomeActions(this.page);
  }

  createBattleActions(): BattleActions {
    return new BattleActions(this.page);
  }
}
