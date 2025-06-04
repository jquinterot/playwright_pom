import { ActionFactory } from '../../actions/ActionsFactory';
import { Phones, PhonePrices } from '../enums/Products';
import { Categories } from '../enums/Categories';

export class CartFlows {
  static async addProductToCart(
    actionFactory: ActionFactory,
    product: Phones,
    price: PhonePrices
  ) {
    const homeActions = actionFactory.createHomeActions();
    await homeActions.selectCategory(Categories.PHONES);
    await homeActions.selectProduct(product);

    const productActions = actionFactory.createProductActions();
    await productActions.checkAddedProduct(product);
    await productActions.checkProductPrice(price);
    await productActions.addToCart();
  }
}