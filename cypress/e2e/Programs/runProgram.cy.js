import LoginPage from "/cypress/support/pages/Login/loginPage"
import ProgramsPage from "/cypress/support/pages/Programs/programsPage"
// import '@shelex/cypress-allure-plugin';
// require('@shelex/cypress-allure-plugin');

describe.skip("Mind Valley Project POC", () => {

    beforeEach(() => {
        LoginPage.loginIntoApp();
    });

    it("should navigate to programs and click on program `5 Days To A Powerful Memory` and play lesson 1 ", () => {
        ProgramsPage.playProgram("5 Days To A Powerful Memory");
        ProgramsPage.playLesson(" Start - Lesson 1 ");
        cy.wait(10000)
    });

    it("Should display the duration of the video", () => {
        ProgramsPage.playProgram("Dopamine: The Motivational Molecule");
        ProgramsPage.clickPlayButton();
        cy.wait(1000)
        ProgramsPage.validateDurationOfVedio("6:19");
    });

});

