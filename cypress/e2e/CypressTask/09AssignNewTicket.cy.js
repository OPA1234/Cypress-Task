import { ticketTitle, ticketDescription, assignedUser, userImage, openTestSite } from "../../support/e2e";

describe('Ticket Management Tests', () => {
    beforeEach(() => {
        openTestSite(); // Open the Test Environment
    });


    it('Assign New Ticket to the User', () => {
        cy.get('i.anticon.text-xl.text-white.anticon-plus svg').click(); // Click on + sign from left menu 
        cy.get('input[formcontrolname="title"]').type(ticketTitle, { delay: 200 }); // Write Ticket Title
        cy.get('.ql-container.ql-snow').type(ticketDescription); // Write Ticket Description 
        cy.get('nz-select[nzmode="multiple"]').click(); // Click on Assignees section
        cy.get('div.cdk-virtual-scroll-content-wrapper').should('be.visible'); // Dropdown list is open
        assignedUser() // Assign ticket to the user
        cy.get("button[type='submit'] span").click(); // Click on Create Issue
        cy.get('#Backlog').contains(ticketTitle).parents('issue-card').find('.avatar-container').should('have.css', 'background-image').and('include', userImage); // Verify that new ticket is created in Backlog and assigned



    });
});