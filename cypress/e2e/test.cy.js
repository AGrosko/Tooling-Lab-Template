describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://127.0.0.1:8080')
    
    cy.get('input').type('Test User')
    cy.contains('Start Game!').click()
    var i = 0
    cy.contains('Go').click()
    i++

    cy.contains('Test User selected').should('have.length', i)

  
  })
 
})