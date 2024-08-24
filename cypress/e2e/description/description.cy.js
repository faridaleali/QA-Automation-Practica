import { hotelDescription } from "../../fixtures/description.json";

describe('Hotel description', () => {
  beforeEach(() => {
    cy.visit(' https://automationintesting.online/');
    cy.wait(500)
  });
  
  it.only('Verificar la información del hotel', () => {

    cy.fixture(hotelDescription).then((data) => {
      data.hotelDescription.forEach((info) => {
        cy.containP(info).should('exist');
      });
    });
  })
})