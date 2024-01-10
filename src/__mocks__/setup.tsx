import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { Router } from '../routes';

export const setup = () => {
  const initialState = { data: null };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={ store }>
      <I18nextProvider i18n={ i18n }>
        <Router />
      </I18nextProvider>
    </Provider>
  );
};
