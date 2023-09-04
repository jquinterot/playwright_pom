import { test, expect } from '../fixtures/ActionFactoryFixture';

test.describe('@visual Check Poke batle is displayed', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://pvpoke.com/');
    });
  
    test('Check battlepage snapshot is correct', async ({ page,}) => {
      await expect.soft(page).toHaveScreenshot('battle-page.png');
    });
});

test.describe('@visual Check Poke is correctly displayed', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://pvpoke.com/');
    });
  
    test('check Poke Home Page is displayed', async ({ page }) => {
      await expect(page).toHaveScreenshot('home-page.png');
    });
  });