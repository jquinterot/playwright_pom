import { test } from '../../helpers/fixtures/ActionFactoryFixture';
import { Phones, PhonePrices } from '../../helpers/enums/Products';
import { MenuOptions } from '../../helpers/enums/MenuOptions';
import { Categories } from '../../helpers/enums/Categories';

test.describe('@regression Check that a product can be added to the cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check that a Samsung cellphone can be added', async ({
    actionFactory,
  }) => {
    const homeActions = actionFactory.createHomeActions();

    await test.step('When selects Phone category', async () => {
      await homeActions.selectCategory(Categories.PHONES);
    });

    await test.step('And selects Samsung Galaxy S6 product', async () => {
      await homeActions.selectProduct(Phones.GALAXY_S6);
    });

    const productActions = actionFactory.createProductActions();

    await test.step('Then Samsung Galaxy S6 is displayed in product summary page', async () => {
      await productActions.checkAddedProduct(Phones.GALAXY_S6);
      await productActions.checkProductPrice(PhonePrices.GALAXY_S6_PRICE);
    });

    await test.step('When adds the Samsung Galaxy S6 to the cart', async () => {
      await productActions.addToCart();
    });

    await test.step('And goes to cart', async () => {
      await homeActions.selectMenuOption(MenuOptions.CART);
    });

    const cartActions = actionFactory.createCartActions();

    await test.step('Then the Samsung Galaxy S6 is added to cart', async () => {
      await cartActions.checkProductIsDisplayed(Phones.GALAXY_S6);
    });

    await test.step('And the Samsung Galaxy S6 product is deleted', async () => {
      await cartActions.deleteProductFromCard(Phones.GALAXY_S6);
    });
  });
});
