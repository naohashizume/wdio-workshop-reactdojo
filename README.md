# End-to-end test automation with WebdriverIO for modern React applications

This workshop will help you to set up and run End-to-end tests with WebdriverIO.

I will walk you through all the steps to get started writing automated browser tests successfully including following 5 exercises.

## Summary

- Exercise 1: [Installation and Setup](docs/exercise1.md)
- Exercise 2: [Chai Assertions](docs/exercise2.md)
- Exercise 3: [Test SwagLabs Website (https://www.saucedemo.com/) Login page](docs/exercise3.md)
- Exercise 4: [Test Inventory & Checkout page](docs/exercise4.md)
- Exercise 5: [Run test with Docker & Zalenium 🐳](docs/exercise5.md)

### What is WebdriverIO?

WebdriverIO is an open source test automation tool. It lets you control a browser or a mobile application with just a few lines of code. It basically sends requests to a Selenium server via the [Webdriver Protocol](https://www.w3.org/TR/webdriver/) and handles its response.

### 0. Pre-requisites

Please intall **Node.js**, **npm**, and **Java Development Kit (JDK)** (Selenium Server is a Java application)

#### Node.js (https://nodejs.org/en/)

Please follow the instructions for install. To check installation is successful, run `node -v` in the terminal, you should see the Node version installed.

```
$ node -v
v10.13.0
```

#### npm (https://www.npmjs.com/)

This will be installed with node. To check, run `npm -v` in the terminal, you should see the npm version installed. If not installed, please follow the instructions for install from the link above.

```
$ npm -v
6.4.1
```

#### Java Development Kit (https://www.java.com/en/download/)

Please install and add to your path (This is a requirement for WebdriverIO)

```
$ java --version
openjdk 12.0.1 2019-04-16
OpenJDK Runtime Environment (build 12.0.1+12)
OpenJDK 64-Bit Server VM (build 12.0.1+12, mixed mode, sharing)
```

<details>
    <summary><b>Install Java on Mac 💻</b></summary>
        You can use `homebrew` to insatll latest JDK:
        ```
        $ brew cask install java
        ```
</details>

That's all for preparing to use WebdriverIO!
Please 👍 to my comment in the slack channel after you completed this exercise.

Let's move on to installation and setup WebdriverIO configuration in next exercise!!

[Go to Exercise 1 ▶️](docs/exercise1.md)
