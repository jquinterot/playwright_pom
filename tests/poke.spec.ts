import { test, expect } from '../fixtures/ActionFactoryFixture';
import { ButtonTypes } from '../enums/ButtonTypes';

test.describe('@regression Check Poke battles are available', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check Poke battle page is displayed', async ({
    page,
    actionFactory,
  }) => {
    const homeActions = actionFactory.createHomeActions();
    const battleActions = actionFactory.createBattleActions();
    await homeActions.clickBattleMainButton();

    //comment for CI
    //await expect.soft(page).toHaveScreenshot('battle-page.png');

    await battleActions.verifyBattleHeaderIsDisplayed();
    await battleActions.verifyBattleUrlIsCorrect(page);
  });

  //storage state playwright, prepare environment withh the necessary data

  test('Check combat information is displayed', async ({ actionFactory }) => {
    const homeActions = actionFactory.createHomeActions();
    const battleActions = actionFactory.createBattleActions();

    await homeActions.clickBattleMainButton();

    await battleActions.clickButtonByClass(ButtonTypes.SINGLE);
    await battleActions.clickButtonByClass(ButtonTypes.MULTI);
    await battleActions.clickButtonByClass(ButtonTypes.MATRIX);
  });
});

//add template literal
test.describe('@acceptance Check Poke is correctly displayed', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test.skip('check Poke Home Page is displayed', async ({ page }) => {
    await expect(page).toHaveScreenshot('home-page.png');
  });

  test('check Poke Home has correct title ', async ({ page }) => {
    await expect(page).toHaveTitle(/PvPoke/);
  });
});
