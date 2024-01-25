/* eslint-disable */
import { DASHBORD_ROUTE, SIDEBAR_ROUTES, PROFILE_ROUTE, ORDERS_ROUTE, PRODUCTLIST_ROUTE, USERMANAGEMENT_ROUTE, 
  ACTIVITYSTREAM_ROUTE, ROLESPERMISSION_ROUTE, 
  NEWORDER_ROUTE} from 'src/constants/navigation-routes';

import { Dashboard,  Orders,  Profile, ProductList, UserManagement, ActivityStream, RolesPermission, NewOrder } from 'src/pages';
import { ROLE_TYPE } from '../constants/roles';

export default [

    {
        component: Dashboard,
        path: DASHBORD_ROUTE,
        title: 'Dashboard',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },
    {
        component: Profile,
        path: PROFILE_ROUTE,
        title: 'Profile',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },

      {
        component: Orders,
        path: ORDERS_ROUTE,
        title: 'Orders',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },

      {
        component: ProductList,
        path: PRODUCTLIST_ROUTE,
        title: 'Product List',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },

      {
        component: UserManagement,
        path: USERMANAGEMENT_ROUTE,
        title: 'User Management',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },

      {
        component: ActivityStream,
        path: ACTIVITYSTREAM_ROUTE,
        title: 'Activity Stream',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },

      {
        component: RolesPermission,
        path: ROLESPERMISSION_ROUTE,
        title: 'Roles Permissions',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },
      {
        component: NewOrder,
        path: NEWORDER_ROUTE,
        title: 'New Order',
        permission: [
          // ROLE_TYPE.ADMIN,
          // ROLE_TYPE.COMPANY_OWNER,
        ],
      },

];
