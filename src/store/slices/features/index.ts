import { combineReducers } from 'redux';
import { appFeatureReducer } from './app';
import { authFeatureReducer } from './auth';

import { alertReducer } from './alert';


const featuresReducer = combineReducers({
  app: appFeatureReducer,
  auth: authFeatureReducer,
  alert: alertReducer,
});

export { featuresReducer };

export * from './auth';
export * from './app';
export * from './alert';
