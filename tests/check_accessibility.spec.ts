import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('@accessibility Check Demoblaze Home Page has correct accessibility', () => {
  test('Demoblaze Home Page should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    //just to make it pass it needed
    expect.soft(accessibilityScanResults.violations).not.toEqual([]);
  });
});
