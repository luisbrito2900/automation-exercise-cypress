import HomePage from "../support/pageObjects/homePage";
import ViewCartSection from "../support/pageObjects/viewCartSection";
import SignUpSection from "../support/pageObjects/signUpSection";
import NavBar from "../support/pageObjects/navBar";
import { userData, testData } from "../support/helpers";
import ProductDetailsPage from "../support/pageObjects/productDetailsPage";
import CheckoutPage from "../support/pageObjects/checkoutPage";
import PaymentPage from "../support/pageObjects/paymentPage";
import LoginSection from "../support/pageObjects/loginSection";
import ContactUsPage from "../support/pageObjects/contactUsPage";

const homePage = new HomePage();
const viewCartSection = new ViewCartSection();
const signUpSection = new SignUpSection();
const navBar = new NavBar();
const productDetailsPage = new ProductDetailsPage();
const checkoutPage = new CheckoutPage();
const paymentPage = new PaymentPage();
const loginSection = new LoginSection();
const contactUsPage = new ContactUsPage();

describe("E2E Tests - Clothing Store", () => {
  before(() => {
    cy.clearCookies();
    cy.visit("/");
    cy.validatePageLoad();
    cy.scrollTo("center");
  });
  after(() => {
    cy.clearCookies();
  });

  it("Add Product To Cart", () => {
    homePage.viewProductBtn().click();
    productDetailsPage.quantityInput().clear();
    productDetailsPage.quantityInput().should("be.empty");
    productDetailsPage.quantityInput().type(testData.productAmount);
    homePage.addToCartBtn().click();
    homePage
      .productAddedSuccessfulMsg()
      .should("contain", "Your product has been added to cart.");
    homePage.viewCartBtn().click();
  });

  it("Create New User", () => {
    viewCartSection.proceedToCheckoutBtn().click({ force: true });
    viewCartSection.registerOrLoginOption().click();
    signUpSection.nameInput().type(userData.name);
    signUpSection.emailInput().type(userData.email);
    signUpSection.signUpBtn().click();
    signUpSection.titleCheckbox().click();
    signUpSection.signUpPasswordInput().type(userData.password);
    signUpSection
      .birthDayInput()
      .select(userData.birthDay)
      .should("have.value", userData.birthDay);
    signUpSection
      .birthMonthInput()
      .select(userData.birthMonth)
      .should("contain", userData.birthMonth);
    signUpSection
      .birthYearInput()
      .select(userData.birthYear)
      .should("have.value", userData.birthYear);
    signUpSection.firstNameInput().type(userData.name);
    signUpSection.lastNameInput().type(userData.lastName);
    signUpSection.companyInput().type(userData.company);
    signUpSection.addressInput().type(userData.address);
    signUpSection.secondaryAddressInput().type(userData.secondaryAddress);
    signUpSection
      .countryInput()
      .select(userData.country)
      .should("have.value", userData.country);
    signUpSection.stateInput().type(userData.state);
    signUpSection.cityInput().type(userData.city);
    signUpSection.zipCodeInput().type(userData.zipCode);
    signUpSection.mobileNumberInput().type(userData.mobileNumber);
    signUpSection.createAccountBtn().click();
    signUpSection.accountCreatedText().should("be.visible");
    signUpSection.continueBtn().click();
  });

  it("Checkout", () => {
    navBar.cartBtn().click();
    viewCartSection.proceedToCheckoutBtn().click();
    checkoutPage.orderCommentInput().type(testData.orderMsg);
    checkoutPage.placeOrderBtn().click();
    paymentPage.cardName().type(userData.cardName);
    paymentPage.cardNumber().type(userData.cardNumber);
    paymentPage.creditCardCVC().type(userData.cvcNumber);
    paymentPage.ccExpirationMonthInput().type(userData.ccExpirationMonth);
    paymentPage.ccExpirationYearInput().type(userData.ccExpirationYear);
    paymentPage.payAndConfirmBtn().click();
    paymentPage.orderPlacedText().should("be.visible");
    paymentPage.continueBtn().click();
  });
  it("Logout", () => {
    navBar.logoutBtn().click();
    loginSection.loginBtn().should("be.visible");
  });
  it("Login", () => {
    loginSection.loginEmailInput().type(testData.loginEmail);
    loginSection.loginPasswordInput().type(testData.loginPassword);
    loginSection.loginBtn().click();
    navBar.logoutBtn().should("be.visible");
  });
  it("Contact Us", () => {
    navBar.contactUsBtn().click();
    contactUsPage.nameInput().type(userData.name);
    contactUsPage.emailInput().type(userData.email);
    contactUsPage.subjectInput().type(testData.subject);
    contactUsPage.msgInput().type(testData.feedbackMsg);
    contactUsPage.submitBtn().click();
    cy.acceptPopUp();
    contactUsPage.successMsg().should("contain", "Success!");
    navBar.logoutBtn().click();
  });
});
