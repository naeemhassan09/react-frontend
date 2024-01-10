/* eslint-disable max-len */
import {
  AUTH_LOGIN_ENDPOINT_DEV,
  AUTH_PASSWORD_INPUT,
  AUTH_ROLES,
  AUTH_SUBMIT_BUTTON,
  AUTH_TEST_PASSWORD,
  AUTH_TEST_USERNAME,
  AUTH_USERNAME_INPUT,
} from '../e2e/constants/auth';
import {
  MOV_PAGE_TABSLAYOUT_LISTING_TAB,
  MOV_PAGE_TABSLAYOUT_ONBOARDING_TAB,
  MOV_RULES_CREATE_LAYOUT,
  NAV_BAR_MOV_RULES_TAB,
  PRODUCT_MOV_APP_URL,
} from '../e2e/constants/mov';
import {
  PRODUCT_APP_URL,
  PRODUCT_FILTER_SORT_SELECT,
  PRODUCT_SEARCH_INPUT,
  PRODUCT_SEARCH_WITH_NAME_BUTTON,
  PRODUCT_SORT_OPTIONS,
  PRODUCT_TEST_SKU_NAME,
} from '../e2e/constants/product';
import { testId } from './utils';

Cypress.Commands.add('getByData', (selector) =>
  cy.get(`[data-cy=${selector}]`)
);

Cypress.Commands.add('loginWithAPI', () => {
  cy.session(AUTH_TEST_USERNAME, () => {
  cy.visit('/');
  cy.request('POST', '', {
    username: AUTH_TEST_USERNAME,
    password: AUTH_TEST_PASSWORD,
    role_id: AUTH_ROLES,
  })
    .its('body.data')
    .then((data: TObject) => {
      window.localStorage.setItem('authToken', data.token);
      cy.window()
        .its('store')
        .invoke('dispatch', { type: 'auth/Login/fulfilled', payload: data });
    });
    cy.url().should('contain', PRODUCT_APP_URL);
  });
});

Cypress.Commands.add('login', () => {
  cy.session(AUTH_TEST_USERNAME, () => {
    cy.visit('/');
    cy.intercept('POST', AUTH_LOGIN_ENDPOINT_DEV).as('userAuth');
    cy.get(testId(AUTH_USERNAME_INPUT))
      .type(AUTH_TEST_USERNAME)
      .should('have.value', AUTH_TEST_USERNAME);
    cy.get(testId(AUTH_PASSWORD_INPUT))
      .type(AUTH_TEST_PASSWORD)
      .should('have.value', AUTH_TEST_PASSWORD);
    cy.get(testId(AUTH_SUBMIT_BUTTON)).should('be.visible').click();
    cy.url().should('contain', PRODUCT_APP_URL);
    cy.wait('@userAuth');
  });
});

Cypress.Commands.add('arrangeProduct', () => {
  cy.visit('/');
  // cy.request({
  //   method: 'GET',
  //   url: '',
  //   headers: {
  //     Authorization: window.localStorage.getItem('authToken'),
  //   },
  // })
  cy.fixture('product.json')
    .its('data')
    .then((data: TObject) => {
      cy.wrap(data.products).should('have.length.gte', 1);
      cy.wrap(data.products[0]).as('searchedProduct');
      cy.window().its('store').invoke('dispatch', {
        type: 'app/setSelectedDataToEdit',
        payload: data.products[0],
      });
      cy.window().its('store').invoke('dispatch', {
        type: 'product/setCanProductEdit',
        payload: true,
      });
    });
});

Cypress.Commands.add('testProductSort', (optionIndex: number) => {
  cy.get(testId(PRODUCT_FILTER_SORT_SELECT))
    .should('be.visible')
    .first()
    .select(optionIndex);

  cy.wait('@productSearch').then((response: TResponse) => {
    const {
      request: { url },
    } = response;

    cy.get(testId(`${PRODUCT_FILTER_SORT_SELECT}-option-${optionIndex - 1}`))
      .invoke('attr', 'value')
      .then((val) => {
        if (url) {
          const isValidUrl = url.includes(PRODUCT_SORT_OPTIONS[val]);
          expect(isValidUrl).to.equal(true);
        }
      });
  });
});

Cypress.Commands.add('searchProduct', () => {
  cy.wait('@productSearch');
  cy.get(testId(PRODUCT_SEARCH_INPUT)).first().type(PRODUCT_TEST_SKU_NAME);
  cy.get(testId(PRODUCT_SEARCH_WITH_NAME_BUTTON)).should('be.visible').click();
});

Cypress.Commands.add('navigateToMOVRulesCreationTab', () => {
  cy.visit('/');
  cy.get(testId(NAV_BAR_MOV_RULES_TAB))
    .should('exist')
    .should('have.text', ' MOV Rules ')
    .click();

  cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);

  cy.get(testId(MOV_PAGE_TABSLAYOUT_ONBOARDING_TAB))
    .should('be.visible')
    .should('have.text', 'Rule Creation')
    .click();

  cy.get(testId(MOV_RULES_CREATE_LAYOUT)).should('be.visible');
});

Cypress.Commands.add('navigateToMOVTab', () => {
  cy.visit('/');
  cy.get(testId(NAV_BAR_MOV_RULES_TAB))
    .should('be.visible')
    .should('have.text', ' MOV Rules ')
    .click();

  cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
  cy.get(testId(MOV_PAGE_TABSLAYOUT_LISTING_TAB))
    .should('be.visible')
    .should('have.text', 'Rule Listing')
    .click();
  cy.wait(1000);
});
