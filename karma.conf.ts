module.exports = (config) => {

  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular'
    ],
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-coverage',
      'karma-remap-istanbul',
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      '@angular-devkit/build-angular/plugins/karma',
      'karma-jasmine-html-reporter'
    ],
    client: {
      clearContext: true
    },
    coverageIstanbulReporter: {
      dir: './coverage/',
      reports: ['lcovonly', 'html'],
      fixWebpackSourcePaths: true,
      combineBrowserReports: true,
      verbose: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['coverage-istanbul', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
}
