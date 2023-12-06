/// <reference types="Cypress" /> 

describe('Realizar cadastro no twitter',  function() {

  beforeEach(() => {
    cy.visit('/')
    cy.get('.r-19oahor > .css-1qaijid')
      .should('be.visible')
  })
 
  it('preencher formulário de cadastro', function () {
    cy.get('[data-testid="signupButton"]')
      .click()
    cy.get('#modal-header > :nth-child(1) > .css-1qaijid')
      .should('be.visible')

    cy.get('input[name="name"]')
      .type(Cypress.env("user_name"))
    
    cy.get('input[name="phone_number"]')
      .type(Cypress.env("phone"))
    
    cy.get('select[id="SELECTOR_1"]')
      .select(7)
      .should('have.value', 7)

    cy.get('select[id="SELECTOR_2"]')
      .select(24)
      .should('have.value', 24)

      cy.get('select[id="SELECTOR_3"]')
      .select("1999")
      .should('have.value', "1999")

      cy.get('div[data-testid="ocfSignupNextLink"]').click()

  })
})