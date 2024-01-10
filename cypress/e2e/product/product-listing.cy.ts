import { testId } from '../../support/utils';
import {
  NAVBAR_PRODUCT_SUB_OPTIONS,
  NAV_BAR_ED_REPORTING_TAB,
  NAV_BAR_PRODUCT_TAB,
  NAV_BAR_TAGS_MANAGEMENT_TAB,
  PRODUCT_APP_URL,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_LISTING_DATA_TABLE,
  PRODUCT_LISTING_ROW_EDIT_BUTTON,
  PRODUCT_LISTING_TABLE_HEADINGS,
  PRODUCT_PAGE_TABSLAYOUT_LISTING_TAB,
  PRODUCT_PAGE_TABSLAYOUT_ONBOARDING_TAB,
  PRODUCT_SEARCH_ENDPOINT_DEV,
} from '../constants/product';

describe('Product Listing Data Table', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV).as('productSearch');
    cy.loginWithAPI();
    cy.visit(PRODUCT_APP_URL);
  });

  it('should verify that product page has Listing and Onboarding tab', () => {
    cy.location('pathname').should('equal', PRODUCT_APP_URL);
    cy.get(testId(PRODUCT_PAGE_TABSLAYOUT_LISTING_TAB))
      .should('be.visible')
      .should('have.text', 'Product Listing');

    cy.get(testId(PRODUCT_PAGE_TABSLAYOUT_ONBOARDING_TAB))
      .should('be.visible')
      .should('have.text', 'Product Onboarding');

  });

  it('should verify Product Portal Tabs on navbar', () => {
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_PRODUCT_TAB))
      .should('be.visible')
      .should('have.text', NAVBAR_PRODUCT_SUB_OPTIONS.PRODUCT);

    cy.get(testId(NAV_BAR_TAGS_MANAGEMENT_TAB))
      .should('be.visible')
      .should('have.text', NAVBAR_PRODUCT_SUB_OPTIONS.TAGS_MANAGEMENT);

      cy.get(testId(NAV_BAR_ED_REPORTING_TAB))
      .should('be.visible')
      .should('have.text', NAVBAR_PRODUCT_SUB_OPTIONS.ED_REPORTING);

  });

  it('should display product listing with specified table headings', () => {
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(`${testId(PRODUCT_LISTING_DATA_TABLE)}`).should('be.visible');

    cy.get(`${testId(PRODUCT_LISTING_DATA_TABLE)} th`).each((heading, i) => {
      expect(heading.text()).to.equal(PRODUCT_LISTING_TABLE_HEADINGS[i]);
    });
  });

  it('should display product edit form when edit action is clicked from product listing', () => {
    cy.wait('@productSearch')
      .its('response.body.success')
      .should('eq', true);

    cy.getByData(PRODUCT_LISTING_ROW_EDIT_BUTTON)
      .first()
      .should('exist')
      .click();

    cy.getByData(PRODUCT_EDIT_PAGE_LAYOUT)
      .should('exist');
  });
});
