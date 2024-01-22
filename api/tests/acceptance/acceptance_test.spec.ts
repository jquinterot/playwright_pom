import { test  } from '@playwright/test';
import { CatFact } from '../../types/CatFact';
import { CatFactController } from '../../controller/CatFactController';

test('should get cats', async ({ request }) => {
    await test.step('Given user GET cat facts', async () => {
        const catFactController = new CatFactController(request);
        const catFacts:CatFact = await catFactController.getCatFact(); 
       
        console.log(catFacts.fact);
    })
})