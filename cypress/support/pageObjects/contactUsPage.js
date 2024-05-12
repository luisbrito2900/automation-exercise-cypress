class ContactUsPage {
  nameInput() {
    return cy.get("[data-qa='name']");
  }
  emailInput() {
    return cy.get("[data-qa='email']");
  }
  subjectInput() {
    return cy.get("[data-qa='subject']");
  }
  msgInput() {
    return cy.get("[data-qa='message']");
  }
  submitBtn() {
    return cy.get("[data-qa='submit-button']");
  }
  successMsg() {
    return cy.get(".alert-success").contains("Success!");
  }
}
export default ContactUsPage;
