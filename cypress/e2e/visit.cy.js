/// <reference types="Cypress" />
describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io')
      
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
        cy.get('.action-email').focus().type('wenrui')
        cy.get('#email1').should('have.value', 'wenrui')
        // let name = cy.get('.form-group').children('input:first')
        // name.type('mywork')
        let name = cy.get('.form-group').within(($form) => {
            cy.get('input:first').type('username')
            // cy.get('input:last').type('password')
        })
  })
})

