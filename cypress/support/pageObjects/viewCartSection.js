class ViewCartSection {
  proceedToCheckoutBtn() {
    return cy.get(".check_out").contains("Proceed To Checkout");
  }
  registerOrLoginOption() {
    return cy.get("a > u:contains('Register / Login')");
  }
}
export default ViewCartSection;
