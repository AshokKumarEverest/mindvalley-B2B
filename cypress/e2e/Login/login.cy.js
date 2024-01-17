import LoginPage from "/cypress/support/pages/Login/loginPage"
// import '@shelex/cypress-allure-plugin';
// require('@shelex/cypress-allure-plugin');

describe("Mind Valley Project POC", () => {

    beforeEach(() => {
        LoginPage.loginIntoApp();
    });

    it("login into the app and validate username", () => {
        cy.contains("Hi, Ashok").should("be.visible");
    });
});


