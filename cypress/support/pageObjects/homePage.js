import { testData } from "../helpers";

class HomePage {
  featuresItems() {
    return cy.get(".features_items");
  }
  addToCartBtn() {
    return cy.get(".cart");
  }
  productAddedSuccessfulMsg(successfulMsg) {
    return cy.get(`p:contains(${successfulMsg})`);
  }
  viewCartBtn() {
    return cy.get("a > u").contains("View Cart");
  }
  viewProductBtn(productName) {
    return cy
      .get(`.productinfo > p:contains(${productName})`)
      .parent()
      .parent()
      .parent()
      .find("div + div.choose");
  }
}
export default HomePage;
