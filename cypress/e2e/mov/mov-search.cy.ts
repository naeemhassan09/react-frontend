import { testId } from '../../support/utils';
import {
  MOV_RULES_SEARCH_ENDPOINT_DEV,
  MOV_RULE_SEARCH_BY_RULE_NAME,
  MOV_RULE_SEARCH_INPUT,
  MOV_RULE_TEST_RULE_NAME,
  NAV_BAR_MOV_RULES_TAB,
  PRODUCT_MOV_APP_URL,
} from '../constants/mov';

describe('MOV Listing :: Search', () => {
  beforeEach(() => {
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRuleSearch');
    cy.login();
  });

  it('should search rule by rule name', () => {
    cy.visit('/');
    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('exist')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.wait('@movRuleSearch');

    //search by rule name
    cy.get(testId(MOV_RULE_SEARCH_INPUT)).first().type(MOV_RULE_TEST_RULE_NAME);
    cy.get(testId(MOV_RULE_SEARCH_BY_RULE_NAME)).should('be.visible').click();

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);
      expect(body?.data?.length).not.equal(0);

      if (body?.data && Array.isArray(body?.data) && body?.data?.length) {
        expect(body?.data?.[0]?.name).to.equal(MOV_RULE_TEST_RULE_NAME);
      }
    });
  });

  it('should search rule by rule id', () => {
    cy.visit('/');
    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('exist')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.wait('@movRuleSearch');

    //search by rule id
    cy.get(testId(MOV_RULE_SEARCH_INPUT)).first().type(MOV_RULE_TEST_RULE_NAME);
    cy.get(testId(MOV_RULE_SEARCH_BY_RULE_NAME)).should('be.visible').click();

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);
      expect(body?.data?.length).not.equal(0);

      if (body?.data && Array.isArray(body?.data) && body?.data?.length) {
        expect(body?.data?.[0]?.name).to.equal(MOV_RULE_TEST_RULE_NAME);
      }
    });
  });
});
