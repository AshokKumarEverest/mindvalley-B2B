# mindvalley-B2B

## Pre-requisites

- Node.js should have been installed
  - check using `node -v`.
  - check nvm using `nvm -v`.
  - install **node** and **nvm** if not installed already.
- Install **allure** dependency by following [allure](https://github.com/allure-framework/allure2) page to install if not installed already.

## Steps to run tests

- Clone git repo from ``.
- Copy `.env-sample` and name it as `.env` and update user password in it.make sure that `.env` file is in root folder.
- Install dependencies by running command `yarn`.

- Running tests
  - **Using Cypress studio**
    - Run `npx cypress open --e2e -b chrome` command to open cypress studio.
    - Click on any spec file to run scripts in it.
  - **From Command line**
    - npx cypress run --env allure=true --reporter mocha-allure-reporter
  - **To Run Specific file**
    - npx cypress run --spec 'cypress/e2e/Login/login.cy.js' --env allure=true --reporter mocha-allure-reporter
  - **To Generate Allure report**
    - npm run allure:report
   
