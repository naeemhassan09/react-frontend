import { testId } from '../../support/utils';
import {
  PRODUCT_APP_URL,
  PRODUCT_ONBOARDING_DATA,
  PRODUCT_PAGE_TABSLAYOUT_ONBOARDING_TAB,
} from '../constants/product';

describe('Product Onboarding Section ', () => {
  beforeEach(() => {
    cy.loginWithAPI();
    cy.arrangeProduct();
    cy.location('pathname').should('equal', PRODUCT_APP_URL);
   
  });

  describe('Product Onboarding::', () => {
    it('grid items should display the correct button text and title', () => {
        
        cy.get(testId(PRODUCT_PAGE_TABSLAYOUT_ONBOARDING_TAB)).click();
  
        PRODUCT_ONBOARDING_DATA.forEach(({ id, title, type,}) => {
            const selector = `product-onboarding-form-${id}`;
            const buttonSelector = (type === 'file') ? testId(`${selector}-upload-button`) : testId(`${selector}-create-button`);
            const titleSelector = testId(`${selector}-title`);
            const templateButtonSelector = testId(`${selector}-template-button`)
            const linkSelector = testId(`${selector}-template-link`);
  
        if (type === 'file') { 
            cy.get(titleSelector).scrollIntoView();
            cy.get(titleSelector).should('have.text', title);
            cy.get(buttonSelector).should('contain','Upload');
            cy.get(templateButtonSelector).should('contain','Template file');
            cy.get(linkSelector).should('exist');
           
        } else {
            cy.get(titleSelector).scrollIntoView();
            cy.get(titleSelector).scrollIntoView().should('have.text', title);
            cy.get(buttonSelector).should('contain', 'Create')
            cy.get(templateButtonSelector).should('not.exist');
            cy.get(linkSelector).should('not.exist');
    
        }
      });
    });
  });
});
