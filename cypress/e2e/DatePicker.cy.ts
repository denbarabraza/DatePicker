import { cy } from 'local-cypress';

const dayjs = require('dayjs');

describe('DatePicker', () => {
  beforeEach(() => {
    cy.visit(
      'iframe.html?args=&viewMode=story&id=reactcomponentlibrary-datepicker--date-picker-stories',
    );
  });
  it('the elements of the BankCard page should be visible', () => {
    cy.get('.sc-ftDPCE').should('be.visible');
    cy.get('.sc-gLfKCG').should('be.visible');
    cy.get('[data-testid="selectorItem"]').should('be.visible');
    cy.get('[data-testid="calendarItem"] ').should('be.visible');
  });

  it('interaction with the input should be correct', () => {
    const inputValue = dayjs().format('YYYY-MM-DD');

    cy.get('[data-cy="delIcon"]').should('be.visible').click();
    cy.get('[data-cy="inputItem"]').should('be.visible');

    cy.get('[data-cy="inputItem"]').type(inputValue);
  });

  it('when you click on the filter icon, a window opens and the number of days (without days off) should change', () => {
    cy.get('.sc-ipUqZP').children().should('have.length', 7);
    cy.get('[data-testid="filterIconBlock"]>svg').should('be.visible').click();
    cy.get('[data-testid="displayFilter"]').should('be.visible');
    cy.get('.sc-bZcisz').should('be.visible').click();
    cy.get('.sc-ipUqZP').children().should('have.length', 5);
  });

  it('when you click on the date, you should be able to select the year and month (select)', () => {
    cy.get('[data-cy="dateInSelector"]').should('be.visible').click();
    cy.get('[data-cy="blockYearMonth"]').should('be.visible');
    cy.get('[data-cy="blockYearMonth"]').children().should('have.length', 2);
  });

  it('when you click on the icon (next), the value of the month should change', () => {
    const currentDate = dayjs();
    const nextMonthDate = currentDate
      .add(1, 'month')
      .startOf('month')
      .format('MMMM YYYY');

    cy.get('[data-cy="dateInSelector"]')
      .should('be.visible')
      .should('have.text', currentDate.format('MMMM YYYY'));
    cy.get('[data-cy="nextIcon"]').should('be.visible').click();
    cy.get('[data-cy="dateInSelector"]')
      .should('be.visible')
      .should('have.text', nextMonthDate);
  });

  it('when you click on the day, an input for adding tasks should appear', () => {
    cy.get('[data-testid="calendarItem"] > :nth-child(3) > :nth-child(1)')
      .should('be.visible')
      .click();
    cy.get('[data-cy="inputItemTask"]').should('be.visible');
  });

  it('the value in the input must be correct', () => {
    const task = 'Task 1';

    cy.get('[data-testid="calendarItem"] > :nth-child(3) > :nth-child(1)')
      .should('be.visible')
      .click();
    cy.get('[data-cy="inputItemTask"]').should('be.visible');
    cy.get('[data-cy="inputItemTask"]').type(task);
  });
  it('when you click on the day, the starting day of the week should change', () => {
    cy.get('.sc-ipUqZP').children().eq(0).should('have.text', 'Mo');
    cy.get('.sc-ipUqZP').children().eq(3).click();
    cy.get('.sc-ipUqZP').children().eq(0).should('have.text', 'Th');
  });

  it('the background-color of the selected date should be rgb(109, 159, 232)', () => {
    cy.get('[data-testid="calendarItem"] > :nth-child(4) > :nth-child(1)')
      .should('be.visible')
      .click()
      .should('have.css', 'background-color', 'rgb(109, 159, 232)');
  });
});
