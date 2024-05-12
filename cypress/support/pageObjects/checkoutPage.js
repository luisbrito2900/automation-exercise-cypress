class CheckoutPage {
  orderCommentInput() {
    return cy.get("#ordermsg label + textarea");
  }

  placeOrderBtn() {
    return cy.get(".btn").contains("Place Order");
  }
}
export default CheckoutPage;
