import { testId } from '../../support/utils';
import {
  PRODUCT_EDIT_CATALOGUE_IMAGE_UPLOAD_SECTION,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_CART_PREVIEW,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_CART_PREVIEW_HEADING,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_CATEGORY_PREVIEW,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_CATEGORY_PREVIEW_HEADING,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_PREVIEW_BUTTON,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_PREVIEW_CLOSE_BUTTON,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_SEARCH_PREVIEW,
  PRODUCT_EDIT_CATALOGUE_PRODUCT_SEARCH_PREVIEW_HEADING,
  PRODUCT_EDIT_CATALOGUE_TAGS,
  PRODUCT_EDIT_CATALOGUE_TAGS_SECTION,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB,
  PRODUCT_PREVIEW_HEADINGS,
} from '../constants/product';

describe('Product Edit :: Product Catalogue', () => {
  beforeEach(() => {
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should validate Product preview section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_IMAGE_UPLOAD_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_PREVIEW_BUTTON))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_CART_PREVIEW)).should(
      'be.visible'
    );

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_CART_PREVIEW_HEADING))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRODUCT_PREVIEW_HEADINGS.CART_VIEW_HEADING);
      });

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_SEARCH_PREVIEW)).should(
      'be.visible'
    );

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_SEARCH_PREVIEW_HEADING))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRODUCT_PREVIEW_HEADINGS.SEARCH_VIEW_HEADING);
      });

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_CATEGORY_PREVIEW)).should(
      'be.visible'
    );

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_CATEGORY_PREVIEW_HEADING))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRODUCT_PREVIEW_HEADINGS.CATEGORY_VIEW_HEADING);
      });

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_PRODUCT_PREVIEW_CLOSE_BUTTON))
      .should('be.visible')
      .click();
  });

  it('should verfiy Tags section', () => {
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('be.visible');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB))
      .should('be.visible')
      .click();

    cy.get(testId(PRODUCT_EDIT_CATALOGUE_TAGS_SECTION)).should('be.visible');

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_TAGS}-input`))
      .should('be.visible')
      .clear()
      .type('tag name1')
      .should('have.value', 'tag name1');

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_TAGS}-create-button`))
      .should('be.visible')
      .click();

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_TAGS}-input`))
      .should('be.visible')
      .clear()
      .type('tag name2')
      .should('have.value', 'tag name2');

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_TAGS}-create-button`))
      .should('be.visible')
      .click();

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_TAGS}-tag-0`))
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('tag name2');
      });

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_TAGS}-tag-0-remove-button`))
      .should('be.visible')
      .click();

    cy.get(testId(`${PRODUCT_EDIT_CATALOGUE_TAGS}-tag-0`))
      .invoke('text')
      .then((value) => {
        expect(value.trim()).to.equal('tag name1');
      });
  });
});
