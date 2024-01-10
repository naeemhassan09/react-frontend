/* eslint-disable @typescript-eslint/no-shadow */
import { testId } from '../../../support/utils';
import {
  EDIT_MOV_PAGE_LAYOUT,
  EDIT_MOV_RULE_ACTIVE_STATUS_BUTTON,
  EDIT_MOV_RULE_BULK_UPLOAD_SKU_BUTTON,
  EDIT_MOV_RULE_INACTIVE_STATUS_BUTTON,
  EDIT_MOV_RULE_MOV_FORMCONTROL,
  EDIT_MOV_RULE_MOV_INPUT,
  EDIT_MOV_RULE_SAVE_BUTTON,
  EDIT_MOV_RULE_SELECT_SKU_BUTTON,
  EDIT_MOV_RULE_SHOPTYPE_MULTISELECT,
  EDIT_MOV_RULE_ZONE_FORMCONTROL,
  EDIT_MOV_RULE_ZONE_SELECT,
  MOV_LISTING_DATATABLE,
  MOV_LISTING_ROW_EDIT_BUTTON,
  MOV_RULES_SEARCH_ENDPOINT_DEV,
  MOV_RULES_SKU_BUTTON_LABEL,
  PRODUCT_SEARCH_ENDPOINT_DEV,
} from '../../constants/mov';

describe('MOV Rules :: Edit Rule', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV).as('productSearch');
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRuleSearch');
    cy.login();
  });

  it('should verify user can select multiple shop types', () => {
    cy.navigateToMOVTab();

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
        cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
          .first()
          .should('be.visible', 'ready')
          .click({ force: true });

        cy.wait(1000);

        cy.get(testId(EDIT_MOV_RULE_SHOPTYPE_MULTISELECT))
          .should('be.visible')
          .click();

        cy.get(
          testId(`${EDIT_MOV_RULE_SHOPTYPE_MULTISELECT}-select-all`)
        ).click();
      }
    });
  });

  it('should verify user is not able to edit zone', () => {
    cy.navigateToMOVTab();

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
        cy.get(testId(MOV_LISTING_ROW_EDIT_BUTTON))
          .first()
          .should('be.visible', 'ready')
          .click({ force: true });

        cy.get(testId(EDIT_MOV_PAGE_LAYOUT)).should('be.visible');

        cy.get(testId(`${EDIT_MOV_RULE_ZONE_FORMCONTROL}-label`))
          .should('be.visible')
          .should('have.text', 'Select Zone*');

        cy.get(testId(EDIT_MOV_RULE_ZONE_SELECT))
          .should('be.visible')
          .should('be.disabled');
      }
    });
  });

  it('should verify user is able to edit mov value', () => {
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

        cy.get(testId(`${EDIT_MOV_RULE_MOV_FORMCONTROL}-label`)).should(
          'be.visible'
        );

        cy.get(testId(EDIT_MOV_RULE_MOV_INPUT))
          .should('be.visible')
          .clear()
          .type('1200')
          .should('have.value', '1200');
      }
    });
  });

  it('verify user is able to view Upload Bulk and Select SKU option', () => {
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
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.UPLOAD_SKU);

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS);
      }
    });
  });

  it('verify "Active / Inactive" touchpoint is visible on screen', () => {
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
      
        cy.get(testId(EDIT_MOV_RULE_ACTIVE_STATUS_BUTTON))
          .should('be.visible');

        cy.get(testId(EDIT_MOV_RULE_INACTIVE_STATUS_BUTTON))
          .should('be.visible');

      }
    });
  });

  it('verify rule is disabled on clicking Inactive touchpoint', () => {
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
    
          const rule = body?.data?.rules[0];

          if (rule) {
            const { isDisabled } = rule;

            if (isDisabled) {
              cy.get(testId(EDIT_MOV_RULE_ACTIVE_STATUS_BUTTON))
              .should('be.visible')
              .click();
              cy.get(testId(EDIT_MOV_RULE_SAVE_BUTTON))
              .click();
    
            cy.wait(500);
            cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('be.visible');
  
              cy.wait('@movRuleSearch').then((resp: TResponse) => {
                const {
                  response: { body },
                } = resp;

                expect(body?.data?.rules[0]?.isDisabled).to.be.eq(true);
              });
            } 
            else {
              cy.get(testId(EDIT_MOV_RULE_INACTIVE_STATUS_BUTTON))
              .should('be.visible')
              .click();
              cy.get(testId(EDIT_MOV_RULE_SAVE_BUTTON))
              .click();
    
            cy.wait(500);
            cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('be.visible');
  
              cy.wait('@movRuleSearch').then((resp: TResponse) => {
                const {
                  response: { body },
                } = resp;

                expect(body?.data?.rules[0]?.isDisabled).to.be.eq(false);
              });
            }
          }
      }
    });
  });

  it('verify rule is enabled on clicking Active touchpoint', () => {
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
    
          const rule = body?.data?.rules[0];

          if (rule) {
            const { isDisabled } = rule;

            if (isDisabled) {
              cy.get(testId(EDIT_MOV_RULE_ACTIVE_STATUS_BUTTON))
              .should('be.visible')
              .click();
              cy.get(testId(EDIT_MOV_RULE_SAVE_BUTTON))
              .click();
    
            cy.wait(500);
            cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('be.visible');
  
              cy.wait('@movRuleSearch').then((resp: TResponse) => {
                const {
                  response: { body },
                } = resp;

                expect(body?.data?.rules[0]?.isDisabled).to.be.eq(true);
              });
            } 
            else {
              cy.get(testId(EDIT_MOV_RULE_INACTIVE_STATUS_BUTTON))
              .should('be.visible')
              .click();
              cy.get(testId(EDIT_MOV_RULE_SAVE_BUTTON))
              .click();
    
            cy.wait(500);
            cy.get(`${testId(MOV_LISTING_DATATABLE)}`).should('be.visible');
  
              cy.wait('@movRuleSearch').then((resp: TResponse) => {
                const {
                  response: { body },
                } = resp;

                expect(body?.data?.rules[0]?.isDisabled).to.be.eq(false);
              });
            }
          }
      }
    });
  });
});
