/* eslint-disable @typescript-eslint/no-shadow */
import { testId } from '../../../support/utils';
import {
  EDIT_MOV_RULE_ADDED_SKU_SECTION,
  EDIT_MOV_RULE_BUTTONS,
  EDIT_MOV_RULE_CITY_FORMCONTROL,
  EDIT_MOV_RULE_CITY_SELECT,
  EDIT_MOV_RULE_ID_TEXT,
  EDIT_MOV_RULE_LOCATION_FORMCONTROL,
  EDIT_MOV_RULE_LOCATION_SELECT,
  EDIT_MOV_RULE_SAVE_BUTTON,
  EDIT_MOV_RULE_SELECT_PARAMETERS_SECTION,
  MOV_LISTING_DATATABLE,
  MOV_LISTING_ROW_EDIT_BUTTON,
  MOV_RULES_SEARCH_ENDPOINT_DEV,
} from '../../constants/mov';

describe('MOV Rules :: Edit Rule', () => {
  beforeEach(() => {
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRuleSearch');
    cy.login();
    cy.navigateToMOVTab();
  });

  it('should verify that rule edit screen is visible', () => {
    cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
      .first()
      .should('be.visible', 'ready')
      .click({ force: true });
  });

  it('should verify that rule edit screen information', () => {

    cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
      .first()
      .should('be.visible', 'ready')
      .click({ force: true });

    cy.get(testId(`${EDIT_MOV_RULE_CITY_FORMCONTROL}-label`))
      .should('be.visible')
      .should('have.text', 'Select City');

    cy.get(testId(`${EDIT_MOV_RULE_LOCATION_FORMCONTROL}-label`))
      .should('be.visible')
      .should('have.text', 'Select Location');

    cy.get(testId(EDIT_MOV_RULE_CITY_SELECT))
      .should('be.visible')
      .should('be.disabled');

    cy.get(testId(EDIT_MOV_RULE_LOCATION_SELECT))
      .should('be.visible')
      .should('be.disabled');

    cy.get(testId(EDIT_MOV_RULE_ID_TEXT)).should('be.visible');

    cy.get(testId(EDIT_MOV_RULE_SELECT_PARAMETERS_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(EDIT_MOV_RULE_ADDED_SKU_SECTION)).should('be.visible');
  });

  it('should verify rule id and rule name', () => {

    cy.wait('@movRuleSearch').then((response) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data?.rules &&
        Array.isArray(body?.data?.rules) &&
        body?.data?.rules?.length
      ) {
        const ruleData = body?.data?.rules?.[0];

        cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
          .first()
          .should('be.visible')
          .click({ force: true });

        cy.get(testId(EDIT_MOV_RULE_ID_TEXT))
          .should('be.visible')
          .should('have.text', `Rule ID: ${ruleData?.id} | ${ruleData?.name}`);
      }
    });
  });



  it('verify "save and update" changes button is visible and clickable', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SAVE_BUTTON))
          .should('be.visible')
          .should('have.text', EDIT_MOV_RULE_BUTTONS.SAVE)
          .click();
      }
    });
  });

  it('verify on clicking "save and update" button, user is redirected to listing screen', () => {
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
        cy.wait(1000);
        cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
          .first()
          .should('be.visible', 'ready')
          .click({ force: true });

        cy.wait(1000);
        cy.get(testId(EDIT_MOV_RULE_SAVE_BUTTON))
          .should('be.visible')
          .should('have.text', EDIT_MOV_RULE_BUTTONS.SAVE)
          .click();
        
        cy.wait(500);
        cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('be.visible');

      }
    });
  });

});
