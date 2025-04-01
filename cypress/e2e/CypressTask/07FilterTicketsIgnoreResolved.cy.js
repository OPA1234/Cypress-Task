
import { openTestSite } from "../../support/e2e";


describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite() // Open the Test Environment
    });

    it('Filter Tickets With Ignore Resolved Button', () => {
        cy.contains('span', 'Ignore Resolved').click(); // Click on button Ignore Resolved
        cy.get('span.lowercase.text-13').should('contain', '0'); // Verify that Done column is empty 

    });
});