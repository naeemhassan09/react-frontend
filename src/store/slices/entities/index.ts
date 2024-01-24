import { combineReducers } from 'redux';
import { appEntityReducer } from './app';
import { authEntityReducer } from './auth';
import { dashboardEntityReducer } from './dashboard';
import { productListEntityReducer } from './productList';
import { orderEntityReducer } from './orders';
import { activeStreamReducer } from './activityStream';

const entitiesReducer = combineReducers({
  app: appEntityReducer,
  auth: authEntityReducer,
  dashboard: dashboardEntityReducer,
  productList: productListEntityReducer,
  orderData: orderEntityReducer,
  activityStream: activeStreamReducer,
});

export { entitiesReducer };
