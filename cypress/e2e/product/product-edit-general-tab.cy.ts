import { testId } from '../../support/utils';
import {
  EDIT_LOGISTICS_STOCK_QUANTITY_INPUT,
  EDIT_PURCHASING_REASON_FORMCONTROL,
  EDIT_PURCHASING_REASON_SELECT,
  EDIT_PURCHASING_SKU_STATUS_ACTIVATE_BUTTON,
  EDIT_PURCHASING_SKU_STATUS_DEACTIVATE_BUTTON,
  EDIT_PURCHASING_SKU_STATUS_FORMCONTROL,
  EDIT_SKU_INFORMATION_BRAND_FORMCONTROL,
  EDIT_SKU_INFORMATION_DESCRIPTION_FORMCONTROL,
  EDIT_SKU_INFORMATION_NAME_FORMCONTROL,
  EDIT_SKU_INFORMATION_NAME_INPUT,
  EDIT_SKU_INFORMATION_QTY_LIMIT_FORMCONTROL,
  EDIT_SKU_INFORMATION_SKU_FORMCONTROL,
  EDIT_SKU_INFORMATION_SKU_INPUT,
  PRODUCT_DISABLE_STATUS_BUTTON,
  PRODUCT_EDIT_BACK_BUTTON,
  PRODUCT_EDIT_BACK_PRESS_CONFIRMATION_MODAL,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_PURCHASING_INFROMATION_SECTION,
  PRODUCT_EDIT_SAVE_BUTTON,
  PRODUCT_EDIT_SKU_INFROMATION_SECTION,
  PRODUCT_ENABLE_STATUS_BUTTON,
  PRODUCT_PURCHASING_OPTIONS,
  PRODUCT_SKU_REASONS_ENDPOINT,
  SKU_INFORMATION_ERRORS,
  SKU_INFORMATION_LABELS,
  SKU_PURCHASE_STATUS_BUTTON,
  SKU_PURCHASE_STATUS_LABEL,
  SKU_PURCHASING_ERRORS,
} from '../constants/product';

describe('Product Edit : General Tab', () => {
  beforeEach(() => {
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should verify upon clicking the back icon,a confirmation dialogue box will appear', () => {
    
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_SKU_INFROMATION_SECTION)).should('be.visible');

    cy.get(testId(EDIT_SKU_INFORMATION_NAME_INPUT))
      .should('be.visible')
      .clear();

    cy.get(testId(PRODUCT_EDIT_BACK_BUTTON)).should('be.visible').click();

    cy.get(
      testId(`${PRODUCT_EDIT_BACK_PRESS_CONFIRMATION_MODAL}-heading`)
    ).should('be.visible');

    cy.get(testId(`${PRODUCT_EDIT_BACK_PRESS_CONFIRMATION_MODAL}-body`)).should(
      'be.visible'
    );

    cy.get(
      testId(`${PRODUCT_EDIT_BACK_PRESS_CONFIRMATION_MODAL}-cancel-button`)
    )
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_BACK_BUTTON)).should('be.visible').click();

    cy.get(
      testId(`${PRODUCT_EDIT_BACK_PRESS_CONFIRMATION_MODAL}-confirm-button`)
    )
      .should('be.visible')
      .click();
  });

  it('should verify enable/disable sku touchpoint is visible on screen', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_SKU_INFROMATION_SECTION)).should('be.visible');

    cy.get(testId(PRODUCT_ENABLE_STATUS_BUTTON))
      .should('be.visible')
      .should('have.text', 'Enable')
      .click();

    cy.get(testId(PRODUCT_DISABLE_STATUS_BUTTON))
      .should('be.visible')
      .should('have.text', 'Disable')
      .click();
  });

  it('should validate SKU information section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');
    cy.get(testId(PRODUCT_EDIT_SKU_INFROMATION_SECTION)).should('be.visible');

    cy.get(testId(`${EDIT_SKU_INFORMATION_NAME_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_INFORMATION_LABELS.NAME);
      });

    cy.get(testId(`${EDIT_SKU_INFORMATION_SKU_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_INFORMATION_LABELS.SKU);
      });

    cy.get(testId(`${EDIT_SKU_INFORMATION_DESCRIPTION_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_INFORMATION_LABELS.DESCRIPTION);
      });

    cy.get(testId(`${EDIT_SKU_INFORMATION_BRAND_FORMCONTROL}-label`))
    .should('not.exist');

    cy.get(testId(`${EDIT_SKU_INFORMATION_QTY_LIMIT_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_INFORMATION_LABELS.SKU_QUANTITY);
      });

    cy.get(testId(EDIT_SKU_INFORMATION_NAME_INPUT))
      .should('be.visible')
      .clear();

    cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('be.visible').click();

    cy.get(testId(`${EDIT_SKU_INFORMATION_NAME_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_INFORMATION_ERRORS.NAME);
      });

    cy.get(testId(EDIT_SKU_INFORMATION_NAME_INPUT)).type('SKU name cy');

    cy.get(testId(EDIT_SKU_INFORMATION_SKU_INPUT))
      .should('be.visible')
      .should('be.disabled');
  });

  it('should validate warehousing & logistics section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');
    cy.get(testId(PRODUCT_EDIT_SKU_INFROMATION_SECTION)).should('be.visible');

    cy.get(testId(EDIT_LOGISTICS_STOCK_QUANTITY_INPUT))
      .should('be.visible')
      .should('be.disabled');

    cy.get(testId(EDIT_LOGISTICS_STOCK_QUANTITY_INPUT))
      .should('be.visible')
      .should('be.disabled');
  });

  it('should validate purchasing information section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');
    cy.get(testId(PRODUCT_EDIT_PURCHASING_INFROMATION_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(`${EDIT_PURCHASING_SKU_STATUS_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_PURCHASE_STATUS_LABEL);
      });

    cy.get(testId(EDIT_PURCHASING_SKU_STATUS_ACTIVATE_BUTTON))
      .should('be.visible')
      .contains(SKU_PURCHASE_STATUS_BUTTON.ACTIVATE);

    cy.get(testId(EDIT_PURCHASING_SKU_STATUS_DEACTIVATE_BUTTON))
      .should('be.visible')
      .contains(SKU_PURCHASE_STATUS_BUTTON.DEACTIVATE);
    
    cy.intercept('GET', PRODUCT_SKU_REASONS_ENDPOINT).as('fetchReasons');

    cy.get('@searchedProduct')
      .its('is_deactivated')
      .then((is_deactivated) => {
        if (!is_deactivated) {
          cy.get(testId(EDIT_PURCHASING_SKU_STATUS_DEACTIVATE_BUTTON))
            .should('exist')
            .first()
            .click();

          cy.wait('@fetchReasons').then((resp: TResponse) => {
            const { request: req } = resp;

            expect(
              req?.url.includes(PRODUCT_PURCHASING_OPTIONS.DISABLED)
            ).to.equal(true);
          });
        } else {
          cy.get(testId(EDIT_PURCHASING_SKU_STATUS_ACTIVATE_BUTTON))
            .should('exist')
            .first()
            .click();

          cy.wait('@fetchReasons').then((resp: TResponse) => {
            const { request: req } = resp;

            expect(
              req?.url.includes(PRODUCT_PURCHASING_OPTIONS.ENABLED)
            ).to.equal(true);
          });
        }

        cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('be.visible').click();

        cy.get(testId(`${EDIT_PURCHASING_REASON_FORMCONTROL}-error`))
          .invoke('text')
          .then((value) => {
            expect(value).to.equal(SKU_PURCHASING_ERRORS.REASON);
          });
      });

    cy.get(testId(EDIT_PURCHASING_REASON_SELECT))
      .should('exist')
      .first()
      .select(1);
  });
});
