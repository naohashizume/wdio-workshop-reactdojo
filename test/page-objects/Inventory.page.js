// #2a: create Inventory Page class and export an instance of it

import PageObject from './PageObject';

class InventoryPage extends PageObject {
  constructor() {
    super();
  }

  get addBtn() {
    return $('.btn_primary');
  }
  get removeBtn() {
    return $('.btn_secondary');
  }
  get shoppingCartBadge() {
    return $('.shopping_cart_badge');
  }
  get menuBtn() {
    return $('.bm-burger-button');
  }
  get resetAppStateBtn() {
    return $('#reset_sidebar_link');
  }
  get closeBtn() {
    return $('.bm-cross-button');
  }

  open() {
    super.open('/inventory.html');
  }

  addItem() {
    // todo: write function to click add button
  }

  removeItem() {
    // todo: write function to click remove button
  }

  getNumberOfItemsInCart() {
    // todo: write function to get text from shopping cart badge
  }

  resetAppState() {
    this.menuBtn.click();
    this.resetAppStateBtn.click();
    this.closeBtn.click();
  }
}

export const inventoryPage = new InventoryPage();
