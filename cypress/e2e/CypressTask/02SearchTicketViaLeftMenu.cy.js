import { openTestSite, searchItem, selectedIssueFromTheList } from "../../support/e2e";

describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite(); //Open the Test Environment 
    });

    it('Search Ticket Via Left Menu', () => {
        cy.get("i[class='anticon text-xl text-white anticon-search'] svg").click(); // Click on the Search icon from left menu 
        cy.get("input[placeholder='Search issues by summary, description...']").click().type(searchItem); // Enter the searchItem 
        selectedIssueFromTheList() // Click on the item from the list 
        cy.contains(searchItem).should('be.visible'); // Selected item has searchItem in the title 
    });
});