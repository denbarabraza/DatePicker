import { cy } from 'local-cypress';

describe('DatePicker', () => {
  beforeEach(() => {
    cy.visit(
      'iframe.html?args=&viewMode=story&id=reactcomponentlibrary-rangepicker--range-picker-stories',
    );
    cy.get('[data-testid="calendarItem"] > :nth-child(4) > :nth-child(1)')
      .should('be.visible')
      .click();

    cy.get('[data-testid="calendarItem"] > :nth-child(4) > :nth-child(5)')
      .should('be.visible')
      .click();
  });

  it('the background-color of the start date should be rgb(109, 159, 232), end date-rgb(2, 83, 208)', () => {
    cy.get('[data-testid="calendarItem"] > :nth-child(4) > :nth-child(1)').should(
      'have.css',
      'background-color',
      'rgb(109, 159, 232)',
    );

    cy.get('[data-testid="calendarItem"] > :nth-child(4) > :nth-child(5)').should(
      'have.css',
      'background-color',
      'rgb(2, 83, 208)',
    );
  });

  it('when you click on the " Clear the range " button , the range should clear', () => {
    cy.get('.sc-dmsloy').should('be.visible').click();
    cy.get('[data-testid="calendarItem"] > :nth-child(4) > :nth-child(1)').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)',
    );
  });
});
