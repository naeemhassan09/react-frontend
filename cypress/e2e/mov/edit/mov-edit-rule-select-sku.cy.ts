import { testId } from '../../../support/utils';
import {
  MOV_RULES_SKU_BUTTON_LABEL,
  PRODUCT_SEARCH_ENDPOINT_DEV,
  SKU_SELECT_LISTING_TABLE_HEADINGS,
  MOV_LISTING_ROW_EDIT_BUTTON,
  EDIT_MOV_RULE_SELECT_SKU_BUTTON,
  EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON,
  EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING,
  EDIT_MOV_RULE_SELECT_SKU_MODAL_HEADING,
  MOV_RULE_SKU_SELECT_DATATABLE,
  MOV_RULES_SEARCH_ENDPOINT_DEV,
  EDIT_MOV_RULE_SELECT_SKU_SEARCH_INPUT,
  EDIT_MOV_RULE_SELECT_SKU_DATATABLE_BUTTON,
  EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CANCEL_BUTTON,
} from '../../constants/mov';
import {
  PRODUCT_TEST_SKU_CODE,
  PRODUCT_TEST_SKU_NAME,
} from '../../constants/product';

describe('MOV Edit Rules :: Select SKU\'s', () => {
  beforeEach(() => {
    cy.intercept('GET', PRODUCT_SEARCH_ENDPOINT_DEV, { fixture: 'get-product-response'}).as('productSearch');
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRuleSearch');
    cy.login();
  });

  it('verify upon clicking the SKU Confirmation confirm button, select sku popup is open', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
          .click();

        cy.wait(600);
        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON)
        ).should('be.visible')
        .click();

        cy.wait(500);
        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_MODAL_HEADING))
        .should('be.visible');

      }
    });
  });
  
  it('verify upon clicking select sku, confirmation popup is open', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
          .click();

        cy.wait(600);
        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON)
        )
          .should('be.visible')
          .click();

        cy.wait(500);
        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_MODAL_HEADING)).should(
          'be.visible'
        );
      }
    });
  });

  it('verify select sku confirmation has datatable with expected information', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
          .click();

        cy.wait(600);
        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON)
        )
          .should('be.visible')
          .click();

        cy.wait(1000);
        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_MODAL_HEADING)).should(
          'be.visible'
        );
        cy.intercept('GET',PRODUCT_SEARCH_ENDPOINT_DEV,       { fixture: 'get-product-response' }
        ).as('productSearch');
        cy.wait('@productSearch').then(() => {
          cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)}`).should('be.visible');
          cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)} th`).each(
            (heading, i) => {
              expect(heading.text()).to.equal(
                SKU_SELECT_LISTING_TABLE_HEADINGS[i]
              );
            }
          );
        }); 
      }
    });
  });

  it('verify upon clicking cancel button of popup, confirmation popup is closed', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
          .click();

        cy.wait(600);
        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CANCEL_BUTTON)
        )
          .should('be.visible')
          .click();

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('not.exist');
      }
    });
  });

  it('should search products by sku name', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
          .click();

        cy.wait(600);
        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON)
        )
          .should('be.visible')
          .click();

        cy.wait(500);
        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_MODAL_HEADING)).should(
          'be.visible'
        );

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_SEARCH_INPUT)).type(
          `${PRODUCT_TEST_SKU_NAME}{enter}`
        );

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_DATATABLE_BUTTON))
          .should('be.visible')
          .should('have.text', 'Select');
      }
    });
  });

  it('should search products by sku code', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
          .click();

        cy.wait(600);
        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON)
        )
          .should('be.visible')
          .click();

        cy.wait(500);
        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_MODAL_HEADING)).should(
          'be.visible'
        );

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_SEARCH_INPUT)).type(
          `${PRODUCT_TEST_SKU_CODE}{enter}`
        );

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_DATATABLE_BUTTON))
          .should('be.visible')
          .should('have.text', 'Select');
      }
    });
  });

  it('verify user should be able to add multiple skus', () => {
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

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_BUTTON))
          .should('be.visible', 'ready')
          .should('have.text', MOV_RULES_SKU_BUTTON_LABEL.SELECT_SKUS)
          .click();

        cy.wait(600);
        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_HEADING)
        ).should('be.visible');

        cy.get(
          testId(EDIT_MOV_RULE_SELECT_SKU_CONFIRMATION_MODAL_CONFIRM_BUTTON)
        )
          .should('be.visible')
          .click();

        cy.wait(500);
        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_MODAL_HEADING)).should(
          'be.visible'
        );

        cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)} tbody tr`)
          .eq(0)
          .find('input')
          .check({ force: true });

        cy.get(`${testId(MOV_RULE_SKU_SELECT_DATATABLE)} tbody tr`)
          .eq(1)
          .find('input')
          .check({ force: true });

        cy.get(testId(EDIT_MOV_RULE_SELECT_SKU_DATATABLE_BUTTON))
          .should('be.visible')
          .should('have.text', 'Select')
          .click();
      }
    });
  });
});
