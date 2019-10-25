import { loginPage } from '../page-objects/Login.page';

describe('Login page', () => {
  it('Standard user - login successfully', () => {
    loginPage.open('');
    loginPage.loginAs('standard_user', 'secret_sauce');

    console.log(
      'Is shopping cart displayed?',
      loginPage.isShoppingCartContainerVisibile()
    );
    expect(loginPage.isShoppingCartContainerVisibile()).to.be.true;
  });

  // #1c - Create a test case for problem user cannot login
  it('Problem user - cannot login successfully', () => {
    // login as a problem user
    // assert if error is visible
  });
});
