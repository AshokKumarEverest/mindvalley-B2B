import BasePage from "./basePage"

class HomePage extends BasePage{

    verifyNavMenu(){
        cy.contains("Today").should('be.visible')
        cy.contains("Programs").should('be.visible')
        cy.contains("Live").should('be.visible')
        cy.contains("Connect").should('be.visible')
        cy.contains("Insights").should('be.visible')
    }
    
}

export default new HomePage()