export default class BasePage {
  invokeApplication() {
    cy.viewport(1440, 1060);
    cy.visit('/');
  }
}
