import { ticketTitle, ticketDescription, openTestSite } from "../../support/e2e";

describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite(); //Open the Test Environment 
    });


    it('Create Ticket', () => {
        cy.get('i.anticon.text-xl.text-white.anticon-plus svg').click(); // Click on the + sign from left menu
        cy.get('input[formcontrolname="title"]').type(ticketTitle, { delay: 200 }); // Enter Short summery 
        cy.get('.ql-container.ql-snow').type(ticketDescription); //Enter Description
        cy.get("button[type='submit'] span").click(); // Click on Save button
        cy.contains(ticketTitle).should('be.visible'); // Verfy that ticket is in Backlog
    });
});