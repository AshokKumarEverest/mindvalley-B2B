import LoginPage from "../../support/pages/Login/loginPage"
import ProgramsPage from "../../support/pages/Programs/programsPage"


describe("Mind Valley Project POC", () => {

    beforeEach(() => {
        // invokeApplication();
        LoginPage.loginIntoApp();
    });

    it("should navigate to programs and click on program `5 Days To A Powerful Memory` and play lesson 1 ", () => {
        // ProgramsPage.playProgram("5 Days To A Powerful Memory");
        // ProgramsPage.playLesson(" Start - Lesson 1 ");
        ProgramsPage.playProgram("Establish Growth as the #1 Goal");
        ProgramsPage.clickPlayButton();
        cy.wait(10000)
    });

    it("Should display the duration of the video", () => {
        ProgramsPage.playProgram("Dopamine: The Motivational Molecule");
        ProgramsPage.clickPlayButton();
        cy.wait(1000)
        ProgramsPage.validateDurationOfVedio("6:19");
    });

});

