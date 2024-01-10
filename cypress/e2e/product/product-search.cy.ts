import { testId } from '../../support/utils';
import {
  PRODUCT_APP_URL,
  PRODUCT_SEARCH_ENDPOINT_DEV,
  PRODUCT_SEARCH_INPUT,
  PRODUCT_SEARCH_WITH_BRAND_BUTTON,
  PRODUCT_SEARCH_WITH_CODE_BUTTON,
  PRODUCT_SEARCH_WITH_NAME_BUTTON,
  PRODUCT_TEST_SKU_BRAND,
  PRODUCT_TEST_SKU_CODE,
  PRODUCT_TEST_SKU_NAME,
} from '../constants/product';

describe('Product Listing Search', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV).as('productSearch');
    cy.loginWithAPI();
    cy.visit(PRODUCT_APP_URL);
    cy.wait('@productSearch');
  });

  it('should search products by sku name', () => {
    //search by sku name
    cy.get(testId(PRODUCT_SEARCH_INPUT)).first().type(PRODUCT_TEST_SKU_NAME);
    cy.get(testId(PRODUCT_SEARCH_WITH_NAME_BUTTON))
      .should('be.visible')
      .click();

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);
      expect(body?.data?.products?.length).not.equal(0);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(body?.data?.products?.[0]?.name).to.equal(PRODUCT_TEST_SKU_NAME);
      }
    });
  });

  it('should search products by sku code', () => {

    //search by sku code
    cy.get(testId(PRODUCT_SEARCH_INPUT))
      .first()
      .clear()
      .type(PRODUCT_TEST_SKU_CODE);
    cy.get(testId(PRODUCT_SEARCH_WITH_CODE_BUTTON))
      .should('be.visible')
      .click();

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);
      expect(body?.data?.products?.length).not.equal(0);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(body?.data?.products?.[0]?.sku).to.equal(PRODUCT_TEST_SKU_CODE);
      }
    });
  });

  it('should search products by brand name', () => {
    //search by brand name
    cy.get(testId(PRODUCT_SEARCH_INPUT))
      .first()
      .clear()
      .type(PRODUCT_TEST_SKU_BRAND);
    cy.get(testId(PRODUCT_SEARCH_WITH_BRAND_BUTTON))
      .should('be.visible')
      .click();

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);
      expect(body?.data?.products?.length).not.equal(0);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(body?.data?.products?.[0]?.brand).to.equal(
          PRODUCT_TEST_SKU_BRAND
        );
      }
    });
  });

  it('should search products by product name with enter key', () => {
    //search by brand name
    cy.get(testId(PRODUCT_SEARCH_INPUT))
      .first()
      .clear()
      .type(`${PRODUCT_TEST_SKU_NAME}{enter}`);

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);
      expect(body?.data?.products?.length).not.equal(0);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(body?.data?.products?.[0]?.name).to.equal(PRODUCT_TEST_SKU_NAME);
      }
    });
  });

  it('should display input field with dropdown', () => {
    //search by brand name
    cy.get(testId(PRODUCT_SEARCH_INPUT))
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Search SKU, Brand or Product');

    cy.get(testId(PRODUCT_SEARCH_INPUT)).first().type(PRODUCT_TEST_SKU_NAME);

    cy.get(testId(PRODUCT_SEARCH_WITH_NAME_BUTTON))
      .should('be.visible')
      .contains('Search with SKU Name');

    cy.get(testId(PRODUCT_SEARCH_WITH_CODE_BUTTON))
      .should('be.visible')
      .contains('Search with SKU Code');

    cy.get(testId(PRODUCT_SEARCH_WITH_BRAND_BUTTON))
      .should('be.visible')
      .contains('Search with Brand');
  });
});
