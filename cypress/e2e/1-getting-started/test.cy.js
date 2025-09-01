describe('Pruebas de APS', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Registrarse como usuario', () => {
        cy.get('.menu > :nth-child(1) > .btn').should('be.visible');
        cy.get('.menu > :nth-child(1) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(1) > .input').type('María');
        cy.get(':nth-child(1) > :nth-child(2) > .input').type('Pérez');
        cy.get(':nth-child(3) > .input').type('socio1@ejemplo.com');
        cy.get(':nth-child(4) > .input').type('600123456');
        cy.get('input[placeholder="Introduzca su contraseña"]').type('12345678');
        cy.get('input[placeholder="Repita su contraseña"]').type('12345678');
        cy.get('.select').select('CommunityPartner');
        cy.get('input[placeholder="Introduzca el sector de su institución"]').type('Educación');
        cy.get('input[placeholder="Introduzca la URL de su institución"]').type('https://www.ine.es/');
        cy.get('input[placeholder="Introduzca la misión de su institución"]').type('Fomentar la educación inclusiva');
        cy.get('input[placeholder="Introduzca el nombre de su institución"]').type('Instituto Ejemplo 1');
        cy.get('.checkbox').click();
        cy.get('form > .btn').click();
    });

    it('Iniciar sesión como usuario', () => {
        cy.get('.menu > :nth-child(2) > .btn').should('be.visible');
        cy.get('.menu > :nth-child(2) > .btn').click();
        cy.get('form > :nth-child(1) > .input').type('alumnoprueba@ejemplo.com');
        cy.get('form > :nth-child(2) > .input').type('ContraseñaPrueba');
        cy.get('form > .btn').click();
    });
});


