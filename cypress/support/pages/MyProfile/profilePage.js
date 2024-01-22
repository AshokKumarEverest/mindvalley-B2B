
/// <reference types="@shelex/cypress-allure-plugin" />


//Profile page 
class ProfilePage{
    navigateToProfilePage(){
        cy.get('div.header-chevron-down').click();
        cy.wait(2000);
        cy.contains("My Account").click();
    }

    validatePageTitle(){
        cy.contains('div.flex.items-center.justify-between > h1', 'My Profile').should('be.visible')
        // cy.contains('div.flex.items-center.justify-between > h1', /^Hello/)
    }

}
export default new ProfilePage();