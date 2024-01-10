import { testId } from '../../support/utils';
import {
  LANGUAGE_SETTINGS_LABELS,
  PRODUCT_EDIT_CATALOGUE_LANGUAGE_FORMCONTROL,
  PRODUCT_EDIT_CATALOGUE_LANGUAGE_SECTION,
  PRODUCT_EDIT_CATALOGUE_LANGUAGE_SELECT,
  PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_DESCRIPTION_FORMCONTROL,
  PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_DESCRIPTION_INPUT,
  PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_NAME_FORMCONTROL,
  PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_NAME_INPUT,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB,
} from '../constants/product';

describe('Product Edit :: Product Catalogue :: Language Settings ', () => {
  beforeEach(() => {
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should validate Language Settings section labels', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_LANGUAGE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(LANGUAGE_SETTINGS_LABELS.LANGUAGE);
      });

    cy.get(
      testId(`${PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_NAME_FORMCONTROL}-label`)
    )
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(LANGUAGE_SETTINGS_LABELS.SKU_NAME);
      });

    cy.get(
      testId(
        `${PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_DESCRIPTION_FORMCONTROL}-label`
      )
    )
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(LANGUAGE_SETTINGS_LABELS.SKU_DESCRIPTION);
      });
  });

  it('should validate Language Settings section form fields', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SELECT))
      .should('be.visible')
      .select(1);

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SELECT))
      .should('be.visible')
      .select(2);

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SELECT))
      .should('be.visible')
      .select(3);

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_NAME_INPUT))
      .should('be.visible')
      .clear()
      .type('test sku name')
      .should('have.value', 'test sku name');

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_DESCRIPTION_INPUT))
      .should('be.visible')
      .clear()
      .type('test sku description')
      .should('have.value', 'test sku description');
  });

  it('should validate Language Settings section disabled fields', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_NAME_INPUT))
      .should('be.visible')
      .should('be.disabled');

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_DESCRIPTION_INPUT))
      .should('be.visible')
      .should('be.disabled');
  });
});
