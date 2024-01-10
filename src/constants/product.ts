import Joi from 'joi';

import { FILE_UPLOAD_ACTIONS } from './app';

/* eslint-disable max-len */
export const TaxCategoryConstants = {
  tax_on_price: 1,
  tax_on_mrp: 2,
  no_tax: 3,
};

export const PRODUCT_TAX_CAT = [
  {
    code: 'tax_on_price',
    name: 'Tax on Price',
    numCode: 1,
  },
  {
    code: 'tax_on_mrp',
    name: 'Tax on MRP',
    numCode: 2,
  },
  {
    code: 'no_tax',
    name: 'No Tax',
    numCode: 3,
  }
];

export enum PRODUCT_SCREENS {
  OLD = 'old',
  REVAMPED = 'revamped',
}

export enum PRODUCT_PRICING_RULE_TOOLTIP {
  PRECEDENCE = `This is the priority for each pricing rule created for an SKU. The precedence (priority) for each rule can be changed by user. 
  Incase of overlapping zones, customer will be shown the price of the rule that has higher precedence.`,
  SHOP_TYPE = 'Customer categorization or segmentation done on App when customer is registered e.g General Store, Wholesale etc',
  ZONE = 'Selected area within a location of a city where customer will be shown different price' 
}

export const FVR_OPTIONS = [
  {
    label: 'Yes',
    value: 1,
  },
  {
    label: 'No',
    value: 0,
  },
];

export const SAUDI_LOCATIONS = {
  LOCATION_IDS: process.env.REACT_APP_SAUDI_LOCATIONS
};

export const DIRECT_DELIVERY = {
  STORES: process.env.REACT_APP_DIRECT_DELIVERY,
};

export const DEFAULT_RIYADH_PERCENTAGE = 15;

export const PRODUCT_ONBOARDING_TEMPLATE_URLS= {
  NEW_PRODUCTS_MULTIPLE: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_NEW_PRODUCTS_MULTIPLE,
  BULK_UPDATE: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_BULK_UPDATE, 
  BULK_UPLOADING_IMAGES: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_BULK_UPLOADING_IMAGES, 
  UPDATE_PRICE_AVAILABILITY_STOCK_BULK: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_BULK_UPDATE_PRICE_AVAILABILITY_STOCK_BULK, 
  UPDATE_DISPLAY_PRIORITY_BULK: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_UPDATE_DISPLAY_PRIORITY_BULK,
  UPDATE_PRODUCT_LANGUAGE_BULK:process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_UPDATE_PRODUCT_LANGUAGE_BULK,
  UPDATE_CATEGORIES_AND_BRANDS_BULK: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_UPDATE_CATEGORIES_AND_BRANDS_BULK, 
  UPDATE_SEARCH_TERMS: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_UPDATE_SEARCH_TERMS,
  BULK_DYNAMIC_PRICING: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_BULK_DYNAMIC_PRICING,
  BULK_UPLOAD_PRODUCTS_TAX_GROUPS: process.env.REACT_APP_PRODUCT_ONBOARDING_TEMPLATE_URLS_BULK_UPLOAD_PRODUCTS_TAX_GROUPS
};

export const PRODUCT_ONBOARDING_VALIDATION_SCHEMA = {
  NEW_PRODUCTS_MULTIPLE: Joi.array().items(Joi.object({
    barcode: Joi.string().min(0),
    brand: Joi.string().min(0),
    category_id: Joi.number().empty('').min(1),
    category_name: Joi.string().min(0),
    configurable: Joi.number().empty('').min(0).max(1),
    consent_required: Joi.number().empty('').min(0).max(1),
    cost_price: Joi.number().empty('').min(1),
    description: Joi.string().min(0),
    disabled: Joi.number().empty('').min(0).max(1),
    image_url: Joi.string().empty('').uri(),
    location_id: Joi.number().min(1).required(),
    marketplace_fvr:Joi.number().empty('').min(0).max(1),
    mrp: Joi.number().min(0).required(),
    name: Joi.string().required(),
    price: Joi.number().min(0).required(),
    size: Joi.string().min(0),
    sku: Joi.string().min(0),
    stock_quantity: Joi.number().empty('').min(0),
    tax_category: Joi.number().min(0).required(),
    tax_inclusive: Joi.number().empty('').min(0).max(1),
    tax_percent: Joi.number().empty('').min(0),
    trade_price: Joi.number().empty('').min(1),
    unit: Joi.number().empty('').min(0),
  })),
  BULK_UPDATE: Joi.array().items(Joi.object({
    barcode: Joi.string().min(0),
    brand: Joi.string().min(0),
    category_id: Joi.number().empty('').min(1),
    category_name: Joi.string().min(0),
    configurable: Joi.number().empty('').min(0).max(1),
    consent_required: Joi.number().empty('').min(0).max(1),
    cost_price: Joi.number().empty('').min(1),
    description: Joi.string().min(0),
    disabled: Joi.number().empty('').min(0).max(1),
    image_url: Joi.string().empty('').uri(),
    location_id: Joi.number().min(1).required(),
    marketplace_fvr:Joi.number().empty('').min(0).max(1),
    mrp: Joi.number().empty('').min(0),
    name: Joi.string().required(),
    price: Joi.number().min(0).required(),
    size: Joi.string().min(0),
    sku: Joi.string().required(),
    stock_quantity: Joi.number().empty('').min(0),
    tax_category: Joi.number().empty('').min(0),
    tax_inclusive: Joi.number().empty('').min(0).max(1),
    tax_percent: Joi.number().empty('').min(0),
    trade_price: Joi.number().empty('').min(1),
    unit: Joi.number().empty('').min(0),
  })),
  BULK_UPLOADING_IMAGES: Joi.array().items(Joi.object()),
  UPDATE_PRICE_AVAILABILITY_STOCK_BULK: Joi.array().items(Joi.object({
    sku: Joi.string().required(),
    price: Joi.number().empty('').min(1),
    stock_quantity: Joi.number().empty('').min(0),
    disabled: Joi.number().min(0).max(1),
    location: Joi.number().min(1).required(),
    tax_category: Joi.number().empty('').min(0),
    mrp: Joi.number().empty('').min(1),
    is_volume_based_price_enabled: Joi.number().empty('').min(0).max(1),
    tier1_price: Joi.number().empty('').min(1),
    tier1_quantity_to: Joi.number().empty('').min(1),
    tier2_price: Joi.number().empty('').min(1),
    tier2_quantity_to: Joi.number().empty('').min(1),
    tier3_price: Joi.number().empty('').min(1),
    tier3_quantity_to: Joi.number().empty('').min(1),
    tier4_price: Joi.number().empty('').min(1),
    trade_price: Joi.number().empty('').min(1),
  })), 
  UPDATE_DISPLAY_PRIORITY_BULK: Joi.array().items(Joi.object({
    'SKU ID': Joi.number().min(1),
    'SKU Name': Joi.string().min(0),
    'SKU Category L1 ID': Joi.number().min(1),
    'SKU SubCategory L2 ID': Joi.number().min(1),
    'Priority L1 (Category Page)': Joi.number().empty('').min(0),
    'Priority L2 (Subcategory Page)': Joi.number().empty('').min(0),
  })),
  UPDATE_PRODUCT_LANGUAGE_BULK: Joi.array().items(Joi.object({
    sku: Joi.string().required(),
    attribute: Joi.string().required(),
    AR: Joi.string().min(0),
    UR: Joi.string().min(0),
    RU: Joi.string().min(0),
  })),
  UPDATE_CATEGORIES_AND_BRANDS_BULK: Joi.array().items(Joi.object({
    productSku: Joi.string().required(),
    categoryId: Joi.number().empty('').min(1),
    brandId: Joi.number().empty('').min(1),
    masterCategoryId: Joi.number().empty('').min(1),
  })),
  UPDATE_SEARCH_TERMS: Joi.array().items(Joi.object()),
  BULK_DYNAMIC_PRICING: Joi.array().items(Joi.object({
    sku_code: Joi.string().required(),
    precedence: Joi.number().min(0),
    zone_id: Joi.string().empty('').min(1),
    price: Joi.number().min(0),
    shop_type_id: Joi.string().required(),
    is_disabled: Joi.number().min(0).max(1),
  })),
  BULK_UPLOAD_PRODUCTS_TAX_GROUPS: Joi.array().items(Joi.object({
    sku: Joi.string().required(),
    tax_group: Joi.string().required()
  }))
};

export const DATA = [
  {
    id: 7,
    title: 'NEW PRODUCT (SINGLE)',
    type: 'button',
    testID: 'new-product--single-'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_UPLOAD_PRODUCTS,
    title: 'NEW PRODUCTS (MULTIPLE)',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.NEW_PRODUCTS_MULTIPLE,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.NEW_PRODUCTS_MULTIPLE,
    testID: 'new-products--multiple-'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_UPDATE_PRODUCTS,
    title: 'FOR BULK UPDATE',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.BULK_UPDATE,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.BULK_UPDATE,
    testID: 'for-bulk-update'
  },
  {
    id: 6,
    title: 'FOR BULK UPLOADING IMAGES',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.BULK_UPLOADING_IMAGES,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.BULK_UPLOADING_IMAGES,
    testID: 'for-bulk-uploading-images'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_UPDATE_LOCATION_PRICES_STOCK,
    title: 'UPDATE PRICE/AVAILABILITY/STOCK (BULK)',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.UPDATE_PRICE_AVAILABILITY_STOCK_BULK,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.UPDATE_PRICE_AVAILABILITY_STOCK_BULK,
    testID: 'update-price-availability-stock--bulk-'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_UPDATE_PRODUCT_LANGUAGE,
    title: 'UPDATE PRODUCT LANGUAGE (BULK)',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.UPDATE_PRODUCT_LANGUAGE_BULK,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.UPDATE_PRODUCT_LANGUAGE_BULK,
    testID: 'update-product-language--bulk-'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_UPDATE_PRODUCT_DISPLAY_PRIORITY,
    title: 'UPDATE DISPLAY PRIORITY (BULK)',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.UPDATE_DISPLAY_PRIORITY_BULK,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.UPDATE_DISPLAY_PRIORITY_BULK,
    testID: 'update-display-priority--bulk-'
  },
  {
    id: FILE_UPLOAD_ACTIONS.UPDATE_SEARCH_TERMS,
    title: 'UPDATE SEARCH TERMS',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.UPDATE_SEARCH_TERMS,
    testID: 'update-search-terms'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_LINK_PRODUCTS,
    title: 'UPDATE CATEGORIES & BRANDS (BULK)',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.UPDATE_CATEGORIES_AND_BRANDS_BULK,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.UPDATE_CATEGORIES_AND_BRANDS_BULK,
    testID: 'update-categories---brands--bulk-'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_DYNAMIC_PRICE_CREATE,
    title: 'BULK DYNAMIC PRICING',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.BULK_DYNAMIC_PRICING,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.BULK_DYNAMIC_PRICING,
    testID: 'bulk-dynamic-pricing'
  },
  {
    id: FILE_UPLOAD_ACTIONS.BULK_UPLOAD_PRODUCTS_TAX_GROUPS,
    title: 'BULK UPLOAD PRODUCTS TAX GROUPS',
    type: 'file',
    templateUrl: PRODUCT_ONBOARDING_TEMPLATE_URLS.BULK_UPLOAD_PRODUCTS_TAX_GROUPS,
    validationSchema: PRODUCT_ONBOARDING_VALIDATION_SCHEMA.BULK_UPLOAD_PRODUCTS_TAX_GROUPS,
    testID: 'bulk-upload-products-tax-groups'
  },
];

