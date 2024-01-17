/// <reference types="@shelex/cypress-allure-plugin" />

// import '@shelex/cypress-allure-plugin';
// require('@shelex/cypress-allure-plugin');

//Login page 
class LoginPage{
    loginIntoApp(){
        cy.visit("https://home.mindvalley.com/");
        cy.get('#login-email').type("ashok.kumar.n@everest.engineering");
        cy.get('#login-password').type('ashok@mv1')
        cy.get('#btn-login').click();
        cy.viewport(1400, 1050)
    }

}
export default new LoginPage();