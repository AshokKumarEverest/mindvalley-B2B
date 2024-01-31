import loginPage from "../../support/pages/Login/loginPage"
import navCategories from "../../support/pages/navigation/navCategories"

describe("validate mind programs",()=>{

    it('validate mind programs',()=>{

        loginPage.invokeApplication()
        navCategories.navigateToMindPrograms()

        // navigate to super brain program

        cy.xpath("//h3[contains(text(),'Superbrain')]/../../a[text()='Learn More']").click()
        cy.xpath("//h1[text()='Superbrain']").should('be.visible')

    })

})