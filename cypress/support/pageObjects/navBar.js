class NavBar {
  cartBtn() {
    return cy.get(".navbar-nav").contains("Cart");
  }
  logoutBtn() {
    return cy.get(".navbar-nav").contains("Logout");
  }
  contactUsBtn() {
    return cy.get(".navbar-nav").contains("Contact us");
  }
}
export default NavBar;
