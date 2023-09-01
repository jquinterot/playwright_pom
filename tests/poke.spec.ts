import { test, expect } from '../fixtures/ActionFactoryFixture';
import { ButtonTypes} from '../enums/ButtonTypes';

test.describe('@regression Check Poke battles are available', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check Poke battle page is displayed', async ({ page, actionFactory }) => {
    const homeActions = actionFactory.createHomeActions();
    const battleActions = actionFactory.createBattleActions();

    await page.screenshot({ path: 'screenshots/testScreenshot.png' });

    await homeActions.clickBattleMainButton();
    await battleActions.verifyBattleHeaderIsDisplayed();
    await battleActions.verifyBattleUrlIsCorrect(page);
  });

  test('Check combat information is displayed', async ({ actionFactory }) => {
    const homeActions = actionFactory.createHomeActions();
    const battleActions = actionFactory.createBattleActions();

    await homeActions.clickBattleMainButton();

    await battleActions.clickButtonByClass(ButtonTypes.SINGLE);
    await battleActions.clickButtonByClass(ButtonTypes.MULTI);
    await battleActions.clickButtonByClass(ButtonTypes.MATRIX);
  });
});

test.describe('@acceptance Check Poke page has correct title', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });
  
  test('check url test', async ({ page }) => {
    await expect(page).toHaveTitle(/PvPoke/);
  });
});
