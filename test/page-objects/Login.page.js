// #1a - Add UI selectors & method
import PageObject from './PageObject';

class LoginPage extends PageObject {
  constructor() {
    super();
  }

  get userName() {
    return $('#user-name');
  }
  get passWord() {
    return $('#password');
  }
  get submitBtn() {
    return $('.btn_action');
  }
  get shoppingCartContainer() {
    return $('#shopping_cart_container');
  }

  loginAs(username, password) {
    this.userName.setValue(username);
    this.passWord.setValue(password);
    this.submitBtn.click();
  }

  isShoppingCartContainerVisibile() {
    return this.shoppingCartContainer.isDisplayed();
  }

  // #1b: Add a method to test fail login
  isErrorVisible() {
    // return something
  }
}

export const loginPage = new LoginPage();
