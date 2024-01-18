
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// const reportDir = "/cypress/allure-results/";

module.exports = defineConfig({
  // allureResultsPath: reportDir,
  // allureReuseAfterSpec: true,
  // allureAttachRequests: true,
  // // allureClearSkippedTests: false,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});

