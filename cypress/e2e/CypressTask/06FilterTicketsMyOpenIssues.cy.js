
import { openTestSite } from "../../support/e2e";


describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite() // Open the Test Environment
    });

    it('Filter Tickets With My Open Issues Button', () => {
        cy.contains('span', 'Only My Issues').click(); // Click on the Only My Issues button 
        cy.get('#Backlog issue-card, #Selected issue-card') // Verify that only users assigned ticket are visible in columns
            .each(($ticket) => {
                cy.wrap($ticket)
                    .find('.avatar-container')
                    .should('have.css', 'background-image')
                    .and('include', 'trung-vo_bioxmc.png');
            });




    });
});