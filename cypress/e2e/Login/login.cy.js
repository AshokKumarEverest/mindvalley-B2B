import LoginPage from "../../support/pages/Login/loginPage"
import { invokeApplication } from "../../support/pages/basePage"

describe("Mind Valley Project POC", () => {

    beforeEach(() => {
        LoginPage.loginIntoApp();
    });

    it("login into the app and validate username", () => {
        cy.contains("Hi, ").should("be.visible");
    });
});


