import { combineReducers } from 'redux';
import { appEntityReducer } from './app';
import { authEntityReducer } from './auth';
import { dashboardEntityReducer } from './dashboard';
import { productListEntityReducer } from './productList';

const entitiesReducer = combineReducers({
  app: appEntityReducer,
  auth: authEntityReducer,
  dashboard: dashboardEntityReducer,
  productList: productListEntityReducer,
});

export { entitiesReducer };
