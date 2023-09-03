import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('@accessibility Check Pokepage accessibility', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('');
    //soft assertions
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
    //just to make it pass it needed
    //expect(accessibilityScanResults.violations).not.toEqual([]);
  });
});
