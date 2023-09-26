import { test } from '../../fixtures/ActionFactoryFixture';
import { Products } from '../../enums/Products';
import { MenuOptions } from '../../enums/MenuOptions';
import { johnCardInfo } from '../../../objects/CardInfo';
import { johnInfo } from '../../../objects/CustomerInfo';
import { CardInfo } from '../../../types/CardInfo';
import { PlaceOrderActions } from '../../actions/PlaceOrderActions';

test.describe('@regression Check place order', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('');
    });
  
    test('Check that a samsung cellphone can be ordered', async ({
      actionFactory
    }) => {
      const homeActions = actionFactory.createHomeActions();
      const productActions = actionFactory.createProductActions();
      const cartActions = actionFactory.createCartActions();
      const placeOrderActions = actionFactory.createPlaceOrderActions();
  
      await test.step('When selects Phone category', async () => {
        await homeActions.selectCategory('Phones');
      });
  
      await test.step('And selects Samsung Galaxy S6 product', async () => {
        await homeActions.selectProduct(Products.GALAXY_S6);
      });
  
      await test.step('Then Samsung Galaxy S6 is displayed in product summary page', async () => {
        await productActions.checkAddedProduct(Products.GALAXY_S6);
        await productActions.checkProductPrice();
      });
  
      await test.step('When adds the Samsung Galaxy S6 to the cart', async () => {
        await productActions.addToCart();
      });
  
      await test.step('And goes to cart', async () => {
        await homeActions.selectMenuOption(MenuOptions.CART);
      });
  
      await test.step('Then the Samsung Galaxy S6 is added to cart', async () => {
        await cartActions.checkProductIsDisplayed(Products.GALAXY_S6);
      });
  
      await test.step('And the Samsung Galaxy S6product is deleted', async () => {
        await cartActions.deleteProductFromCard(Products.GALAXY_S6);
      });

      await test.step('When selects place order', async () => {
        await cartActions.selectPlaceOrder();
      });

      await test.step('And fills place order form', async () => {
        await placeOrderActions.fillName(johnInfo.name);
        await placeOrderActions.fillCountry(johnInfo.country);
        await placeOrderActions.fillCity(johnInfo.city);
        await placeOrderActions.fillCard(johnCardInfo.number);
        await placeOrderActions.fillMonth(johnCardInfo.month);
        await placeOrderActions.fillMonth(johnCardInfo.year);
      });

      await test.step('And selects purchase', async () => {
        await placeOrderActions.selectPurchase();
      });

      await test.step('Then thank you message is displayed', async () => {
        await placeOrderActions.isThankYouMessageIsDisplayed();
      });
    });
  });
