class SignUpSection {
  nameInput() {
    return cy.get("[data-qa='signup-name']");
  }
  emailInput() {
    return cy.get("[data-qa='signup-email']");
  }
  signUpBtn() {
    return cy.get("[data-qa='signup-button']");
  }
  titleCheckbox() {
    return cy.get("#id_gender1");
  }
  signUpPasswordInput() {
    return cy.get("[data-qa='password']");
  }
  birthDayInput() {
    return cy.get("[data-qa='days']");
  }
  birthMonthInput() {
    return cy.get("[data-qa='months']");
  }
  birthYearInput() {
    return cy.get("[data-qa='years']");
  }
  firstNameInput() {
    return cy.get("[data-qa='first_name']");
  }
  lastNameInput() {
    return cy.get("[data-qa='last_name']");
  }
  companyInput() {
    return cy.get("[data-qa='company']");
  }
  addressInput() {
    return cy.get("[data-qa='address']");
  }
  secondaryAddressInput() {
    return cy.get("[data-qa='address2']");
  }
  countryInput() {
    return cy.get("[data-qa='country']");
  }
  stateInput() {
    return cy.get("[data-qa='state']");
  }
  cityInput() {
    return cy.get("[data-qa='city']");
  }
  zipCodeInput() {
    return cy.get("[data-qa='zipcode']");
  }
  mobileNumberInput() {
    return cy.get("[data-qa='mobile_number']");
  }
  createAccountBtn() {
    return cy.get("[data-qa='create-account']");
  }
  accountCreatedText() {
    return cy.get("[data-qa='account-created']").contains("Account Created!");
  }
  continueBtn() {
    return cy.get("[data-qa='continue-button']");
  }
}
export default SignUpSection;
