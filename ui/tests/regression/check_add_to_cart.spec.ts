import { test } from '../../fixtures/ActionFactoryFixture';
import { Products } from '../../enums/Products';
import { MenuOptions } from '../../enums/MenuOptions';

test.describe('@regression Check that a product can be added to the cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check that a samsung cellphone can be added', async ({
    actionFactory,
    page,
  }) => {
    const homeActions = actionFactory.createHomeActions();
    const productActions = actionFactory.createProductActions();
    const cartActions = actionFactory.createCartActions();

    await test.step('When Select Phone category', async () => {
      await homeActions.selectCategory('Phones');
    });

    await test.step('And Select Samsung Galaxy S6 product', async () => {
      await homeActions.selectProduct(Products.GALAXY_S6);
    });

    await test.step('Then Samsung Galaxy S6 is displayed in product summary page', async () => {
      await productActions.checkAddedProduct(Products.GALAXY_S6);
      await productActions.checkProductPrice();
    });

    await test.step('When adds the Samsung Galaxy S6 to the cart', async () => {
      await productActions.addToCart();
    });

    await test.step('When goes to cart', async () => {
      await homeActions.selectMenuOption(MenuOptions.CART);
    });

    await test.step('Then the Samsung Galaxy S6 is added to cart', async () => {
      await cartActions.checkProductIsDisplayed(Products.GALAXY_S6);
    });

    await test.step('And the Samsung Galaxy S6product is deleted', async () => {
      await cartActions.deleteProductFromCard(Products.GALAXY_S6);
    });
  });
});
