# Exercise 3: Test Login page

The goal of this exercise is to use Page Object Pattern and write first test case for Login page.
In the tests directory, there is a file called `Login.test.js` in which you'll find some scenario's to be implemented. Let's use the `Login.page.js` to create a page object to be used in your tests.

#### 3-1. Create a Page object

`Page Object Model` is a design pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication.

 This is normally where all calls to WebdriverIO will be written. Thus, when the UI changes, **this is the only place you need to modify**. It **should not make assertions themselves**.

Let's create a main object that we call `PageObject`. It will contain general selectors or methods which all page objects will inherit from.

```
// test/page-objects/PageObject.js
export default class Page {
    constructor() {}

    open(path) {
        browser.url(path)
    }
}
```

We will always export an instance of a page object, and never create that instance in the test.

Let's start testing the Login page. For demo purposes, we use [SwagLabs](https://www.saucedemo.com) website by [SauceLabs](https://saucelabs.com/) as guinea pig. Let's try to build a page object example for the Login page.

#### 3-2. Create Login page object

The first step is to write all important selectors that are required in our Login.page object as getter functions:

```
// test/page-objects/Login.page.js
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
}

export const loginPage = new LoginPage();
```

Defining selectors in getter functions might look a little weird, but it’s really useful. 

These functions are evaluated when you access the property, not when you generate the object. With that you always request the element before you do an action on it.

#### 3-3. Use Login page object in your tests

After you've defined necessary UI selectors and methods for Login page, you can start to write the test for it. To use the page object, let's `import`(or`require`) it. 

```
// test/specs/Login.test.js
import { loginPage } from '../page-objects/Login.page';

describe('Login page', () => {

  it('Standard user - login successfully', () => {
    loginPage.open('');
    loginPage.loginAs('standard_user', 'secret_sauce');
    
    console.log('Is shopping cart displayed?', loginPage.isShoppingCartContainerVisibile()); 
    expect(loginPage.isShoppingCartContainerVisibile()).to.be.true;
  });
});

```

Now save the file and return to your terminal.

#### 3-4.Start the Testrunner

Now, it's time to test Login page!

To do so, just run:

```
./node_modules/.bin/wdio wdio.conf.js
```

Let's add this command as a npm script in `package.json`.

```
// package.json
...,
"scripts": {
    "e2e:local": "./node_modules/.bin/wdio wdio.conf.js",
  },
...,
```

After this, you can End-to-end test by:

```
$ npm run e2e:local
```

Hurray! This test should pass! 💯 ✅

#### 3-5. Create a new test case for Login failure

Let's try to create a new test case by yourself!

### 🚀 CHALLENGE 1 🚀 **Add a new test case for validating login failure.**

### 💬 Hint 💬 

#### 1. You'd want to create a method and add selector in `Login.page.js`

#### 2. You'd want to create a test case in `Login.test.js` such as 
```
it('a test case', function () {
    // do something
    // assert something
});
```

Please 👍 to my comment in the slack channel after you completed this exercise & challenge.

[ ◀️ Back to Exercise 2](./exercise2.md)

[Go to Exercise 4 ▶️](./exercise4.md)
