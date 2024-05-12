import HomePage from "./pageObjects/homePage";

const homePage = new HomePage();

Cypress.Commands.add("validatePageLoad", () => {
  homePage.featuresItems().should("be.visible");
});

Cypress.Commands.add("acceptPopUp", () => {
  cy.on("window:confirm", () => {});
});
