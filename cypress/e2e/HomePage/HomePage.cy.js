import { default as basePage } from "../../support/pages/basePage"
import { default as homePage } from "../../support/pages/homePage"

describe.skip("Verify Application home page",()=>{

    beforeEach('Invoke application',()=>{
        basePage.invokeApplication()
    })

    it("Verify Homepage nav menu",()=>{
        
        homePage.verifyNavMenu()
        
    })

})