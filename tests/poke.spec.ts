import { test, expect } from '@playwright/test';
import { ActionFactory } from '../actions/ActionsFactory';
import { ButtonTypes} from '../enums/ButtonTypes';

test.describe('first test', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check poke page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/PvPoke/);
  });

  test('Check battle page is displayed', async ({ page }) => {
    const actionFactory = new ActionFactory(page);
    const homeActions = actionFactory.createHomeActions();
    const battleActions = actionFactory.createBattleActions();

    await page.screenshot({ path: 'screenshots/testScreenshot.png' });

    await homeActions.clickBattleMainButton();
    await battleActions.verifyBattleHeaderIsDisplayed();
    await battleActions.verifyBattleUrlIsCorrect(page);
  });

  test('Check combat information is displayed', async ({ page }) => {
    const actionFactory = new ActionFactory(page);
    const homeActions = actionFactory.createHomeActions();
    const battleActions = actionFactory.createBattleActions();

    await homeActions.clickBattleMainButton();

    await battleActions.clickButtonByClass(ButtonTypes.SINGLE);
    await battleActions.clickButtonByClass(ButtonTypes.MULTI);
    await battleActions.clickButtonByClass(ButtonTypes.MATRIX);
  });
});
