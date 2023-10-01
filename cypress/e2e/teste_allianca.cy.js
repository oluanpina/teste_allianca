/// <reference types="cypress" />

describe('teste alliança', () => {
  beforeEach(() => {
    cy.visit('https://www.olx.com.br/')
  })
  it('Fazer pesquisa valida', () => {
    cy.get('[data-testid="oraculo-4-input"]').type("carro")
    cy.get('._2dsuYh').click()
    cy.screenshot()
  })

  it('Fazer pesquisa invalida', () => {
    cy.get('[data-testid="oraculo-4-input"]').type("utfhgfyhfyt")
    cy.get('._2dsuYh').click()
    cy.screenshot()
  })

 
  })

