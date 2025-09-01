describe('Flujo de creación de oferta - Socio Comunitario', () => {
  it('Registro de Socio comunitario', () => {
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
        cy.url().should('eq', 'https://localhost:3000');
  });

  
    it('Inicio de sesión como socio comunitario', () => {
    cy.visit('/login');
    cy.get('form > :nth-child(1) > .input').type('socio1@ejemplo.com');
    cy.get(':nth-child(2) > .input').type('12345678');
    cy.get('form > .btn').click();
    cy.get('.font-normal').should('contain', 'María Pérez');
    cy.get('.flex > .font-bold').should('contain', 'Socio Comunitario');
  });

  it('Creación de oferta', () => {

    cy.visit('/login');
    cy.get('form > :nth-child(1) > .input').type('socio1@ejemplo.com');
    cy.get(':nth-child(2) > .input').type('12345678');
    cy.get('form > .btn').click();
    cy.get('.font-normal').should('contain', 'María Pérez');
    cy.get('.flex > .font-bold').should('contain', 'Socio Comunitario');

    cy.visit('ofertas/crear');
    cy.contains('Crear Oferta').click();

    cy.get(':nth-child(1) > :nth-child(1) > .input').type('Oferta de prueba');
    cy.get(':nth-child(2) > .textarea').type('Descripción de la oferta de prueba');
    cy.get('.group > .input').click();
    cy.get('input[type="checkbox"][value="1"]').click();
    cy.get(':nth-child(1) > :nth-child(1) > .input').click();
    cy.get(':nth-child(4) > .input > .grow').type('Asignatura de prueba');
    cy.get(':nth-child(5) > .input > .grow').type('Pruebas');
    cy.get(':nth-child(2) > :nth-child(1) > .input').type('2025-12-31');
    cy.get('.select').select('Primer cuatrimestre');
    cy.get(':nth-child(3) > .input').type('2025');

    cy.get('.btn-primary').click();

    cy.get('.rounded-lg > .mb-4').should('contain', 'Oferta: Oferta de prueba');
  });
});