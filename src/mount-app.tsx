
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import packageJson from '../package.json';
import { App } from './app';

const { version } = packageJson;
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  environment: process.env.REACT_APP_ENV,
  release: version,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  // Disabling strict mode to resolve bug in google maps api
  // <React.StrictMode> 
  <App />
  // </React.StrictMode>
);
