import { openTestSite, ticketToEdit, getTicketToEdit } from "../../support/e2e";


describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite(); // Open the Test Environment
    });


    it('Delete Task', () => {

        ticketToEdit().click() // Select the ticket from the board 
        cy.get('j-button[icon="trash"]').find('button').click(); // Click on Bin icon
        cy.get('button.btn-primary').contains('Delete').click(); // Click on Delete button in pop-up
        getTicketToEdit() //Verify that selected ticket does not exist on the board 
    });
})