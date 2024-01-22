class navCategories{

    navigateToMindPrograms(){
        cy.contains("Categories").click().then(()=>{
            cy.contains("Mind").click()
        })
        cy.url().should("contain","programs/mind")
        cy.contains("//h2[text()='Mind programs']").should('be.visible')
    }
}

export default new navCategories()