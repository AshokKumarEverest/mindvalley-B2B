import LoginPage from "../../support/pages/Login/loginPage"
import ProfilePage from "../../support/pages/MyProfile/profilePage"

describe("Profile Page", () => {

    beforeEach(() => {
        LoginPage.loginIntoApp();
    });

    it("login into the app validate name in profile page", () => {
        cy.wait(5000);
        ProfilePage.navigateToProfilePage();
        ProfilePage.validatePageTitle();
    });
});