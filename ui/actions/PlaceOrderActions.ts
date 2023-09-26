import { CustomerInfo } from '../../types/CustomerInfo';
import { PlaceOrderPage } from '../pages/PlaceOrderPage';
import { Page, expect } from '@playwright/test';

export class PlaceOrderActions {
  private placeOrderPage: PlaceOrderPage;

  constructor(page: Page) {
    this.placeOrderPage = new PlaceOrderPage(page);
  }

  async fillName(name:string) {
    await this.placeOrderPage.getNameInput().fill(name);
  }

  async fillCountry(country:string) {
    await this.placeOrderPage.getCountryInput().fill(country);
  }

  async fillCity(city:string) {
    await this.placeOrderPage.getCityInput().fill(city);
  }

  async fillCard(cardNumber:string) {
    await this.placeOrderPage.getCardInput().fill(cardNumber);
  }

  async fillMonth(month:string) {
    await this.placeOrderPage.getMonthInput().fill(month);
  }

  async fillYear(year:string) {
    await this.placeOrderPage.getYearInput().fill(year);
  }

  async selectPurchase(){
    await this.placeOrderPage.getPurchaseButton().click();
  }

  async isThankYouMessageIsDisplayed(){
    await expect(this.placeOrderPage.getThankYouLabel()).toBeVisible();
  }
}