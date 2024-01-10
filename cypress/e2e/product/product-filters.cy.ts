import { getRandomInt, testId } from '../../support/utils';
import {
  PRODUCT_APP_URL,
  PRODUCT_DYNAMIC_PRICIING,
  PRODUCT_FILTER_CATEGORY_SELECT,
  PRODUCT_FILTER_CITY_SELECT,
  PRODUCT_FILTER_DYNAMIC_PRICING_MULTISELECT,
  PRODUCT_FILTER_LOCATION_SELECT,
  PRODUCT_FILTER_STATUS_DISABLED_BUTTON,
  PRODUCT_FILTER_STATUS_ENABLED_BUTTON,
  PRODUCT_SEARCH_ENDPOINT_DEV,
  PRODUCT_STATUS,
  PRODUCT_VBP,
} from '../constants/product';

describe('Product Listing Filters', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV).as('productSearch');
    cy.loginWithAPI();
    cy.visit(PRODUCT_APP_URL);
  });

  it('should filter products by location and category', () => {
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

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        cy.get(testId(`${PRODUCT_FILTER_LOCATION_SELECT}-option-${0}`))
          .invoke('attr', 'value')
          .then((val) => {
            expect(body?.data?.products?.[0]?.location_id).to.equal(+val);
          });
      }
    });

    cy.get(testId(PRODUCT_FILTER_CATEGORY_SELECT))
      .should('be.visible')
      .first()
      .select(1);

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        const productIndex = getRandomInt(body?.data?.products?.length);

        const active_categories =
          body?.data?.products?.[productIndex]?.active_categories;

        let doesCategoryExist = false;

        cy.get(testId(`${PRODUCT_FILTER_CATEGORY_SELECT}-option-${0}`))
          .invoke('attr', 'value')
          .then((val) => {

            if (active_categories && active_categories?.length) {
              active_categories?.forEach((category: any) => {
                if (category?.category_id?.id === +val) {
                  doesCategoryExist = true;
                }
              });
            }

            expect(doesCategoryExist).to.equal(true);
          });
      }
    });
  });

  it('should sort products', () => {
    cy.wait('@productSearch');

    cy.testProductSort(1);
    cy.testProductSort(2);
    cy.testProductSort(3);
    cy.testProductSort(4);
  });

  it('should filter product by status', () => {
    // cy.visit(PRODUCT_APP_URL);
    // cy.location('pathname').should('equal', PRODUCT_APP_URL);
    cy.wait('@productSearch');

    cy.get(testId(PRODUCT_FILTER_STATUS_ENABLED_BUTTON))
      .should('be.visible')
      .first()
      .click();

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(body?.data?.products?.[0]?.disabled).to.equal(
          PRODUCT_STATUS.ENABLED
        );
      }
    });

    cy.get(testId(PRODUCT_FILTER_STATUS_DISABLED_BUTTON))
      .should('be.visible')
      .first()
      .click();

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(body?.data?.products?.[0]?.disabled).to.equal(
          PRODUCT_STATUS.DISABLED
        );
      }
    });
  });

  it('should filter product by pricing', () => {
    cy.wait('@productSearch');

    cy.get(testId(PRODUCT_FILTER_DYNAMIC_PRICING_MULTISELECT))
      .should('be.visible')
      .first()
      .click();

    cy.get(testId(`${PRODUCT_FILTER_DYNAMIC_PRICING_MULTISELECT}-option-0`))
      .should('be.visible')
      .first()
      .click();

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(body?.data?.products?.[0]?.is_dynamic_price_enabled).to.equal(
          PRODUCT_DYNAMIC_PRICIING.ENABLED
        );
      }
    });

    cy.get(testId(`${PRODUCT_FILTER_DYNAMIC_PRICING_MULTISELECT}-option-0`))
      .should('be.visible')
      .first()
      .click();

    cy.wait('@productSearch');

    cy.get(testId(`${PRODUCT_FILTER_DYNAMIC_PRICING_MULTISELECT}-option-1`))
      .should('be.visible')
      .first()
      .click();

    cy.wait('@productSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.products &&
        Array.isArray(body?.data?.products) &&
        body?.data?.products?.length
      ) {
        expect(
          body?.data?.products?.[0]?.is_volume_based_price_enabled
        ).to.equal(PRODUCT_VBP.ENABLED);
      }
    });
  });
});
