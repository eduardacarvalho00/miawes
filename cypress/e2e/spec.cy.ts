describe('My First Test', () => {
  it('Visits the miawes website', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('miawes');
  });
});
