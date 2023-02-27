### UnSplash Photobook

UnSplash Photobook is a small application that utilizes the API end-points from UnSplash to build out a rudimentatory Photobook application. The idea is to use the end-points, and results thereof to further explore various front-end centric functionality.

## Getting Started


The application is written in Angular 14, and requires, at the very least, NodeJS v18 to be installed.

This is in part due to the fact that pre-v18, TLS support was sparce and to keep/ ensure that our security standards are up to date, we use v18, however, the application should not, not be functional on NodeJS v16.

Simply `clone` the repository, and update the `api_key` property in the global variables file, before firing off a call to launch the website with `npm run dev`.

## Unit Tests

Unit tests are sparse and only caters for the API calls. No tests had been written to test the UI components.

Do not expect to see cool tools like `cucumber` and `gherkin` in here, this is purely a test to see how UnSplash API works and can be used to test ***3rd*** party services.

