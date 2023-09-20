import { test, expect } from '../../fixtures/ActionFactoryFixture';

test.describe('@visual Check Demoblaze home page is successfully displayed', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check Demoblaze home page screenshot is correct', async ({ page }) => {
    await expect(page).toHaveScreenshot('home-page.png');
  });
});
