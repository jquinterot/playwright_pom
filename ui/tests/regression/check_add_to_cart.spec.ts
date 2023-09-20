import { test } from '../../fixtures/ActionFactoryFixture';
import { Products } from '../../enums/EnumExample';

test.describe('@regression Check that a product can be added to the cart', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check that a samsung cellphone can be added', async ({ actionFactory }) => {

    const homeActions = actionFactory.createHomeActions();
    const productActions = actionFactory.createProductActions();

    await test.step('Select Phone category', async () => {
      await homeActions.selectCategory('Phones');
    });

    await test.step('Select Galaxy S6 product', async () => {
      await homeActions.selectProduct(Products.GALAXY_S6);
    });

    await test.step('Check Galaxy S6 is displayed in product summary page', async () => {
        await productActions.checkAddedProduct(Products.GALAXY_S6);
      });
  });
});
