const basePage  = require("../../support/pages/basePage")
const  navCategories  = require("../../support/pages/navigation/navCategories")

describe("validate mind programs",()=>{

    it('validate mind programs',()=>{

        basePage.invokeApplication()
        navCategories.navigateToMindPrograms()

        // navigate to super brain program

        cy.xpath("//h3[contains(text(),'Superbrain')]/../../a[text()='Learn More']").click()
        cy.xpath("//h1[text()='Superbrain']").should('be.visible')

    })

})