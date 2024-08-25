describe('Hotel image', () => {
    beforeEach(() => {
        cy.visit(' https://automationintesting.online/');
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearAllCookies();
        cy.wait(500)
    });

    it('Verificar imágenes del hotel', () => {
        cy.get('img.hotel-img, img.hotel-logoUrl')
            .should('exist')
            .and('be.visible');
            
        cy.wait(500)
    });
})