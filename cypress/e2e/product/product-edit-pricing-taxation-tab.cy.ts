import { testId } from '../../support/utils';
import {
  BASIC_PRICING_INFORMATION_ERRORS,
  BASIC_PRICING_INFORMATION_LABELS,
  EDIT_BASIC_PRICING_DEFAULT_PRICE_FORMCONTROL,
  EDIT_BASIC_PRICING_INFORMATION_MRP_INPUT,
  EDIT_BASIC_PRICING_INFORMATION_PRICE_INPUT,
  EDIT_BASIC_PRICING_INFORMATION_TRADE_PRICE_INPUT,
  EDIT_BASIC_PRICING_MRP_FORMCONTROL,
  EDIT_BASIC_PRICING_TRADE_PRICE_FORMCONTROL,
  EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE,
  EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE_TEXT,
  EDIT_TAXATION_INFORMATION_TAX_PERCENTAGE_INPUT,
  EDIT_TAXATION_TAX_CATEGORY_FORMCONTROL,
  EDIT_TAXATION_TAX_CATEGORY_SELECT,
  EDIT_TAXATION_TAX_GROUP_FORMCONTROL,
  EDIT_TAXATION_TAX_GROUP_SELECT,
  EDIT_TAXATION_TAX_INCLUSIVE_FORMCONTROL,
  EDIT_TAXATION_TAX_PERCENTAGE_FORMCONTROL,
  PRODUCT_EDIT_BASIC_PRICING_INFORMATION_SECTION,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_SAVE_BUTTON,
  PRODUCT_EDIT_SAVE_CONFIRMATION_BUTTON,
  PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB,
  PRODUCT_EDIT_TAXATION_INFORMATION_SECTION,
  TAXATION_LABELS,
  TAX_INFORMATION_DATATABLE,
  TAX_INFORMATION_DATATABLE_HEADINGS,
} from '../constants/product';

describe('Product Edit : Pricing and Taxation', () => {
  beforeEach(() => {
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should validate Basic Pricing section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_BASIC_PRICING_INFORMATION_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(`${EDIT_BASIC_PRICING_DEFAULT_PRICE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(BASIC_PRICING_INFORMATION_LABELS.DEFAULT_PRICE);
      });

    cy.get(testId(`${EDIT_BASIC_PRICING_MRP_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(BASIC_PRICING_INFORMATION_LABELS.MRP);
      });

    cy.get(testId(`${EDIT_BASIC_PRICING_TRADE_PRICE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(BASIC_PRICING_INFORMATION_LABELS.TRADE_PRICE);
      });

    cy.get(testId(EDIT_BASIC_PRICING_INFORMATION_PRICE_INPUT))
      .should('be.visible')
      .clear();

    cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('be.visible').click();

    cy.get(testId(`${EDIT_BASIC_PRICING_DEFAULT_PRICE_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(BASIC_PRICING_INFORMATION_ERRORS.DEFAULT_PRICE);
      });

    cy.get(testId(EDIT_BASIC_PRICING_INFORMATION_PRICE_INPUT)).type('100');

    cy.get(testId(EDIT_BASIC_PRICING_INFORMATION_MRP_INPUT))
      .should('be.visible')
      .clear();

    cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('be.visible').click();

    cy.get(testId(`${EDIT_BASIC_PRICING_MRP_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(BASIC_PRICING_INFORMATION_ERRORS.MRP);
      });

    cy.get(testId(EDIT_BASIC_PRICING_INFORMATION_MRP_INPUT)).type('150');

    cy.get(testId(EDIT_BASIC_PRICING_INFORMATION_TRADE_PRICE_INPUT))
      .should('be.visible')
      .clear();

    cy.get(testId(EDIT_BASIC_PRICING_INFORMATION_TRADE_PRICE_INPUT)).type(
      '150'
    );
  });

  it('should validate Taxation section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_TAXATION_INFORMATION_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(`${EDIT_TAXATION_TAX_INCLUSIVE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(TAXATION_LABELS.TAX_INCLUSIVE);
      });

    cy.get(testId(`${EDIT_TAXATION_TAX_PERCENTAGE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(TAXATION_LABELS.TAX_PERCENTAGE);
      });

    cy.get(testId(`${EDIT_TAXATION_TAX_CATEGORY_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(TAXATION_LABELS.TAX_CATEGORY);
      });

    cy.get(testId(`${EDIT_TAXATION_TAX_GROUP_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(TAXATION_LABELS.TAX_GROUP);
      });

    cy.get('@searchedProduct')
      .its('tax_inclusive')
      .then((tax_inclusive) => {
        if (tax_inclusive === 0) {
          cy.get(testId(EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE)).should(
            'not.be.checked'
          );
          cy.get(testId(EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE_TEXT))
            .invoke('text')
            .then((value) => {
              expect(value).to.equal('No');
            });
        } else {
          cy.get(testId(EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE)).should(
            'be.visible'
          );
          cy.get(testId(EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE_TEXT))
            .invoke('text')
            .then((value) => {
              expect(value).to.equal('Yes');
            });
        }
      });

    cy.get(testId(EDIT_TAXATION_INFORMATION_TAX_PERCENTAGE_INPUT))
      .should('be.visible')
      .clear();

    cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('be.visible').click();
    cy.get(testId(PRODUCT_EDIT_SAVE_CONFIRMATION_BUTTON)).should('be.visible').click();
    
     /* validations removed from screen 
    cy.get(testId(`${EDIT_TAXATION_TAX_PERCENTAGE_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(TAXATION_INFORMATION_ERRORS.TAX_PERCENTAGE);
      });

     cy.get(testId(`${EDIT_TAXATION_TAX_CATEGORY_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(TAXATION_INFORMATION_ERRORS.TAX_CATEGORY);
      });
    */
    cy.get(testId(EDIT_TAXATION_INFORMATION_TAX_PERCENTAGE_INPUT)).type('1');

    cy.get(testId(EDIT_TAXATION_TAX_CATEGORY_SELECT))
      .should('be.visible')
      .select(0);

    cy.get(testId(EDIT_TAXATION_TAX_CATEGORY_SELECT))
      .should('be.visible')
      .select(1);

    cy.get(testId(EDIT_TAXATION_TAX_GROUP_SELECT))
      .should('be.visible')
      .select(1);

    cy.get(`${testId(TAX_INFORMATION_DATATABLE)}`).should('be.visible');

    cy.get(`${testId(TAX_INFORMATION_DATATABLE)} th`).each((heading, i) => {
      expect(heading.text()).to.equal(TAX_INFORMATION_DATATABLE_HEADINGS[i]);
    });
  });
});
