import { test, expect } from '@playwright/test';
import { HomeActions } from '../actions/HomeActions';
import { BattleActions } from '../actions/BattleActions';

test.describe('first test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://pvpoke.com/');
  });

  test('Check poke page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/PvPoke/);
  });

  test('Check battle page is displayed', async ({ page }) => {
    const homeActions = new HomeActions(page);
    const battleActions = new BattleActions(page);
    await page.screenshot({ path: 'screenshots/testScreenshot.png' });
    await homeActions.clickBattleHeader();
    await battleActions.clickBattleHeader();
    await battleActions.checkHeaderContent();
    await expect(page).toHaveURL(/.*battle/);
  });
});
