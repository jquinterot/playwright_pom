import { test, expect } from '../../fixtures/ActionFactoryFixture';

test.describe('@visual Check Poke batle is displayed', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('');
    });
  
    test('Check battlepage snapshot is correct', async ({ page,}) => {
      await expect.soft(page).toHaveScreenshot('battle-page.png');
    });
});