import loginPage from "../support/pages/Login/loginPage"

describe('validate a video on mindvalley',()=>{

    it('validate video',()=>{

        loginPage.loginIntoApp()
        cy.visit("https://home.mindvalley.com/quests/en/memory/days/1/preview")
        cy.wait(5000)
        cy.get('[data-testid="play-button"]').click()
        cy.wait(5000)
        cy.get('[class="vjs-current-time-display"]').invoke('text').then(time=>{
            cy.log("Video time::"+time)
        })
        cy.get('button[title="Pause"]').should('exist')
        cy.wait(5000)
        cy.get('button[title="Pause"]').first().click({force:true})
        cy.wait(5000)
        cy.get('[class="vjs-current-time-display"]').invoke('text').then(time=>{
            cy.log("Video time::"+time)
        })
        cy.get('button[title="Play"]').should('exist')
        cy.wait(5000)
        cy.get('button[title="Play"]').last().click({force:true})
        cy.wait(5000)
        cy.get('button[title="Pause"]').should('exist')
        cy.get('[class="vjs-current-time-display"]').invoke('text').then(time=>{
            cy.log("Video time::"+time)
        })
        
        
        
    })

})