# Exercise 5: Run End-to-end test with Docker & Zalenium

If you don't want to use Selenium Standalone from WebdriverIO, you can start a Selenium server using Docker 🐳

Zalenium uses `docker-selenium` to run your tests in Firefox and Chrome locally.

### Why Zalenium?

- Recordings of your test runs 📹
- A dashboard where you can see all the tests that you executed by order of execution 📋
- There is very user-friendly and extensive documentation on the GitHub repository 😉
- Zalenium can run in Docker, Kubernetes, AWS, Google Compute Engine and OpenShift

#### 5-1. Pre-requisites

✅ Make sure you have already installed both [Docker Engine](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/). You can find more details from here. https://docs.docker.com/compose/gettingstarted/

✅ Make sure your docker daemon is running (e.g. `$ docker info` works without errors).

✅ Pull the docker-selenium image & zalenium

```
$ docker pull elgalu/selenium

$ docker pull dosel/zalenium
```

#### 5-2. Create WDIO docker config

Let's create a WebdriverIO configuration file(`wdio.docker.conf.js`) for running tests using Docker.

Paste following code in `wdio.docker.conf.js`:

```
exports.config = {
  hostname: 'localhost', // new!!!
  port: 4444, // new!!!
  path: '/wd/hub', // new!!!
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: ['--disable-gpu']
      }
    }
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    require: ['@babel/register'],
    timeout: 60000
  },
  before: function() {
    const chai = require('chai');
    global.expect = chai.expect;
  }
};
```

#### 5-3. Run End-to-end test

Let's start a Selenium server with Zalenium:

```
$ docker-compose up -d zalenium
```

Go to http://localhost:4444/ to see if zalenium is started successfully. This normally takes in 30 seconds.

Since we have two options to run E2E tests(using `selenium-standalone-service` & `zalenium`). Let's add another npm script to use `wdio.docker.conf.js`.

```
// package.json
...,
"scripts": {
    "e2e:docker": "./node_modules/.bin/wdio wdio.docker.conf.js",
  },
...,
```

After this, you can End-to-end test by:

```
$ npm run e2e:docker
```

#### 5-4. Check Live Tests

Visit http://localhost:4444/grid/admin/live to see live preview of your running tests.

#### 5-5. Check Test Dashboard

Visit http://localhost:4444/dashboard/ to see all the videos and aggregated logs after your tests completed.

That's it! With Docker, we can integrate this End-to-end tests into your CI/CD pipeline very easily.

[ ◀️ Back to Exercise 4](./exercise4.md)
