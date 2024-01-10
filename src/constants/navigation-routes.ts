export enum ROUTES {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  DASHBOARD = 'DASHBOARD',
  // more routes will be added here
}

export const ADMIN_PORTAL_URL = process.env.REACT_APP_ADMIN_PORTAL_URL;
export const COUPON_PORTAL_URL = process.env.REACT_APP_COUPON_PORTAL_URL;
export const LOYALTY_PORTAL_URL = process.env.REACT_APP_LOYALTY_PORTAL_URL;
export const CATEGORY_PORTAL_URL = process.env.REACT_APP_CATEGORY_PORTAL_URL;

export const MAIN_ROUTE = '/internalerp';
export const APP = '/app';
export const ADD_ROUTE = '/add';
export const LOGIN_ROUTE = '/login';

// Sidebar Route Names
export enum SIDEBAR_NAMES {
  PRODUCTS = 'Products',
  ZONE = 'Zones',
  TAGS = 'Tags Management',
  ORDERS = 'Orders',
  BATCHES = 'Batches',
  CATEGORIES = 'Categories',
  INVENTORY = 'Inventory',
  COUPON = 'Coupon',
  USERS = 'Users',
  CUSTOMERS = 'Customers',
  NOTIF_CENTER = 'Notification center',
  DELIVERY_SLOTS = 'Delivery Slots',
  LOCATION = 'Location',
  BANNERS = 'Banners',
  BNPL_TRANSACTIONS = 'BNPL Transactions',
  INVOICING = 'Invoicing',
  REWARDS = 'Rewards',
  HIERARCHY = 'Hierarchy',
  SETTINGS = 'Settings',
  ED_REPORTING = 'ED Reporting',
  TAXATION = 'Taxation',
  TAX_GROUPS = 'Tax Groups',
  TAX_CODES = 'Tax Codes',
  MOV = 'MOV Rules',
  COMMERCIAL = 'Commercial Categories (L1)',
  COMMERCIAL_SUB='Commercial Sub Categories (L2)',
  MASTER_CATEGORY='Master Catalog Categories',
  BRANDS='Brands',
  CORPORATE_BRAND='Commercial Corporate Brand (L1)',
  SUB_BRAND='Commercial Sub Brand (L2)',
  CATEGORY = 'Merchandising Categories',
  BRAND = 'Merchandising Brands',
}

export enum SIDEBAR_ROUTES {
  PRODUCTS = '/product',
  ZONE = '/zone',
  TAGS = '/tag',
  MOV = '/mov',
  ORDERS = '/order',
  BATCHES = '/order/batch-orders',
  CATEGORIES = '/product/category',
  INVENTORY = '/inventory/inventory-management',
  COUPON = '/coupon',
  USERS = '/user/edit',
  CUSTOMERS = '/customers/all-customers',
  NOTIF_CENTER = '/notifications',
  DELIVERY_SLOTS = '/delivery-slots',
  LOCATION = '/location/show-location',
  BANNERS = '/banners',
  BNPL_TRANSACTIONS = '/bnpl-transactions',
  INVOICING = '/invoicing',
  REWARDS = '/app/loyalty',
  HIERARCHY = '/hierarchy/company',
  SETTINGS = '/settings/app-versions',
  CREATE_TAG = '/tag/create-tag',
  ED_REPORTING = '/ed-reporting',
  TAXATION = '/taxation',
  TAX_GROUPS = '/taxation/tax-groups',
  TAX_CODES = '/taxation/tax-codes',
  COMMERCIAL = '/app/commercial',
  COMMERCIAL_SUB='/app/commercial-sub',
  MASTER_CATEGORY='/app/master-category',
  CORPORATE_BRAND='/app/commercial-corporate',
  SUB_BRAND='/app/commercial-sub-brand',
  CATEGORY = '/category',
  BRAND = '/brand',
}
