Cypress.Commands.add('fetchNodeJS', (options) => {
	return cy.task("fetch", options);
});