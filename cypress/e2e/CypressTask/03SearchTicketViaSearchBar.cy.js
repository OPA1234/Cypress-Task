import { openTestSite, searchItem } from "../../support/e2e";


describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite(); // Open the Test Environment 
    });

    it('Search Ticket Via Search Bar', () => {
        cy.get('j-input[aria-label="search"]').click().type(searchItem); //Click on the search bar and type searchItem
        cy.get('div.board-dnd-list').find('.issue-wrap').contains(searchItem).should('exist'); // The ticket with searchItem appears on the board 

    });
});