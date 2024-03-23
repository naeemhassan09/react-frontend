/* eslint-disable */
import { DASHBORD_ROUTE, SIDEBAR_ROUTES, PROFILE_ROUTE, ORDERS_ROUTE, PRODUCTLIST_ROUTE, USERMANAGEMENT_ROUTE, 
  ACTIVITYSTREAM_ROUTE, ROLESPERMISSION_ROUTE, 
  NEWORDER_ROUTE,
  SETTINGS_ROUTE,
  SETTINGSVENDOR_ROUTE,
  EMAILTEMPLATE_ROUTE,
  NEW_ROLESPERMISSION_ROUTE} from 'src/constants/navigation-routes';

import { Dashboard,  Orders,  Profile, ProductList, UserManagement, ActivityStream, CreateRolesPermission, NewOrder, EmailTemplate, RolePermission } from 'src/pages';
import { ROLES } from '../constants/roles';
import { Settings } from 'src/pages/settings';
import SettingsVendor from 'src/pages/settings-vendor';

export default [

    {
        component: Dashboard,
        path: DASHBORD_ROUTE,
        title: 'Dashboard',
        permission: [
          ROLES.ADMIN,
          ROLES.VENDOR,
        ],
      },
    {
        component: Profile,
        path: PROFILE_ROUTE,
        title: 'Profile',
        permission: [
            ROLES.ADMIN,
            ROLES.VENDOR,
        ],
      },

      {
        component: Orders,
        path: ORDERS_ROUTE,
        title: 'Orders',
        permission: [
            ROLES.ADMIN,
            ROLES.VENDOR,
         
        ],
      },

      {
        component: ProductList,
        path: PRODUCTLIST_ROUTE,
        title: 'Product List',
        permission: [
           ROLES.ADMIN,
          // ROLES.COMPANY_OWNER,
        ],
      },

      {
        component: UserManagement,
        path: USERMANAGEMENT_ROUTE,
        title: 'User Management',
        permission: [
         ROLES.ADMIN,
          // ROLES.COMPANY_OWNER,
        ],
      },

      {
        component: ActivityStream,
        path: ACTIVITYSTREAM_ROUTE,
        title: 'Activity Stream',
        permission: [
           ROLES.ADMIN,
          // ROLES.COMPANY_OWNER,
        ],
      },

      {
        component: CreateRolesPermission,
        path: NEW_ROLESPERMISSION_ROUTE,
        title: 'Create Roles Permissions',
        permission: [
          ROLES.ADMIN,
          // ROLES.COMPANY_OWNER,
        ],
      },
      {
        component: RolePermission,
        path: ROLESPERMISSION_ROUTE,
        title: 'Roles Permissions',
        permission: [
          ROLES.ADMIN,
          // ROLES.COMPANY_OWNER,
        ],
      },
      {
        component: NewOrder,
        path: NEWORDER_ROUTE,
        title: 'New Order',
        permission: [
         ROLES.ADMIN,
        ROLES.VENDOR,
        ],
      },
      {
        component: Settings,
        path: SETTINGS_ROUTE,
        title: 'Settings',
        permission: [
          ROLES.ADMIN,
         ROLES.VENDOR,
        ],
      },
      {
        component: SettingsVendor,
        path: SETTINGSVENDOR_ROUTE,
        title: 'Settings Vendor',
        permission: [
           ROLES.ADMIN,
          // ROLES.COMPANY_OWNER,
        ],
      },
      {
        component: EmailTemplate,
        path: EMAILTEMPLATE_ROUTE,
        title: 'Email Template',
        permission: [
           ROLES.ADMIN,
          // ROLES.COMPANY_OWNER,
        ],
      },

];
