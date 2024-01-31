import BasePage from "../basePage";

//Profile page
class ProfilePage extends BasePage{
  navigateToProfilePage() {
    cy.get("div.header-chevron-down").click();
    cy.wait(2000);
    cy.contains("My Account").click();
  }

  validatePageTitle() {
    cy.contains(
      "div.flex.items-center.justify-between > h1",
      "My Profile"
    ).should("be.visible");
  }
}
export default new ProfilePage();
