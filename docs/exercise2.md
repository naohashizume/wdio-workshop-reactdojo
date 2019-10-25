# Exercise 2: Assertion library

#### 2-1. Install Chai

Since we use [Mocha](https://mochajs.org/), we want to install an assertion library for more expressive tests. Chai is a good one. 

```
$ npm install --save-dev chai
```


#### 2-2. Initialize it in the `before` hook
Add the following code in `wdio.conf.js`. By doing this, we don't have to initialise this modules each in test file.

```
// wdio.conf.js
before: function() {
    const chai = require('chai');
    global.expect = chai.expect;
}
```

Once that is done, you can write assertions like:

```
describe('WebdriverIO website', () => {
  it('should have correct title', () => {
    browser.url('https://webdriver.io');
    expect(browser.getTitle()).to.equal(
      'WebdriverIO · Next-gen WebDriver test framework for Node.js'
    );
  });
});
```

If you want to define other Mocha-specific settings, you can do it with the mochaOpts key in your configuration file. A list of all options can be found on the [Mocha project website](https://mochajs.org/).

WDIO runner supports [Mocha](http://mochajs.org/), [Jasmine](http://jasmine.github.io/), and [Cucumber](https://cucumber.io/). Please read if you're interested in more details of framework. https://webdriver.io/docs/frameworks.html

Please 👍 to my comment in the slack channel after you completed this exercise.

[◀️ Back to Exercise 1](./exercise1.md)

[Go to Exercise 3 ▶️](./exercise3.md)