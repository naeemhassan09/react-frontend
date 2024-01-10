/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getByData(testId: string): Chainable<JQuery<HTMLElement>>;
      login(): Chainable<void>;
      loginWithAPI(): Chainable<void>;
      testProductSort(optionIndex: number): Chainable<void>;
      searchProduct(): Chainable<void>;
      arrangeProduct(): Chainable<void>;
      navigateToMOVRulesCreationTab(): Chainable<void>;
      navigateToMOVTab(): Chainable<void>;
    }
  }
  type TResponse = any;
  type TObject = any;
}
