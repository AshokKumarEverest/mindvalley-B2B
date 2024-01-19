import LoginPage from "/cypress/support/pages/Login/loginPage"

describe("Mind Valley Project POC", () => {

    beforeEach(() => {
        LoginPage.loginIntoApp();
    });

    it("login into the app and validate username", () => {
        cy.contains("Hi, ").should("be.visible");
    });
});


