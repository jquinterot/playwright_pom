import { test } from '../../helpers/fixtures/ActionFactoryFixture';
import { MenuOptions } from '../../helpers/enums/MenuOptions';

test.describe('@regression Check Sign up', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check Sign up', async ({
    actionFactory
  }) => {
    const homeActions = actionFactory.createHomeActions();

    await test.step('When goes to Sign up', async () => {
      await homeActions.selectMenuOption(MenuOptions.SIGN_UP);
    });
  });
});