import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  env:{
    username: 'hash_a',
    BASE_URL : 'http://localhost:3000',
  },
  e2e: {
    baseUrl:'http://localhost:3000',
    setupNodeEvents(/*on, config*/) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: false,
    video: false,
    requestTimeout: 8000
  },
});