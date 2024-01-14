import { combineReducers } from 'redux';
import { appEntityReducer } from './app';
import { authEntityReducer } from './auth';
import { dashboardEntityReducer } from './dashboard';

const entitiesReducer = combineReducers({
  app: appEntityReducer,
  auth: authEntityReducer,
  dashboard: dashboardEntityReducer,
});

export { entitiesReducer };
