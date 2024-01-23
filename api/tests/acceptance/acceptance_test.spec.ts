import { test, expect } from '@playwright/test';
import { CatFact } from '../../types/CatFact';
import { CatFactController } from '../../controllers/CatFactController';

test('Cat Fact Service @acceptance', async ({ request }) => {
  let catFacts: CatFact;

  await test.step('Given user GET cat facts', async () => {
    const catFactController = new CatFactController(request);
    catFacts = await catFactController.getCatFact();
  });

  await test.step('Then cat fact response should contain correct properties', async () => {
    expect(catFacts).toHaveProperty('fact');
    expect(catFacts).toHaveProperty('length');
    expect(catFacts).not.toBe(null);
  });
});
