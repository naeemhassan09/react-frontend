import { testId } from '../../support/utils';
import {
  EDIT_SKU_SIZE_HEIGHT_FORMCONTROL,
  EDIT_SKU_SIZE_HEIGHT_INPUT,
  EDIT_SKU_SIZE_LENGTH_FORMCONTROL,
  EDIT_SKU_SIZE_LENGTH_INPUT,
  EDIT_SKU_SIZE_SIZE_FORMCONTROL,
  EDIT_SKU_SIZE_SIZE_INPUT,
  EDIT_SKU_SIZE_UNIT_FORMCONTROL,
  EDIT_SKU_SIZE_UNIT_INPUT,
  EDIT_SKU_SIZE_WEIGHT_FORMCONTROL,
  EDIT_SKU_SIZE_WEIGHT_INPUT,
  EDIT_SKU_SIZE_WIDTH_FORMCONTROL,
  EDIT_SKU_SIZE_WIDTH_INPUT,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_SKU_SIZE_PAGE_SECTION,
  PRODUCT_EDIT_TABSLAYOUT_WEIGHT_TAB,
  SKU_SIZE_LABELS,
} from '../constants/product';

describe('Product Edit : Weight and Packaging', () => {
  beforeEach(() => {
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should validate SKU Size section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_WEIGHT_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_SKU_SIZE_PAGE_SECTION)).should('be.visible');

    cy.get(testId(`${EDIT_SKU_SIZE_SIZE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_SIZE_LABELS.SIZE);
      });

    cy.get(testId(EDIT_SKU_SIZE_SIZE_INPUT))
      .should('be.visible')
      .clear()
      .type('950gm x 1')
      .should('have.value', '950gm x 1');

    cy.get(testId(`${EDIT_SKU_SIZE_UNIT_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_SIZE_LABELS.UNIT);
      });

    cy.get(testId(EDIT_SKU_SIZE_UNIT_INPUT))
      .should('be.visible')
      .clear()
      .type('kg')
      .should('have.value', 'kg');

    cy.get(testId(`${EDIT_SKU_SIZE_LENGTH_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_SIZE_LABELS.LENGTH);
      });

    cy.get(testId(EDIT_SKU_SIZE_LENGTH_INPUT))
      .should('be.visible')
      .clear()
      .type('10')
      .should('have.value', '10');

    cy.get(testId(`${EDIT_SKU_SIZE_WIDTH_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_SIZE_LABELS.WIDTH);
      });

    cy.get(testId(EDIT_SKU_SIZE_WIDTH_INPUT))
      .should('be.visible')
      .clear()
      .type('20')
      .should('have.value', '20');

    cy.get(testId(`${EDIT_SKU_SIZE_HEIGHT_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_SIZE_LABELS.HEIGHT);
      });

    cy.get(testId(EDIT_SKU_SIZE_HEIGHT_INPUT))
      .should('be.visible')
      .clear()
      .type('15')
      .should('have.value', '15');

    cy.get(testId(`${EDIT_SKU_SIZE_WEIGHT_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(SKU_SIZE_LABELS.WEIGHT);
      });

    cy.get(testId(EDIT_SKU_SIZE_WEIGHT_INPUT))
      .should('be.visible')
      .clear()
      .type('1')
      .should('have.value', '1');
  });
});
