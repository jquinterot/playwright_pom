import { BattlePage } from '../pages/BattlePage';
import { expect, Page } from '@playwright/test';
export class BattleActions {
  private battlePage: BattlePage;

  constructor(page: Page) {
    this.battlePage = new BattlePage(page);
  }

  async clickBattleHeader() {
    const battleHeader = this.battlePage.getBatleHeader();
    await battleHeader.click();
  }

  async checkHeaderContent() {
    await expect(this.battlePage.getBatleHeader()).toHaveText('Battle');
  }

  async verifyBattleUrlIsCorrect(page:Page) {
    await expect(page).toHaveURL(/.*battle/);
  }

  

  async clickSingleButton() {
    const singleButton = this.battlePage.getSingleButton();
    await singleButton.click();
  }

  async clickMultiButton() {
    const multiButton = this.battlePage.getMultiButton();
    await multiButton.click();
  }

  async clickMatrixButton() {
    const matrixButton = this.battlePage.getMatrixButton();
    await matrixButton.click();
  }
}
