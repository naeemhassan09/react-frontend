import { testId } from '../../../support/utils';
import {
  EDIT_MOV_RULE_BACK_BUTTON,
  EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_CANCEL_BUTTON,
  EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_CONFIRM_BUTTON,
  EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_HEADING,
  EDIT_MOV_RULE_MOV_INPUT,
  MOV_LISTING_DATATABLE,
  MOV_LISTING_ROW_EDIT_BUTTON,
  MOV_RULES_SEARCH_ENDPOINT_DEV,
} from '../../constants/mov';

describe('MOV Rules :: Edit Rule Confirmation Popups', () => {
  beforeEach(() => {
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRuleSearch');
    cy.login();
    cy.navigateToMOVTab();

  });

  it('verify on back button, confirmation dialogue box should appear', () => {
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
      
        cy.get(testId(EDIT_MOV_RULE_MOV_INPUT))
          .should('be.visible')
          .clear()
          .type('1200')
          .should('have.value', '1200');
        
        cy.get(testId(EDIT_MOV_RULE_BACK_BUTTON))
          .should('be.visible')
          .click();
        
        cy.get(testId(EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_HEADING))
          .should('be.visible');
      }
    });
  });

  it('verify on clicking "Yes, continue" of discard confirmation, user is redirected to listing screen', () => {
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
      
        cy.get(testId(EDIT_MOV_RULE_MOV_INPUT))
          .should('be.visible')
          .clear()
          .type('1200')
          .should('have.value', '1200');
        
        cy.get(testId(EDIT_MOV_RULE_BACK_BUTTON))
          .should('be.visible')
          .click();
        
        cy.get(testId(EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_HEADING))
          .should('be.visible');

        cy.get(testId(EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_CONFIRM_BUTTON))
          .should('be.visible')
          .click();

        cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('be.visible');
      }
    });
  });

  it('verify on clicking "Cancel" of discard confirmation, user is able to continue editing', () => {
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
      
        cy.get(testId(EDIT_MOV_RULE_MOV_INPUT))
          .should('be.visible')
          .clear()
          .type('1200')
          .should('have.value', '1200');
        
        cy.get(testId(EDIT_MOV_RULE_BACK_BUTTON))
          .should('be.visible')
          .click();
        
        cy.get(testId(EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_HEADING))
          .should('be.visible');

        cy.get(testId(EDIT_MOV_RULE_DISCARD_CONFIRMATION_MODAL_CANCEL_BUTTON))
          .should('be.visible')
          .click();

          cy.wait('@movRuleSearch');
          cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('not.exist');
      }
    });
  });
});