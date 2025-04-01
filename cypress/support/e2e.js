export const openTestSite = () => {
    cy.visit('https://jira.trungk18.com/project/board');
}; // This will open the testing environment

export const ticketTitle = 'New Assigned Task'; //This variable will be used for Ticket Title 
export const ticketDescription = 'This is test dedicated to Trung Vo'; // 
export const assignedUser = () => {
    cy.get('nz-option-item[title="Trung Vo"]').click();
}
export const userImage = 'trung-vo_bioxmc.png';
export const searchItem = 'issue';
export const selectedIssueFromTheList = () => {
    cy.contains('div.uppercase.text-xs.text-textMedium', 'Task-9631').click();
}

export const ticketToEdit = () => {
    return cy.contains('p', 'Angular Spotify 🎧')
}

export const getTicketToEdit = () => {

    cy.contains('p', 'Angular Spotify 🎧').should('not.exist');
}
export const newTitle = 'New Title: Edited Title'
export const newDescription = 'New Description'


export const currentStatus = () => {
    return cy.get('j-button.ant-dropdown-trigger').contains('Backlog')
}

export const newStatus = () => {
    return cy.get('li.ant-dropdown-menu-item').contains('Selected for Development')
}

export const ticketForEdit = 'Angular Spotify 🎧'
export const newComment = 'Test Comment'