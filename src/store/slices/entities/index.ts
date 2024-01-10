import { combineReducers } from 'redux';
import { appEntityReducer } from './app';
import { authEntityReducer } from './auth';

const entitiesReducer = combineReducers({
  app: appEntityReducer,
  auth: authEntityReducer,
});

export { entitiesReducer };
