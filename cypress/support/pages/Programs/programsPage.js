import BasePage from "../basePage";

//Programs page
class ProgramsPage extends BasePage{
  playProgram(programName) {
    cy.contains("Programs").click();
    cy.contains(programName).click();
    cy.wait(5000);
    // cy.contains("Start Program").click();
    cy.wait(5000);
  }

  playLesson(lesson) {
    cy.contains(lesson).click({ force: true });
    cy.wait(5000);
    this.clickPlayButton();
  }

  clickPlayButton() {
    cy.xpath(`//button[@data-testid="play-button"]`).click();
  }

  validateDurationOfVedio(duration) {
    cy.xpath(`//*[@id="mv-video-item-45114"]/div[5]/div[4]/span[2]`).each(
      ($el) => {
        expect($el.text()).to.eq(duration);
      }
    );
  }
}
export default new ProgramsPage();
