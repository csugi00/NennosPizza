# NennosPizza

Automated mobile test for Nenno's Pizza application with CodeceptJS.
Reports are also generated for Allure.

## How to run

To run locally, just need an Appium server and an Android emulator or real device.
For these tests, i used Android Studio's emulator.

- First, just get the repo, install the packages needed (run npm install).
- Start the Appium server and the emulator.
- Then run the tests simply with the following commands:
```js
npx codeceptjs run
```
If you need more detailed console report, use `--steps` or for more detailed, use `--verbose` or `--debug`

After the test run finished, to see the generated reports in browser, use this command in the root of the project:
```
allure serve output
```

## Used Stacks

* [CodeceptJS](https://codecept.io/)- CodeceptJS with webdriverio and Gherkin
* [Appium](https://appium.io/)- Appium automation framework
* [Android Studio](https://developer.android.com/studio)- Android Studio for Emulator
* [CodeceptJS Allure plugin](https://codecept.io/plugins/#allure)- Allure reporting

## Author

* **Gergely Csugányi** - [csugi](https://github.com/csugi00)