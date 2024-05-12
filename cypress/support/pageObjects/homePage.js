import { testData } from "../helpers";

class HomePage {
  featuresItems() {
    return cy.get(".features_items");
  }
  productName() {
    return cy.get(`.productinfo > p:contains(${testData.product})`);
  }
  addToCartBtn() {
    return cy.get(".cart");
  }
  productAddedSuccessfulMsg() {
    return cy.get(`p:contains(${testData.successfulMsg})`);
  }
  viewCartBtn() {
    return cy.get("a > u").contains("View Cart");
  }
  viewProductBtn() {
    return cy
      .get(`.productinfo > p:contains(${testData.product})`)
      .parent()
      .parent()
      .parent()
      .find("div + div.choose");
  }
}
export default HomePage;
