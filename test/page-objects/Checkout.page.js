// #3a: create Checkout Page class and export an instance of it
import PageObject from './PageObject';

class CheckoutPage extends PageObject {
  constructor() {
    super();
  }

  startCheckOut() {
    // todo
  }

  typeUserInfo(f_name, l_name, postal_code) {
    // todo
  }

  continueCheckout() {
    // todo
  }

  finishCheckout() {
    // todo
  }

  isCheckoutCompletePageLoaded() {
    // todo
  }
}

export const checkoutPage = new CheckoutPage();
