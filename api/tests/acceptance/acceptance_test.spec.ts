import { test, expect } from '@playwright/test';
import { CatFact } from '../../types/CatFact';
import { CatFactController } from '../../controllers/CatFactController';

test('should get cats', async ({ request }) => {
  await test.step('Given user GET cat facts', async () => {
    const catFactController = new CatFactController(request);
    const catFacts: CatFact = await catFactController.getCatFact();

    expect(catFacts).toHaveProperty('fact');
    expect(catFacts).toHaveProperty('length');
    expect(catFacts).not.toBe(null);
  });
});
