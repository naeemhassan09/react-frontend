/* eslint-disable @typescript-eslint/no-shadow */
import { getRandomInt, testId } from '../../support/utils';
import {
  MOV_FILTER_CITY_FORMCONTROL,
  MOV_FILTER_CITY_SELECT,
  MOV_FILTER_LOCATION_FORMCONTROL,
  MOV_FILTER_LOCATION_SELECT,
  MOV_FILTER_RULE_NAME_FORMCONTROL,
  MOV_FILTER_RULE_NAME_SELECT,
  MOV_FILTER_RULE_STATUS_FORMCONTROL,
  MOV_FILTER_STATUS_BUTTON_ACTIVE,
  MOV_FILTER_STATUS_BUTTON_INACTIVE,
  MOV_RULES_SEARCH_ENDPOINT_DEV,
  NAV_BAR_MOV_RULES_TAB,
  PRODUCT_MOV_APP_URL,
} from '../constants/mov';
import { PRODUCT_APP_URL } from '../constants/product';

describe('MOV Rules :: Listing Filters', () => {
  beforeEach(() => {
    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV).as('movRuleSearch');
    cy.login();
  });

  it('verify user will will be able to view filters on Rule Listing screen', () => {
    cy.visit(PRODUCT_APP_URL);
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('be.visible')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.get(testId(MOV_FILTER_CITY_FORMCONTROL))
      .should('be.visible')
      .should('have.text', 'Select City');

    cy.get(testId(MOV_FILTER_LOCATION_FORMCONTROL))
      .should('be.visible')
      .should('have.text', 'Select Location');

    cy.get(testId(MOV_FILTER_RULE_NAME_FORMCONTROL))
      .should('be.visible')
      .should('have.text', 'Rule Name');

    cy.get(testId(MOV_FILTER_RULE_STATUS_FORMCONTROL))
      .should('be.visible')
      .should('have.text', 'Rule Status');
  });

  it('should filter products by location', () => {
    cy.visit(PRODUCT_APP_URL);
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('be.visible')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.wait('@movRuleSearch');

    cy.get(testId(MOV_FILTER_CITY_SELECT))
      .should('be.visible')
      .first()
      .select(1);

    cy.wait('@movRuleSearch');

    cy.get(testId(MOV_FILTER_LOCATION_SELECT))
      .should('be.visible')
      .first()
      .select(1);

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (body?.data && Array.isArray(body?.data) && body?.data?.length) {
        cy.get(testId(`${MOV_FILTER_LOCATION_SELECT}-option-${0}`))
          .invoke('attr', 'value')
          .then((val) => {
            expect(body?.data?.[0]?.location_id).to.equal(+val);
          });
      }
    });

    cy.get(testId(MOV_FILTER_RULE_NAME_SELECT))
      .should('be.visible')
      .first()
      .select(1);

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (body?.data && Array.isArray(body?.data) && body?.data?.length) {
        cy.get(testId(`${MOV_FILTER_RULE_NAME_SELECT}-option-${0}`))
          .invoke('attr', 'value')
          .then((val) => {
            expect(body?.data?.[0]?.name).to.equal(+val);
          });
      }
    });
  });

  it('should filter products by Rule Name', () => {
    cy.visit(PRODUCT_APP_URL);
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_MOV_RULES_TAB)).click();

    cy.get(testId(MOV_FILTER_CITY_SELECT)).select(1);
    cy.wait('@movRuleSearch');

    cy.get(testId(MOV_FILTER_LOCATION_SELECT)).select(1);

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);
    });

    const selectIndex = getRandomInt(10);

    cy.get(testId(MOV_FILTER_RULE_NAME_SELECT))
      .should('be.visible')
      .first()
      .select(selectIndex);

    cy.intercept('GET', MOV_RULES_SEARCH_ENDPOINT_DEV, (req) => {
      req.alias = 'myRequest';

      if (req.query.include === 'id') {
        req.alias = 'myRequest'; // alias for only these parameters
      }

      req.continue();
    });

    cy.wait('@myRequest', { timeout: 15000 }).then((response) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (
        body?.data &&
        body?.data?.rules?.length &&
        Array.isArray(body?.data?.rules)
      ) {
        cy.get(
          testId(`${MOV_FILTER_RULE_NAME_SELECT}-option-${selectIndex - 1}`)
        )
          .invoke('attr', 'value')
          .then((val) => {
            expect(body?.data?.rules[0]?.id).to.equal(+val);
          });
      }
    });
  });

  it('Verify that the Rules List should be shown as per selected filter "Active"', () => {
    cy.visit(PRODUCT_APP_URL);
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('be.visible')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.wait('@movRuleSearch');

    cy.get(testId(MOV_FILTER_STATUS_BUTTON_ACTIVE))
      .should('be.visible')
      .first()
      .click();

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (body?.data && Array.isArray(body?.data) && body?.data?.length) {
        expect(body?.data?.[0]?.isDisabled).to.equal(true);
      }
    });
  });

  it('Verify that the Rules List should be shown as per selected filter "Inactive"', () => {
    cy.visit(PRODUCT_APP_URL);
    cy.location('pathname').should('equal', PRODUCT_APP_URL);

    cy.get(testId(NAV_BAR_MOV_RULES_TAB))
      .should('be.visible')
      .should('have.text', ' MOV Rules ')
      .click();

    cy.location('pathname').should('equal', PRODUCT_MOV_APP_URL);
    cy.wait('@movRuleSearch');

    cy.get(testId(MOV_FILTER_STATUS_BUTTON_INACTIVE))
      .should('be.visible')
      .first()
      .click();

    cy.wait('@movRuleSearch').then((response: TResponse) => {
      const {
        response: { body },
      } = response;

      expect(body?.success).to.eq(true);

      if (body?.data && Array.isArray(body?.data) && body?.data?.length) {
        expect(body?.data?.[0]?.isDisabled).to.equal(false);
      }
    });
  });
});
