### UnSplash Photobook

UnSplash Photobook is a small application that utilizes the API end-points from UnSplash to build out a rudimentatory Photobook application. The idea is to use the end-points, and results thereof to further explore various front-end centric functionality.

## Getting Started


The application is written in Angular 15, and requires, at the very least, NodeJS v16 to be installed.

Simply `clone` the repository, and update the `api_key` property in the global variables file, before firing off a call to launch the website with `npm run start` and view the web site on the default URL: `http://localhost:4200`.

## Unit Tests

Unit tests are sparse and only caters for the API calls. No tests had been written to test the UI components.

Do not expect to see cool tools like `cucumber` and `gherkin` in here, this is purely a test to see how UnSplash API works and can be used to test ***3rd*** party services.

To run the test, you have either the option of the standard `npm run test` command, which will launch ***Jasmine*** runner in your default browser, or the headless command, `npm run headless`, to display the runs in the console window.
