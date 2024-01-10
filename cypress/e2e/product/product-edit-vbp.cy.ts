import { testId } from '../../support/utils';
import {
  FETCH_TAX_GROUPS_ENDPOINT,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_SAVE_BUTTON,
  PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB,
  PRODUCT_EDIT_VBP_ADD_MORE_BUTTON,
  PRODUCT_EDIT_VBP_DELETE_BUTTON,
  PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL,
  PRODUCT_EDIT_VBP_INFORMATION_SECTION,
  PRODUCT_EDIT_VBP_PRICE_FORMCONTROL,
  PRODUCT_EDIT_VBP_PRICE_INPUT,
  PRODUCT_EDIT_VBP_QUANTITYFROM_INPUT,
  PRODUCT_EDIT_VBP_QUANTITYTO_INPUT,
  PRODUCT_EDIT_VBP_STATUS_TOGGLE,
  PRODUCT_EDIT_VBP_STATUS_TOGGLE_LABEL,
  PRODUCT_VBP,
  VBP_ERRORS,
  VBP_LABELS,
} from '../constants/product';

describe('Product Edit : Volume Based Pricing', () => {
  beforeEach(() => {
    cy.intercept('GET', FETCH_TAX_GROUPS_ENDPOINT).as('taxGroups');
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should check VBP toggle button status', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('exist');
    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB))
      .should('exist')
      .click();

    cy.get(testId(PRODUCT_EDIT_VBP_INFORMATION_SECTION)).should('exist');

    cy.wait('@taxGroups');

    cy.get('@searchedProduct')
      .its('is_volume_based_price_enabled')
      .then((is_volume_based_price_enabled) => {
        if (is_volume_based_price_enabled === PRODUCT_VBP.ENABLED) {
          cy.get(testId(PRODUCT_EDIT_VBP_STATUS_TOGGLE)).should('be.checked');

          cy.get(testId(PRODUCT_EDIT_VBP_STATUS_TOGGLE_LABEL))
            .should('exist')
            .contains('Activated');
        }

        if (is_volume_based_price_enabled === PRODUCT_VBP.DISABLED) {
          cy.get(testId(PRODUCT_EDIT_VBP_STATUS_TOGGLE)).should(
            'not.be.checked'
          );

          cy.get(testId(PRODUCT_EDIT_VBP_STATUS_TOGGLE_LABEL))
            .should('exist')
            .contains('Deactivated');
        }
      });
  });

  it('should check VBP rule labels', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('exist');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB))
      .should('exist')
      .click();

    cy.get(testId(PRODUCT_EDIT_VBP_INFORMATION_SECTION)).should('exist');
    cy.wait('@taxGroups');

    cy.get('@searchedProduct')
      .its('is_volume_based_price_enabled')
      .then((is_volume_based_price_enabled) => {
        if (is_volume_based_price_enabled === PRODUCT_VBP.DISABLED) {
          cy.wait(1000);
          cy.get(testId(PRODUCT_EDIT_VBP_STATUS_TOGGLE))
            .should('exist')
            .click();
        }
      });

    cy.get('@searchedProduct')
      .its('volume_based_prices')
      .then((volume_based_prices) => {
        if (volume_based_prices && volume_based_prices?.length) {
          volume_based_prices?.forEach((_rule: TObject, index: number) => {
            cy.get(
              testId(`${PRODUCT_EDIT_VBP_PRICE_FORMCONTROL}-${index}-label`)
            ).contains(`${VBP_LABELS.PRICE} ${index + 1}`);
          });
        } else {
          cy.get(
            testId(`${PRODUCT_EDIT_VBP_PRICE_FORMCONTROL}-0-label`)
          ).contains(`${VBP_LABELS.PRICE} 1`);
        }
      });
  });

  it('should check VBP rule validations', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('exist');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB))
      .should('exist')
      .click();

    cy.get(testId(PRODUCT_EDIT_VBP_INFORMATION_SECTION)).should('exist');
    cy.wait('@taxGroups');

    cy.get('@searchedProduct').then((productData: TObject) => {
      if (productData?.is_volume_based_price_enabled === PRODUCT_VBP.DISABLED) {
        cy.wait(1000);
        cy.get(testId(PRODUCT_EDIT_VBP_STATUS_TOGGLE))
          .should('exist')
          .click();
      }

      if (
        productData?.volume_based_prices &&
        productData?.volume_based_prices?.length
      ) {
        productData?.volume_based_prices?.forEach(() => {
          cy.wait(100);
          cy.get(testId(`${PRODUCT_EDIT_VBP_DELETE_BUTTON}-0`))
            .should('exist')
            .click();
        });
      }

      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();

      cy.get(testId(`${PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL}-error`))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(VBP_ERRORS.MINIMUM_VBP);
        });

      cy.get(testId(`${PRODUCT_EDIT_VBP_ADD_MORE_BUTTON}`))
        .should('exist')
        .click();

      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();

      cy.get(testId(`${PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL}-error`))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(VBP_ERRORS.PRICE_REQUIRED_1);
        });

      cy.get(testId(`${PRODUCT_EDIT_VBP_PRICE_INPUT}-0`))
        .should('exist')
        .clear()
        .type(productData?.price)
        .should('have.value', productData?.price);

      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();

      cy.get(testId(`${PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL}-error`))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(VBP_ERRORS.QUANTITY_FROM_1);
        });

      cy.get(testId(`${PRODUCT_EDIT_VBP_QUANTITYFROM_INPUT}-0`))
        .should('exist')
        .clear()
        .type('1')
        .should('have.value', '1');

      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();

      cy.get(testId(`${PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL}-error`))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(VBP_ERRORS.QUANTITY_TO_1);
        });

      cy.get(testId(`${PRODUCT_EDIT_VBP_QUANTITYTO_INPUT}-0`))
        .should('exist')
        .clear()
        .type('3')
        .should('have.value', '3');

      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();

      cy.get(testId(`${PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL}-error`))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(VBP_ERRORS.PRICE_REQUIRED_2);
        });

      cy.get(testId(`${PRODUCT_EDIT_VBP_PRICE_INPUT}-1`))
        .should('exist')
        .clear()
        .type(`${productData?.price - 5}`)
        .should('have.value', `${productData?.price - 5}`);

      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();

      cy.get(testId(`${PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL}-error`))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(VBP_ERRORS.QUANTITY_FROM_2);
        });

      cy.get(testId(`${PRODUCT_EDIT_VBP_QUANTITYFROM_INPUT}-1`))
        .should('exist')
        .clear()
        .type('4')
        .should('have.value', '4');

      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();
    });
  });
});
