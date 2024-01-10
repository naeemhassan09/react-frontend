import { testId } from '../../support/utils';
import {
  FETCH_PRICING_RULES_ENDPOINT,
  FETCH_TAX_GROUPS_ENDPOINT,
  PRICING_RULES_ERRORS,
  PRICING_RULES_LABELS,
  PRODUCT_EDIT_ADD_MORE_PRICING_RULE_BUTTON,
  PRODUCT_EDIT_ADD_PRICING_RULE_BUTTON,
  PRODUCT_EDIT_PAGE_LAYOUT,
  PRODUCT_EDIT_PRICING_RULE_DELETE_BUTTON,
  PRODUCT_EDIT_PRICING_RULE_DELETE_CONFIRMATION_MODAL,
  PRODUCT_EDIT_PRICING_RULE_INFORMATION_SECTION,
  PRODUCT_EDIT_PRICING_RULE_PRECEDENCE_LABEL,
  PRODUCT_EDIT_PRICING_RULE_PRICE_ERROR,
  PRODUCT_EDIT_PRICING_RULE_PRICE_INPUT,
  PRODUCT_EDIT_PRICING_RULE_PRICE_LABEL,
  PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_ERROR,
  PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_LABEL,
  PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_MULTISELECT,
  PRODUCT_EDIT_PRICING_RULE_STATUS_LABEL,
  PRODUCT_EDIT_PRICING_RULE_ZONE_ERROR,
  PRODUCT_EDIT_PRICING_RULE_ZONE_LABEL,
  PRODUCT_EDIT_PRICING_RULE_ZONE_SELECT,
  PRODUCT_EDIT_SAVE_BUTTON,
  PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB,
} from '../constants/product';

describe('Product Edit : Pricing Rules', () => {
  beforeEach(() => {
    cy.intercept('GET', FETCH_TAX_GROUPS_ENDPOINT).as('taxGroups');
    cy.loginWithAPI();
    cy.arrangeProduct();
  });

  it('should check Pricing Rule Labels', () => {
    cy.intercept('GET', FETCH_PRICING_RULES_ENDPOINT).as('pricingRules');

    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('exist');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB)).should('exist').click();

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_INFORMATION_SECTION)).should(
      'exist'
    );

    cy.wait('@taxGroups');

    cy.get(testId(PRODUCT_EDIT_ADD_PRICING_RULE_BUTTON), { timeout: 6000 })
      .should('exist')
      .click({ force: true });

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_PRECEDENCE_LABEL))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRICING_RULES_LABELS.PRECEDENCE);
      });

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_LABEL))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRICING_RULES_LABELS.SHOPTYPE);
      });

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_ZONE_LABEL))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRICING_RULES_LABELS.ZONE);
      });

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_PRICE_LABEL))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRICING_RULES_LABELS.PRICE);
      });

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_STATUS_LABEL))
      .first()
      .invoke('text')
      .then((value) => {
        expect(value).to.equal(PRICING_RULES_LABELS.STATUS);
      });
  });

  it('should check disabled fields in previous pricing rules', () => {
    cy.intercept('GET', FETCH_PRICING_RULES_ENDPOINT).as('pricingRules');

    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('exist');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB)).should('exist').click();

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_INFORMATION_SECTION)).should(
      'exist'
    );

    cy.wait('@pricingRules').then((prResonse: TResponse) => {
      const {
        response: { body: prBody },
      } = prResonse;

      if (prBody?.data?.pricingRule?.length) {
        prBody?.data?.pricingRule?.forEach((_rule, i) => {
          cy.get(testId(PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_MULTISELECT))
            .eq(i)
            .should('be.disabled');

          cy.get(testId(PRODUCT_EDIT_PRICING_RULE_ZONE_SELECT))
            .eq(i)
            .should('be.disabled');
        });
      }
    });
  });

  it('should validate Pricing Rule errors', () => {
    cy.intercept('GET', FETCH_PRICING_RULES_ENDPOINT).as('pricingRules');

    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('exist');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB)).should('exist').click();

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_INFORMATION_SECTION)).should(
      'exist'
    );

    cy.wait('@taxGroups');

    cy.wait('@pricingRules').then((prResonse: TResponse) => {
      const {
        response: { body: prBody },
      } = prResonse;

      cy.get(testId(PRODUCT_EDIT_ADD_PRICING_RULE_BUTTON), { timeout: 6000 })
        .should('exist')
        .click({ force: true });
      
      cy.get(testId(PRODUCT_EDIT_SAVE_BUTTON)).should('exist').click();

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_ERROR))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(PRICING_RULES_ERRORS.SHOPTYPE);
        });

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_PRICE_ERROR))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(PRICING_RULES_ERRORS.PRICE);
        });

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_MULTISELECT))
        .eq(prBody?.data?.pricingRule?.length)
        .should('exist')
        .click();

      cy.get(
        testId(`${PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_MULTISELECT}-select-all`)
      )
        .should('exist')
        .click();

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_ZONE_SELECT))
        .eq(prBody?.data?.pricingRule?.length)
        .should('exist')
        .select(1);

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_PRICE_INPUT))
        .eq(prBody?.data?.pricingRule?.length)
        .should('exist')
        .type('100')
        .should('have.value', '100');

      cy.get(testId(PRODUCT_EDIT_ADD_MORE_PRICING_RULE_BUTTON))
        .should('exist')
        .click();

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_MULTISELECT))
        .eq(prBody?.data?.pricingRule?.length + 1)
        .should('exist')
        .click();

      cy.get(
        testId(`${PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_MULTISELECT}-select-all`)
      )
        .should('exist')
        .click();

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_ZONE_SELECT))
        .eq(prBody?.data?.pricingRule?.length + 1)
        .should('exist')
        .select(1);

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_PRICE_INPUT))
        .eq(prBody?.data?.pricingRule?.length + 1)
        .should('exist')
        .type('100')
        .should('have.value', '100');

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_ERROR))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(PRICING_RULES_ERRORS.DUPLICATE_SHOPTYPE);
        });

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_ZONE_ERROR))
        .invoke('text')
        .then((value) => {
          expect(value).to.equal(PRICING_RULES_ERRORS.DUPLICATE_ZONE);
        });
    });
  });

  it('should display delete confirmation modal when delete button is clicked', () => {
    cy.intercept('GET', FETCH_PRICING_RULES_ENDPOINT).as('pricingRules');
    cy.get(testId(PRODUCT_EDIT_PAGE_LAYOUT)).should('exist');

    cy.get(testId(PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB)).should('exist').click();

    cy.get(testId(PRODUCT_EDIT_PRICING_RULE_INFORMATION_SECTION)).should(
      'exist'
    );
    cy.wait('@taxGroups');

    cy.wait('@pricingRules').then((prResonse: TResponse) => {
      const {
        response: { body: prBody },
      } = prResonse;

      if (!prBody?.data?.pricingRule?.length) {
        cy.get(testId(PRODUCT_EDIT_ADD_PRICING_RULE_BUTTON), { timeout: 6000 })
          .should('exist')
          .click({ force: true });
      }

      cy.get(testId(PRODUCT_EDIT_PRICING_RULE_DELETE_BUTTON))
        .first()
        .should('exist')
        .click();

      cy.get(
        testId(`${PRODUCT_EDIT_PRICING_RULE_DELETE_CONFIRMATION_MODAL}-heading`)
      ).should('exist');

      cy.get(
        testId(`${PRODUCT_EDIT_PRICING_RULE_DELETE_CONFIRMATION_MODAL}-body`)
      ).should('exist');

      cy.get(
        testId(
          `${PRODUCT_EDIT_PRICING_RULE_DELETE_CONFIRMATION_MODAL}-confirm-button`
        )
      ).should('exist');

      cy.get(
        testId(
          `${PRODUCT_EDIT_PRICING_RULE_DELETE_CONFIRMATION_MODAL}-cancel-button`
        )
      )
        .should('exist')
        .click();
    });
  });
});
