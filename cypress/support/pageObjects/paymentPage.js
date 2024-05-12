class PaymentPage {
  cardName() {
    return cy.get("[data-qa='name-on-card']");
  }
  cardNumber() {
    return cy.get("[data-qa='card-number']");
  }
  creditCardCVC() {
    return cy.get("[data-qa='cvc']");
  }
  ccExpirationMonthInput() {
    return cy.get("[data-qa='expiry-month']");
  }
  ccExpirationYearInput() {
    return cy.get("[data-qa='expiry-year']");
  }
  payAndConfirmBtn() {
    return cy.get("[data-qa='pay-button']");
  }
  orderPlacedText() {
    return cy.get("[data-qa='order-placed']").contains("Order Placed!");
  }
  continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }
}
export default PaymentPage;
