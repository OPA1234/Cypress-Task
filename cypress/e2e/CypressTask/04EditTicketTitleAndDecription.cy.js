import { openTestSite, ticketToEdit, newTitle, newDescription } from "../../support/e2e";


describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite() // Open the Test Environment
    });


    it('Edit Ticket Title', () => {

        ticketToEdit().click() // Select the ticket from the board
        cy.get('issue-title textarea').clear().type(newTitle); // Clear the current title and put the newTitle
        cy.get('issue-title textarea').should('have.value', newTitle); // Verify newTitle 

    });


    it('Edit Ticket Description', () => {

        ticketToEdit().click(); // Select the ticket from the board
        cy.get('issue-description').click().clear({ delay: 100 }) // Clear the current description 
        cy.get('issue-description').find('.ql-editor').type(newDescription); // Enter newDescription
        cy.get('button.btn.btn-primary').contains('Save').click(); // Click on Save button 
        cy.get('.ql-snow.content-readonly .ql-editor h3').should('contain.text', newDescription); // Verify newDescription 

    });


})