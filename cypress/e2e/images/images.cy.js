describe('Hotel image', () => {
    beforeEach(() => {
        cy.visit(' https://automationintesting.online/')
    });

    it('Verificar imágenes del hotel', () => {
        cy.get('img.hotel-img, img.hotel-logoUrl').should('be.visible');
    });
})