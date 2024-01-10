/* eslint-disable @typescript-eslint/no-unused-vars */
Cypress.on('uncaught:exception', (_err, _runnable) => 
  // returning false here prevents Cypress from failing the test
   false
);