//Login page 
class LoginPage{
    loginIntoApp(){
        cy.visit("/");
        cy.get('#login-email').type(Cypress.env('username'));
        cy.get('#login-password').type(Cypress.env('password'))
        cy.get('#btn-login').click();
        cy.viewport(1400, 1050)
    }

}
export default new LoginPage();