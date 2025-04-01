import { openTestSite, ticketToEdit, currentStatus, newStatus, ticketForEdit } from "../../support/e2e";

describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite() // Open the Test Environment
    });

    it('Change Ticket Status', () => {
        ticketToEdit().click() // Select ticket from board
        currentStatus().click(); // Click on current ticket status
        newStatus().click(); // Select a new status
        newStatus().should('be.visible'); // Verify new status 
        cy.get('j-button[icon="times"] button.btn-empty').click(); //Close the ticket
        cy.get('#Selected div').contains(ticketForEdit); // Verify that selected ticket is in new column 
    });
});