/* eslint-disable */
import { DASHBORD_ROUTE, SIDEBAR_ROUTES, PROFILE_ROUTE, ORDERS_ROUTE } from 'src/constants/navigation-routes';

import { Dashboard,  Orders,  Profile } from 'src/pages';
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

];
