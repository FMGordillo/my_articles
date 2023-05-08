it("should enter articles when clicked", () => {
  const page = cy.visit("http://localhost:3000");
  page.get("[data-slug=why-i-dont-certificate-in-cloud]").click();
  cy.url().should("include", "articles");
  cy.url().should("include", "why-i-dont-certificate-in-cloud");
});
