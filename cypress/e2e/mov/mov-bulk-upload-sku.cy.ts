import { testId } from '../../support/utils';
import {
  MOV_RULES_SKU_BUTTON_LABEL,
  CREATE_MOV_RULE_BULK_UPLOAD_SKU_BUTTON,
  CREATE_MOV_RULE_BUL_UPLOAD_SKU_MODAL_CANCEL_BUTTON,
  CREATE_MOV_RULE_BUL_UPLOAD_SKU_MODAL_HEADING,
} from '../constants/mov';

describe('MOV Rules :: Create Rule :: Bulk Upload SKU', () => {
  beforeEach(() => {
    cy.login();
  });


  it('should verify Bulk Upload SKU Button popup should be opened on clicking upload sku button', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULE_BULK_UPLOAD_SKU_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.UPLOAD_SKU)
      .click();

    cy.get(testId(CREATE_MOV_RULE_BUL_UPLOAD_SKU_MODAL_HEADING))
      .should('be.visible')
      .should('have.text', 'Upload CSV');
  });

  it('verify upon clicking the "Cancel" button, confirmation popup will be closed', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULE_BULK_UPLOAD_SKU_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.UPLOAD_SKU)
      .click();

    cy.get(testId(CREATE_MOV_RULE_BUL_UPLOAD_SKU_MODAL_HEADING))
      .should('be.visible')
      .should('have.text', 'Upload CSV');
    
    cy.get(testId(CREATE_MOV_RULE_BUL_UPLOAD_SKU_MODAL_CANCEL_BUTTON))
      .should('be.visible')
      .should('have.text', 'Cancel')
      .click();

  });

});
