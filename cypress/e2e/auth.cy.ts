import {
  AUTH_PASSWORD_INPUT,
  AUTH_USERNAME_INPUT,
  AUTH_SUBMIT_BUTTON,
  AUTH_LOGIN_ENDPOINT_DEV,
  AUTH_TEST_USERNAME,
  AUTH_TEST_PASSWORD,
} from './constants/auth';

describe('User Auth', () => {
  it('should login user with valid username and password', () => {
    cy.visit('/');
    cy.intercept('POST', AUTH_LOGIN_ENDPOINT_DEV).as('userAuth');
    cy.getByData(AUTH_USERNAME_INPUT)
      .type(AUTH_TEST_USERNAME)
      .should('have.value', AUTH_TEST_USERNAME);
    cy.getByData(AUTH_PASSWORD_INPUT)
      .type(AUTH_TEST_PASSWORD)
      .should('have.value', AUTH_TEST_PASSWORD);
    cy.getByData(AUTH_SUBMIT_BUTTON).should('be.visible').click();
    cy.wait('@userAuth');
  });
});
