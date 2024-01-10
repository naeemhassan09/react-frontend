import { testId } from '../../support/utils';
import { 
  MOV_LISTING_DATATABLE, 
  MOV_LISTING_DATATABLE_HEADINGS,
   MOV_PAGE_TABSLAYOUT_LISTING_TAB, 
   MOV_PAGE_TABSLAYOUT_ONBOARDING_TAB, 
   MOV_RULES_SEARCH_ENDPOINT_DEV, 
   NAV_BAR_MOV_RULES_TAB, PRODUCT_MOV_APP_URL } from '../constants/mov';
import {
  PRODUCT_APP_URL,
} from '../constants/product';

describe('Rule Listing Data Table', () => {
  beforeEach(() => {
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRulesSearch');
    cy.login();
  });

  it('should verify that MOV Rules page has Listing and Onboarding tab', () => {
    cy.visit(PRODUCT_APP_URL);
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('be.visible')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.wait('@movRulesSearch');

    cy.get(testId(MOV_PAGE_TABSLAYOUT_LISTING_TAB))
      .should('be.visible')
      .should('have.text', 'Rule Listing');

    cy.get(testId(MOV_PAGE_TABSLAYOUT_ONBOARDING_TAB))
      .should('be.visible')
      .should('have.text', 'Rule Creation');
  });

  it('should display rule listing with specified table headings', () => {
    cy.visit(PRODUCT_APP_URL);
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('be.visible')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.wait('@movRulesSearch');

    cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('be.visible');

    cy.get(`${testId(MOV_LISTING_DATATABLE)} th`).each((heading, i) => {
      expect(heading.text()).to.equal(MOV_LISTING_DATATABLE_HEADINGS[i]);
    });
  });
});