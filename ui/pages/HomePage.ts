import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getNavBarTitle = () => this.page.getByRole('link', { name: 'PRODUCT STORE' });

  getCategoryItems = (category:string) => this.page.getByRole('link', { name: `${category}`});

  getProduct = (product:string) =>  this.page.getByRole('link', {name: `${product}`});

  getNavbarMenuOption = (menuOption:string) => this.page.getByRole('link', {name: `${menuOption}`, exact: true});
}
