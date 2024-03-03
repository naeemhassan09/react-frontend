import { combineReducers } from 'redux';
import { appEntityReducer } from './app';
import { authEntityReducer } from './auth';
import { dashboardEntityReducer } from './dashboard';
import { productListEntityReducer } from './productList';
import { orderEntityReducer } from './orders';
import { activeStreamReducer } from './activityStream';
import { userManagementReducer } from './userManagement';
import { vendorReducer } from './vendor';
import { emailTemplateReducer } from './email';

const entitiesReducer = combineReducers({
  app: appEntityReducer,
  auth: authEntityReducer,
  dashboard: dashboardEntityReducer,
  productList: productListEntityReducer,
  orderData: orderEntityReducer,
  activityStream: activeStreamReducer,
  userManagement: userManagementReducer,
  vendors: vendorReducer,
  emailTemplate: emailTemplateReducer,
});

export { entitiesReducer };
