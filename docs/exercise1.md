# Exercise 1: Installation and Setup

The goal of this exercise is to show you how to get your first WebdriverIO script and running.

If you run into problems, you can find more detailed notes and steps from here. https://webdriver.io/docs/gettingstarted.html

Let's get started!

#### 1-1. Before you begin

Please clone this workshop repository

```
$ git clone <url>
```

Initialize a new npm project before installing dependencies. The `-y` will answer `yes` to all the prompts, giving you a standard npm project. Feel free to omit the `-y` if you'd like to specify your own project details.

```
$ cd wdio-workshop-reactdojo-2019
$ npm init -y
```

#### 1-2. Install WebdriverIO CLI

If you want to use WebdriverIo in your project, I recommend using the test runner. It comes with lots of useful features.

```
$ npm i ---save-dev @wdio/cli
```

#### 1-3. Generate WDIO Config

To generate a configuration file to store your WebdriverIO settings.

```
$ ./node_modules/.bin/wdio config
```

It will prompt following questions

Config Responses:

<img width="540" alt="Screen Shot 2019-10-20 at 4 18 20 PM" src="https://user-images.githubusercontent.com/35462805/67168085-46f8f000-f355-11e9-98ae-2032c3d330a5.png">

The configurator will install all required packages for you and create a config file called `wdio.conf.js`.

#### 1-4. Babel Setup

To write tests using next-generation JavaScript features, you can use `Babel` to compole your test files.

To do so, install the necessary Babel dependencies.

```
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
```

Create `babel.config.js` in your root directory and paste the following code.

```
// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ]
}
```

To set up Babel using this WebdriverIO testrunner, you can use internal `require` to register Babel.

```
// wdio.conf.js
mochaOpts: {
    ui: 'bdd',
    require: ['@babel/register'],
    timeout: 60000
},
```

#### 1-5. Modify WebdriverIO configuration

Let's get familiar with the WebdriverIO config file. We will do this by changing/setting a few options. Implement the following changes and see what they do!

- Change **maxInstances** to `1` from `10` for now

```
maxInstances: 1,
```

- Change **maxInstances** in **capabilities** to `1` from `5` for now

```
capabilities: [
    {
        maxInstances: 1,
```

- Change **logLevel** to `info` from `debug`

```
logLevel: 'error',
```

- Add another capability in the config to run your tests on Chrome.
  https://webdriver.io/docs/options.html#capabilities

```
browserName: 'chrome',
```

- Set a base URL to shorten url command calls

```
baseUrl: 'https://www.saucedemo.com',
```

#### 1-6. Run your tests

Now, time to run your tests!

To do so, just run:

```
./node_modules/.bin/wdio wdio.conf.js
```

The test should pass, and you can start writing End-to-end tests with WebdriverIO in next exercise!

[ ◀️ Back to Pre-requisites](README.md)

[Go to Exercise 2 ▶️](./exercise2.md)
