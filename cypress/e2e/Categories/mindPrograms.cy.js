import { invokeApplication } from "../../support/pages/basePage"
import { navigateToMindPrograms } from "../../support/pages/navigation/navCategories"

describe.skip("validate mind programs",()=>{

    it('validate mind programs',()=>{

        invokeApplication()
        navigateToMindPrograms()

        // navigate to super brain program

        cy.xpath("//h3[contains(text(),'Superbrain')]/../../a[text()='Learn More']").click()
        cy.xpath("//h1[text()='Superbrain']").should('be.visible')

    })

})