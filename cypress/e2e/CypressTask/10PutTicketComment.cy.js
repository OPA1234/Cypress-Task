import { openTestSite, ticketToEdit, newComment } from "../../support/e2e";

describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite() // Open the Test Environment
    });


    it('Put the comment in the Ticket', () => {

        ticketToEdit().click(); // Select the ticket
        cy.get('textarea[placeholder="Add a comment"]').type(newComment) // Put the comment
        cy.get('j-button button.btn-primary').contains('Save').click(); // Click on Save 
        cy.get('issue-comments issue-comment').last().should('contain.text', newComment); //Verify that comment is visible 
    });
})