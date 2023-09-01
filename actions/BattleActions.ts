import { BattlePage } from '../pages/BattlePage';
import { expect, Page } from '@playwright/test';
export class BattleActions {
  private battlePage: BattlePage;

  constructor(page: Page) {
    this.battlePage = new BattlePage(page);
  }

  async verifyBattleHeaderIsDisplayed() {
    await expect(this.battlePage.getBatleHeader()).toHaveText('Battle');
  }

  async verifyBattleUrlIsCorrect(page:Page) {
    await expect(page).toHaveURL(/.*battle/);
  }


  async clickButtonByClass(buttonType:string) {
    const singleButton = this.battlePage.getButtonByClass(buttonType);
    await singleButton.click();
  }
}
