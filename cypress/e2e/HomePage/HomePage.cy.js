const { default: basePage } = require("../../support/pages/basePage")
const { default: homePage } = require("../../support/pages/homePage")

describe("Verify Application home page",()=>{

    beforeEach('Invoke application',()=>{
        basePage.invokeApplication()
    })

    it("Verify Homepage nav menu",()=>{
        
        homePage.verifyNavMenu()
        
    })

})