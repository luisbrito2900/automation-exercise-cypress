class LoginSection {
  loginEmailInput() {
    return cy.get("[data-qa='login-email']");
  }
  loginPasswordInput() {
    return cy.get("[data-qa='login-password']");
  }
  loginBtn() {
    return cy.get("[data-qa='login-button']");
  }
}
export default LoginSection;
