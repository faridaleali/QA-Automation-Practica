describe('Enviar mensaje', () => {
    beforeEach(() => {
        cy.visit(' https://automationintesting.online/');
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearAllCookies();
        cy.wait(500)
    });

    it('Validar envío de form vacío', () => {
        cy.log('Se enviara un form en blanco')

        cy.intercept('POST', 'message/').as('formEnviado')

        cy.get('#submitContact').click()

        cy.wait('@formEnviado').then(interception => {
            expect(interception.response.statusCode).to.equal(400)
        });

        cy.log('El formulario esta vacio')

        cy.get('.alert').should('be.visible')
        cy.fixture('formErrors.json').then((data) => {
            data.formEmptyError.forEach((info) => {
                cy.containP(info);
            });
        });
    })

    it('Validar envío de form con data incorrecta', () => {
        cy.log('Se ingresarán datos incorrectos');

        cy.intercept('POST', 'message/').as('formEnviado')

        cy.fixture("formInput.json").then((data) => {
            Object.entries(data.inputFormIncorrect).forEach(([placeholder, value]) => {
                cy.inputPlaceholder(placeholder, value);
            });
        });

        cy.get('[data-testid="ContactDescription"]').type('asdasd');
        cy.get('#submitContact').click();

        cy.wait('@formEnviado').then(interception => {
            expect(interception.response.statusCode).to.equal(400)
        });

        cy.log('El formulario esta incompleto')

        cy.get('.alert').should('be.visible');
        cy.fixture('formErrors.json').then((data) => {
            data.formIncompleteError.forEach((info) => {
                cy.containP(info);
            });
        });
    });

    it('Validar envío de form con data correcta', () => {
        cy.log('Se enviará un form correctamente');

        cy.intercept('POST', 'message/').as('formEnviado')

        cy.fixture("formInput.json").then((data) => {
            Object.entries(data.inputFormCorrect).forEach(([placeholder, value]) => {
                cy.inputPlaceholder(placeholder, value);
            });
        });

        cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo');
        cy.get('#submitContact').click();

        cy.wait('@formEnviado').then(interception => {
            expect(interception.response.statusCode).to.equal(201)
        });

        cy.get('h2').contains('Thanks for getting in touch ').should('exist')
        cy.log('El formulario se envio correctamente')
    });
})