import { testId } from '../../support/utils';
import {
  MOV_RULES_SKU_BUTTON_LABEL,
  CREATE_MOV_RULE_ADD_SKU_SELECT_BUTTON,
  CREATE_MOV_RULE_SELECT_SKU_BUTTON,
  CREATE_MOV_RULE_SELECT_SKU_MODAL_HEADING,
  CREATE_MOV_RULE_SELECT_SKU_SEARCH_INPUT,
  MOV_RULE_SKU_SELECT_DATATABLE,
  PRODUCT_SEARCH_ENDPOINT_DEV,
  SKU_SELECT_LISTING_TABLE_HEADINGS,
} from '../constants/mov';
import {  PRODUCT_TEST_SKU_NAME } from '../constants/product';

describe('MOV Rules :: Select SKU\'s', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV).as('productSearch');
    cy.login();
  });

  it('should verify Select SKU Button popup', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULE_SELECT_SKU_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
      .click();

    cy.get(testId(CREATE_MOV_RULE_SELECT_SKU_MODAL_HEADING))
      .should('be.visible')
      .should('have.text', 'Select SKU’s');

    cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)}`).should(
      'be.visible'
    );
    cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)} th`).each(
      (heading, i) => {
        expect(heading.text()).to.equal(SKU_SELECT_LISTING_TABLE_HEADINGS[i]);
      }
    );
  });

  it('should search products by sku name', () => {
    cy.navigateToMOVRulesCreationTab();

    //search by sku name
    cy.get(testId(CREATE_MOV_RULE_SELECT_SKU_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
      .click();
    
    cy.wait('@productSearch');

    cy.get(testId(CREATE_MOV_RULE_SELECT_SKU_SEARCH_INPUT))
      .type(`${PRODUCT_TEST_SKU_NAME}{enter}`);

    cy.get(testId(CREATE_MOV_RULE_ADD_SKU_SELECT_BUTTON))
      .should('be.visible')
      .should('have.text', 'Select');
    });

    it('verify user should be able to add multiple skus', () => {
      cy.navigateToMOVRulesCreationTab();
  
      cy.get(testId(CREATE_MOV_RULE_SELECT_SKU_BUTTON))
        .should('be.visible')
        .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
        .click();
      
      cy.wait('@productSearch');
  
      cy.get(testId(CREATE_MOV_RULE_ADD_SKU_SELECT_BUTTON))
        .should('be.visible')
        .should('have.text', 'Select');

      cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)} tbody tr`)
        .eq(2)
        .find('input').check({ force: true });
  
      cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)} tbody tr`)
        .eq(3)
        .find('input').check({ force: true });

      cy.get(testId(CREATE_MOV_RULE_ADD_SKU_SELECT_BUTTON))
        .should('be.visible')
        .should('have.text', 'Select')
        .click();
    });
});
