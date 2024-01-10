import { testId } from '../../support/utils';
import {
  CATEGORIES_ERRORS,
  CATEGORIES_LABELS,
  FETCH_TAX_GROUPS_ENDPOINT,
  PRODUCT_EDIT_CATALOGUE_CATEGORIES_SECTION,
  PRODUCT_EDIT_CATEGORIES_ADD_MORE_BUTTON,
  PRODUCT_EDIT_CATEGORIES_ADD_NEW_ROW,
  PRODUCT_EDIT_CATEGORIES_L1_FORMCONTROL,
  PRODUCT_EDIT_CATEGORIES_L1_SELECT,
  PRODUCT_EDIT_CATEGORIES_L2_FORMCONTROL,
  PRODUCT_EDIT_CATEGORIES_L2_SELECT,
  PRODUCT_EDIT_CATEGORIES_P1_FORMCONTROL,
  PRODUCT_EDIT_CATEGORIES_P1_INPUT,
  PRODUCT_EDIT_CATEGORIES_P2_FORMCONTROL,
  PRODUCT_EDIT_CATEGORIES_P2_INPUT,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB,
} from '../constants/product';

describe('Product Edit :: Product Catalogue :: App Categories Section ', () => {
  beforeEach(() => {
    cy.intercept('GET', FETCH_TAX_GROUPS_ENDPOINT).as('taxGroups');
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should verify categories section labels', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');
    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB))
      .should('be.visible')
      .click();
    
    cy.wait('@taxGroups');

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_CATEGORIES_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L1_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CATEGORIES_LABELS.L1);
      });

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L2_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CATEGORIES_LABELS.L2);
      });

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_P1_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CATEGORIES_LABELS.P1);
      });

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_P2_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CATEGORIES_LABELS.P2);
      });

    cy.wait(500);
    cy.get(testId(PRODUCT_EDIT_CATEGORIES_ADD_MORE_BUTTON))
      .should('be.visible')
      .should('have.text', 'Add More')
      .click();

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L1_FORMCONTROL}-new-row-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CATEGORIES_ERRORS.L1);
      });

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L2_FORMCONTROL}-new-row-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CATEGORIES_ERRORS.L2);
      });

    cy.get(testId(PRODUCT_EDIT_CATEGORIES_ADD_NEW_ROW)).should('be.visible');

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L1_SELECT}-new-row`)).select(1);

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L2_SELECT}-new-row`)).select(1);

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_P1_INPUT}-new-row`))
      .should('be.visible')
      .should('have.value', '1');

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_P2_INPUT}-new-row`))
      .should('be.visible')
      .should('have.value', '1');
  });

  it('should verify categories selection should be disabled', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_CATEGORIES_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L1_SELECT}`))
      .should('be.visible')
      .should('be.disabled');

    cy.get(testId(`${PRODUCT_EDIT_CATEGORIES_L2_SELECT}`))
      .should('be.visible')
      .should('be.disabled');
  });
});
