import { testId } from '../../support/utils';
import {
  CREATE_MOV_RULES_CITY_SELECT,
  CREATE_MOV_RULES_ERRORS,
  CREATE_MOV_RULES_LABELS,
  CREATE_MOV_RULES_LOCATION_SELECT,
  MOV_RULES_SECTION,
  MOV_RULES_SKU_BUTTON_LABEL,
  CREATE_MOV_RULE_ACTIVE_STATUS_BUTTON,
  CREATE_MOV_RULE_ADDED_SKU_SECTION,
  CREATE_MOV_RULE_BULK_UPLOAD_SKU_BUTTON,
  CREATE_MOV_RULE_CITY_FORMCONTROL,
  CREATE_MOV_RULE_INACTIVE_STATUS_BUTTON,
  CREATE_MOV_RULE_LOCATION_FORMCONTROL,
  CREATE_MOV_RULE_MIN_ORDER_VALUE_FORMCONTROL,
  CREATE_MOV_RULE_NAME_FORMCONTROL,
  CREATE_MOV_RULE_NAME_INPUT,
  CREATE_MOV_RULE_SELECT_PARAMETERS_SECTION,
  CREATE_MOV_RULE_SELECT_SKU_BUTTON,
  CREATE_MOV_RULE_SHOPTYPE_FORMCONTROL,
  CREATE_MOV_RULE_SHOPTYPE_MULTISELECT,
  CREATE_MOV_RULE_SKU_ELIGIBILITY_SECTION,
  CREATE_MOV_RULE_STATUS_FORMCONTROL,
  CREATE_MOV_RULE_ZONE_FORMCONTROL,
  CREATE_MOV_RULE_ZONE_SELECT,
  CREATE_RULE_MOV_INPUT,
  MOV_PAGE_TABSLAYOUT_ONBOARDING_TAB,
  MOV_RULE_CREATE_BUTTON,
  MOV_RULE_STATUS_BUTTON,
  NAV_BAR_MOV_RULES_TAB,
  PRODUCT_MOV_APP_URL,
} from '../constants/mov';

describe('MOV Rules :: Create Rule', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should verify that rule creation tab is visible', () => {
    cy.visit('/');
    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('exist')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);

    cy.get(testId(MOV_PAGE_TABSLAYOUT_ONBOARDING_TAB))
      .should('be.visible')
      .should('have.text', 'Rule Creation')
      .click();
  });

  it('should verify mov rule creation information', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(`${CREATE_MOV_RULE_CITY_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_LABELS.CITY);
      });

    cy.get(testId(`${CREATE_MOV_RULE_LOCATION_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_LABELS.LOCATION);
      });

    cy.get(testId(`${CREATE_MOV_RULE_NAME_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_LABELS.RULE_NAME);
      });

    cy.get(testId(CREATE_MOV_RULE_SELECT_PARAMETERS_SECTION)).should(
      'be.visible'
    );

    cy.get(testId(`${CREATE_MOV_RULE_SHOPTYPE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_LABELS.SHOPTYPE);
      });

    cy.get(testId(`${CREATE_MOV_RULE_ZONE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_LABELS.ZONE);
      });

    cy.get(testId(`${CREATE_MOV_RULE_MIN_ORDER_VALUE_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_LABELS.MOV);
      });

    cy.get(testId(`${CREATE_MOV_RULE_STATUS_FORMCONTROL}-label`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_LABELS.STATUS);
      });

    cy.get(testId(CREATE_MOV_RULE_ADDED_SKU_SECTION)).should('be.visible');

    cy.get(testId(MOV_RULE_CREATE_BUTTON)).should('be.visible');
  });

  it('should be able to select city and location', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULES_CITY_SELECT))
      .should('be.visible')
      .first()
      .select(1);

    cy.get(testId(CREATE_MOV_RULES_LOCATION_SELECT))
      .should('be.visible')
      .first()
      .select(1);
  });

  it('verify user should not be be able to create rule without selecting mandatory fields', () => {
    cy.navigateToMOVRulesCreationTab();
    cy.get(testId(MOV_RULE_CREATE_BUTTON)).should('be.visible').click();

    cy.get(testId(`${CREATE_MOV_RULE_CITY_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_ERRORS.CITY);
      });

    cy.get(testId(`${CREATE_MOV_RULE_LOCATION_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_ERRORS.LOCATION);
      });

    cy.get(testId(`${CREATE_MOV_RULE_NAME_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_ERRORS.RULE_NAME);
      });
  });

  it('should verify rule name duplication error is visible', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULES_CITY_SELECT))
      .should('be.visible')
      .first()
      .select(1);

    cy.get(testId(CREATE_MOV_RULES_LOCATION_SELECT))
      .should('be.visible')
      .first()
      .select(1);

    cy.get(testId(`${CREATE_MOV_RULE_NAME_INPUT}`))
      .should('be.visible')
      .type('test-rule');

    cy.get(testId(`${CREATE_MOV_RULE_NAME_FORMCONTROL}-error`))
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(CREATE_MOV_RULES_ERRORS.DUPLICATE_RULE_NAME);
      });
  });

  it('should verify user can select multiple shop types', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULE_SHOPTYPE_MULTISELECT))
      .should('be.visible')
      .click();

    cy.get(
      testId(`${CREATE_MOV_RULE_SHOPTYPE_MULTISELECT}-select-all`)
    ).click();
  });

  it('should verify user can select zone and input mov', () => {
    cy.navigateToMOVRulesCreationTab();
    cy.get(testId(CREATE_MOV_RULE_ZONE_SELECT)).should('be.visible').select(1);

    cy.get(testId(CREATE_RULE_MOV_INPUT))
      .should('be.visible')
      .type('120')
      .should('have.value', '120');
  });

  it('should verify user can toggle status', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULE_ACTIVE_STATUS_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULE_STATUS_BUTTON.ACTIVE)
      .click();

    cy.get(testId(CREATE_MOV_RULE_INACTIVE_STATUS_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULE_STATUS_BUTTON.INACTIVE)
      .click();
  });

  it('should verify SKU Eligibility Section Buttons', () => {
    cy.navigateToMOVRulesCreationTab();

    cy.get(testId(CREATE_MOV_RULE_SKU_ELIGIBILITY_SECTION))
      .should('be.visible')
      .should('have.text', MOV_RULES_SECTION.SKU_ELIGIBILITY);

    cy.get(testId(CREATE_MOV_RULE_BULK_UPLOAD_SKU_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.UPLOAD_SKU);

    cy.get(testId(CREATE_MOV_RULE_SELECT_SKU_BUTTON))
      .should('be.visible')
      .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS);
  });

});
