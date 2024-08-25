describe('Hotel description', () => {
  beforeEach(() => {
    cy.visit(' https://automationintesting.online/');
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.wait(500)
  });
  
  it.only('Verificar la información del hotel', () => {

    cy.title().should('eq', 'Restful-booker-platform demo')
    
    cy.fixture("description.json").then((data) => {
      data.hotelDescription.forEach((info) => {
        cy.containP(info).should('exist');
      });
    });
  })
})