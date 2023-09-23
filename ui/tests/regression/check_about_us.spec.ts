import { test } from '../../fixtures/ActionFactoryFixture';
import { MenuOptions } from '../../enums/MenuOptions';

test.describe('@regression Check About us', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check About us is correctly displayed', async ({
    actionFactory
  }) => {
    const homeActions = actionFactory.createHomeActions();

    await test.step('When goes to About us', async () => {
      await homeActions.selectMenuOption(MenuOptions.ABOUT_US);
    });
  });
});