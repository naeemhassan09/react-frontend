import { testId } from '../../../support/utils';
import {
  MOV_RULES_SKU_BUTTON_LABEL,
  MOV_RULES_SEARCH_ENDPOINT_DEV,
  MOV_LISTING_ROW_EDIT_BUTTON,
  EDIT_MOV_RULE_BULK_UPLOAD_SKU_BUTTON,
  EDIT_MOV_RULE_BULK_UPLOAD_SKU_MODAL_HEADING,
  EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_HEADING,
  EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_CANCEL_BUTTON,
  EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON,
  PRODUCT_SEARCH_ENDPOINT_DEV,
} from '../../constants/mov';

describe('MOV Rules :: Edit Rule :: Bulk Upload SKU', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV, {fixture: 'get-product-response'}).as('productSearch');
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRuleSearch');
    cy.login();
  });

  it('verify upon clicking Bulk Upload SKU Button , confirmation popup should be opened', () => {
    cy.navigateToMOVTab();
    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.rules &&
        Array.isArray(body?.data?.rules) &&
        body?.data?.rules?.length
      ) {
        cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
          .first()
          .should('be.visible', 'ready')
          .click({ force: true });

        cy.get(testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.UPLOAD_SKU)
          .click();

        cy.get(
          testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');
      }
    });
  });

  it('verify upon clicking the "Cancel" button, confirmation popup will be closed', () => {
    cy.navigateToMOVTab();

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.rules &&
        Array.isArray(body?.data?.rules) &&
        body?.data?.rules?.length
      ) {
        cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
          .first()
          .should('be.visible', 'ready')
          .click({ force: true });

        cy.get(testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.UPLOAD_SKU)
          .click();

        cy.get(
          testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_CANCEL_BUTTON)
        )
          .should('be.visible')
          .should('have.text', 'Cancel')
          .click();

        cy.get(
          testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('not.exist');
      }
    });
  });

  it('verify upon clicking the "Yes, continue" button, file upload popup is opened', () => {
    cy.navigateToMOVTab();

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.rules &&
        Array.isArray(body?.data?.rules) &&
        body?.data?.rules?.length
      ) {
        cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
          .first()
          .should('be.visible', 'ready')
          .click({ force: true });

        cy.get(testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.UPLOAD_SKU)
          .click();

        cy.get(
          testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(
            EDIT_MOV_RULE_BULK_UPLOAD_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON
          )
        )
          .should('be.visible')
          .click();

        cy.get(testId(EDIT_MOV_RULE_BULK_UPLOAD_SKU_MODAL_HEADING))
          .should('be.visible')
          .should('have.text', 'Upload CSV');
      }
    });
  });
});
