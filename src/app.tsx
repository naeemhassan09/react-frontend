import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider, StyledEngineProvider, } from '@mui/material';
import customTheme  from './styles/theme';
import GlobalStyles from './global';
import i18n from './i18n';
import { ErrorScreen } from './components/error-screen';
import reduxStore from './store';
import { Router } from './routes';
import { reportWebVitals } from './reportWebVitals';


export const { store, persistor } = reduxStore();

export const App = () => (
  <ErrorBoundary FallbackComponent={ ErrorScreen }>
    <Provider store={ store }>
      <PersistGate
          loading={ null }
          persistor={ persistor }
      >
        <I18nextProvider i18n={ i18n }>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={ customTheme }>
              <GlobalStyles />
              <Suspense fallback='loading'>
                <Router />
              </Suspense>
            </ThemeProvider>
          </StyledEngineProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();