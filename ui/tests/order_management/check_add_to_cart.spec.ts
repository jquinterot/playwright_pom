import { test } from '../../helpers/fixtures/ActionFactoryFixture';
import { Phones, PhonePrices } from '../../helpers/enums/Products';
import { MenuOptions } from '../../helpers/enums/MenuOptions';
import { Categories } from '../../helpers/enums/Categories';
import { CartFlows } from '../../helpers/flows/CartFlows';

test.describe('@regression Check that a product can be added to the cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Check that a Samsung cellphone can be added', async ({
    actionFactory,
  }) => {
    const homeActions = actionFactory.createHomeActions();

    await test.step('Given product is added to cart', async () => {
      await CartFlows.addProductToCart(
        actionFactory,
        Phones.GALAXY_S6,
        PhonePrices.GALAXY_S6_PRICE,
      );
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
