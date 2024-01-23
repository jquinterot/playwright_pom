import { test, expect } from '@playwright/test';
import { CatFact } from '../../types/CatFact';
import { CatFacts } from '../../types/CatFacts';
import { CatFactController } from '../../controllers/CatFactController';
import { CAT_FACTS } from '../../objects/CatFacts';

test('Check GET /fact @acceptance', async ({ request }) => {
  let catFact: CatFact;

  await test.step('Given user GET cat facts', async () => {
    const catFactController = new CatFactController(request);
    catFact = await catFactController.getCatFact();
  });

  await test.step('Then cat fact response should contain correct properties', async () => {
    expect(catFact).toHaveProperty('fact');
    expect(catFact).toHaveProperty('length');
    expect(catFact).not.toBe(null);
  });
});

test('Check GET /facts @acceptance', async ({ request }) => {
  let catFacts:CatFacts;

  await test.step('Given user GET cat facts', async () => {
    const catFactController = new CatFactController(request);
    catFacts = await catFactController.getCatFacts();
  });

  await test.step('Then cat facts response should be correct', async () => {
    expect(catFacts).toMatchObject(CAT_FACTS);
    expect(catFacts.data[0].fact).toEqual('Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.');
    expect(catFacts.data[0].length).toEqual(114);
  });
});
