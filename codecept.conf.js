exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'D:\\Projects\\mobile\\test\\NennosPizza\\app\\nennosPizza.apk',
      platform: 'Android',
      device: 'emulator',
      desiredCapabilities: {
        app: '\\app\\nennosPizza.apk',
        appPackage: 'com.docler.nennospizza',
        appActivity: 'com.docler.nennospizza.ui.pizzaList.PizzaListActivity',
        platformVersion: '13.0'
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      mochaFile: "output/result.xml",
      reportDir: "output"
    }
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.steps.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: true,
    },
    allure: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  name: 'NennosPizza'
}