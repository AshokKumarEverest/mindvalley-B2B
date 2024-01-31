
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

require('dotenv').config()

// const reportDir = "/cypress/allure-results/";

module.exports = defineConfig({
  // allureResultsPath: reportDir,
  // allureReuseAfterSpec: true,
  // allureAttachRequests: true,
  // // allureClearSkippedTests: false,
  chromeWebSecurity: false,
  projectId:"g46zig",
  
  e2e: {
    pageLoadTimeout:600000,
    baseUrl : process.env.BASEURL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
  env:{
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    
    loginUrl: process.env.LOGINURL,
  }
});

