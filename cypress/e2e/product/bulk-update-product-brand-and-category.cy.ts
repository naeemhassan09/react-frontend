import { testId } from '../../support/utils';
import { PRODUCT_SEARCH_ENDPOINT_DEV } from '../constants/mov';
import {
  PRODUCT_APP_URL,
  PRODUCT_PAGE_TABSLAYOUT_ONBOARDING_TAB,
  PRODUCT_FILTER_CITY_SELECT,
  PRODUCT_FILTER_LOCATION_SELECT,
  PRODUCT_ONBOARDING_FORM_UPDATE_CATEGORIES
} from '../constants/product';

describe('Bulk update sku brand and category Section ', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV).as('productSearch');
    cy.loginWithAPI();
    cy.visit(PRODUCT_APP_URL);
  });

  describe('Bulk update sku brand and category', () => {
    it('should update product categories and brands', () => {

        cy.wait('@productSearch');
        cy.get(testId(PRODUCT_FILTER_CITY_SELECT))
          .should('be.visible')
          .first()
          .select(1);

        cy.wait('@productSearch');

        cy.get(testId(PRODUCT_FILTER_LOCATION_SELECT))
        .should('be.visible')
        .first()
        .select(1);


        cy.get(testId(PRODUCT_PAGE_TABSLAYOUT_ONBOARDING_TAB)).click();

        cy.scrollTo(0, 1000);

        cy.get(
            testId(`${PRODUCT_ONBOARDING_FORM_UPDATE_CATEGORIES}---brands--bulk--file-input`)
            ).selectFile(
                'cypress/e2e/files/update-categories-and-brands.csv', { force: true });

        cy.contains('button', 'Save').click();

    });
  });     
});
