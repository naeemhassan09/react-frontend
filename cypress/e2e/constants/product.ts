/* eslint-disable max-len */
export const PRODUCT_APP_URL = '/productportal/app/product';
export const APP_BASE_URL = Cypress.env('BASE_URL');
export const PRODUCT_SEARCH_ENDPOINT_DEV = '**/product/getAllProducts*';
export const PRODUCT_SKU_REASONS_ENDPOINT= '**/api/v1/sku-deactivation-reason*';
export const FETCH_PRICING_RULES_ENDPOINT = '**//pricing-engine/api/v1/pricing-rules*';
export const FETCH_TAX_GROUPS_ENDPOINT = '**/taxation/api/v1/tax-groups/*';

// product search testIDs
export const PRODUCT_SEARCH_INPUT = 'product-search-input';
export const PRODUCT_SEARCH_WITH_NAME_BUTTON = 'product-search-with-sku-button';
export const PRODUCT_SEARCH_WITH_CODE_BUTTON = 'product-search-with-code-button';
export const PRODUCT_SEARCH_WITH_BRAND_BUTTON = 'product-search-with-brand-button';

//product filters testIds
export const PRODUCT_FILTER_CITY_SELECT = 'product-filter-city-select';
export const PRODUCT_FILTER_LOCATION_SELECT = 'product-filter-location-select';
export const PRODUCT_FILTER_SORT_SELECT = 'product-filter-sort-select';
export const PRODUCT_FILTER_CATEGORY_SELECT = 'product-filter-category-select';
export const PRODUCT_FILTER_STATUS_ALL_BUTTON = 'product-filter-status-all-button';
export const PRODUCT_FILTER_STATUS_ENABLED_BUTTON = 'product-filter-status-enabled-button';
export const PRODUCT_FILTER_STATUS_DISABLED_BUTTON = 'product-filter-status-disabled-button';
export const PRODUCT_FILTER_DYNAMIC_PRICING_MULTISELECT = 'product-filter-dyanmic-pricing-multiselect';

// product page testIds
export const PRODUCT_PAGE_TABSLAYOUT_LISTING_TAB = 'product-page-tabslayout-tab-0';
export const PRODUCT_PAGE_TABSLAYOUT_ONBOARDING_TAB = 'product-page-tabslayout-tab-1';
export const PRODUCT_ONBOARDING_FORM_UPDATE_CATEGORIES = 'product-onboarding-form-update-categories';

export const NAV_BAR_PRODUCT_TAB = 'portal-nav-product-tab-0';
export const NAV_BAR_TAGS_MANAGEMENT_TAB = 'portal-nav-tags-tab-1';
export const NAV_BAR_ED_REPORTING_TAB = 'portal-nav-ed-reporting-tab-2';

//product listing testIds
export const PRODUCT_LISTING_DATA_TABLE = 'product-listing-data-table';
export const PRODUCT_LISTING_ROW_EDIT_BUTTON  = 'product-listing-row-edit-button';
export const PRODUCT_EDIT_PAGE_LAYOUT= 'product-edit-page-layout';
export const PRODUCT_EDIT_SKU_INFROMATION_SECTION= 'product-edit-sku-information-section';
export const PRODUCT_EDIT_PURCHASING_INFROMATION_SECTION= 'product-edit-purchasing-information-section';
export const PRODUCT_EDIT_SKU_SIZE_PAGE_SECTION='edit-sku-size-page-section';
export const PRODUCT_EDIT_TABSLAYOUT_GENERAL_TAB = 'product-edit-tabslayout-tab-0';
export const PRODUCT_EDIT_TABSLAYOUT_CATALOGUE_TAB = 'product-edit-tabslayout-tab-1';
export const PRODUCT_EDIT_TABSLAYOUT_WEIGHT_TAB = 'product-edit-tabslayout-tab-3';
export const PRODUCT_EDIT_TABSLAYOUT_PRICING_TAB = 'product-edit-tabslayout-tab-2';
export const PRODUCT_EDIT_VBP_INFORMATION_SECTION= 'product-edit-vbp-information-section';
export const PRODUCT_EDIT_TAXATION_INFORMATION_SECTION= 'product-edit-taxation-information-section';


//product edit screen testIds
export const PRODUCT_ENABLE_STATUS_BUTTON= 'product-status-button-Enable';
export const PRODUCT_DISABLE_STATUS_BUTTON= 'product-status-button-Disable';

export const EDIT_SKU_INFORMATION_QTY_LIMIT_INPUT = 'edit-sku-information-quantity_limit-input';
export const EDIT_SKU_INFORMATION_NAME_INPUT = 'edit-sku-information-name-input';
export const EDIT_SKU_INFORMATION_SKU_INPUT = 'edit-sku-information-sku-input';
export const EDIT_SKU_INFORMATION_DESCRIPTION_INPUT = 'edit-sku-information-description-input';
export const EDIT_SKU_INFORMATION_BRAND_INPUT = 'edit-sku-information-brand-input';

export const EDIT_SKU_INFORMATION_QTY_LIMIT_FORMCONTROL = 'edit-sku-information-quantity_limit-formcontrol';
export const EDIT_SKU_INFORMATION_NAME_FORMCONTROL = 'edit-sku-information-name-formcontrol';
export const EDIT_SKU_INFORMATION_SKU_FORMCONTROL = 'edit-sku-information-sku-formcontrol';
export const EDIT_SKU_INFORMATION_DESCRIPTION_FORMCONTROL = 'edit-sku-information-description-formcontrol';
export const EDIT_SKU_INFORMATION_BRAND_FORMCONTROL = 'edit-sku-information-brand-formcontrol';

export const EDIT_LOGISTICS_STOCK_QUANTITY_FORMCONTROL = 'edit-logistic-stock-quantity-formcontrol';
export const EDIT_LOGISTICS_PHYSICAL_STOCK_FORMCONTROL = 'edit-logistic-physical-stock-formcontrol';
export const EDIT_LOGISTICS_DELIVERY_TIME_FORMCONTROL = 'edit-logistic-delivery-time-formcontrol';

export const EDIT_LOGISTICS_STOCK_QUANTITY_INPUT = 'edit-logistic-stock-quantity-input';
export const EDIT_LOGISTICS_PHYSICAL_STOCK_INPUT = 'edit-logistic-physical-stock-input';
export const EDIT_LOGISTICS_DELIVERY_TIME_INPUT = 'edit-logistic-delivery-time-input';

export const EDIT_PURCHASING_SKU_STATUS_ACTIVATE_BUTTON = 'edit-purchasing-sku-status-activate-button';
export const EDIT_PURCHASING_SKU_STATUS_DEACTIVATE_BUTTON = 'edit-purchasing-sku-status-deactivate-button';
export const EDIT_PURCHASING_SKU_STATUS_FORMCONTROL = 'edit-purchasing-sku-status-formcontrol';
export const EDIT_PURCHASING_REASON_FORMCONTROL = 'edit-purchasing-reason-formcontrol';

export const EDIT_SKU_SIZE_SIZE_FORMCONTROL = 'edit-sku-size-size-formcontrol';
export const EDIT_SKU_SIZE_UNIT_FORMCONTROL = 'edit-sku-size-unit-formcontrol';
export const EDIT_SKU_SIZE_LENGTH_FORMCONTROL = 'edit-sku-size-length-formcontrol';
export const EDIT_SKU_SIZE_WIDTH_FORMCONTROL = 'edit-sku-size-width-formcontrol';
export const EDIT_SKU_SIZE_HEIGHT_FORMCONTROL = 'edit-sku-size-height-formcontrol';
export const EDIT_SKU_SIZE_WEIGHT_FORMCONTROL = 'edit-sku-size-weight-formcontrol';

export const EDIT_SKU_SIZE_SIZE_INPUT = 'edit-sku-size-size-input';
export const EDIT_SKU_SIZE_UNIT_INPUT = 'edit-sku-size-unit-input';
export const EDIT_SKU_SIZE_LENGTH_INPUT = 'edit-sku-size-length-input';
export const EDIT_SKU_SIZE_WIDTH_INPUT = 'edit-sku-size-width-input';
export const EDIT_SKU_SIZE_HEIGHT_INPUT = 'edit-sku-size-height-input';
export const EDIT_SKU_SIZE_WEIGHT_INPUT = 'edit-sku-size-weight-input';

export const EDIT_BASIC_PRICING_INFORMATION_PRICE_INPUT= 'edit-basic-pricing-information-price-input';
export const EDIT_BASIC_PRICING_INFORMATION_MRP_INPUT= 'edit-basic-pricing-information-mrp-input';
export const EDIT_BASIC_PRICING_INFORMATION_TRADE_PRICE_INPUT= 'edit-basic-pricing-information-trade-price-input';

export const EDIT_TAXATION_TAX_INCLUSIVE_FORM_CONTROL = 'edit-taxation-tax-inclusive-formcontrol';
export const EDIT_TAXATION_TAX_PERCENTAGE_FORM_CONTROL = 'edit-taxation-tax-percentage-formcontrol';
export const EDIT_TAXATION_TAX_CATEGORY_FORM_CONTROL = 'edit-taxation-tax-category-formcontrol';

export const EDIT_BASIC_PRICING_DEFAULT_PRICE_FORMCONTROL = 'edit-basic-pricing-default-price-formcontrol';
export const EDIT_BASIC_PRICING_MRP_FORMCONTROL = 'edit-basic-pricing-mrp-formcontrol';
export const EDIT_BASIC_PRICING_TRADE_PRICE_FORMCONTROL = 'edit-basic-pricing-trade-price-formcontrol';

export const EDIT_TAXATION_TAX_INCLUSIVE_FORMCONTROL = 'edit-taxation-tax-inclusive-formcontrol';
export const EDIT_TAXATION_TAX_CATEGORY_FORMCONTROL = 'edit-taxation-tax-category-formcontrol';
export const EDIT_TAXATION_TAX_PERCENTAGE_FORMCONTROL = 'edit-taxation-tax-percentage-formcontrol';
export const EDIT_TAXATION_TAX_GROUP_FORMCONTROL = 'edit-taxation-tax-group-formcontrol';

export const EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE = 'edit-taxation-information-tax-inclusive-toggle';
export const EDIT_TAXATION_INFORMATION_TAX_INCLUSIVE_TOGGLE_TEXT = 
'edit-taxation-information-tax-inclusive-toggle-text';
export const EDIT_TAXATION_INFORMATION_TAX_PERCENTAGE_INPUT = 'edit-taxation-information-tax-percentage-input';
export const EDIT_TAXATION_TAX_CATEGORY_SELECT = 'edit-taxation-tax-category-select';
export const EDIT_TAXATION_TAX_GROUP_SELECT = 'edit-taxation-tax-group-select';

export const TAX_INFORMATION_DATATABLE = 'tax-information-datatable';

export const SKU_PURCHASE_STATUS_LABEL = 'SKU Purchase Status';
export const EDIT_PURCHASING_REASON_SELECT = 'edit-purchasing-reason-select';
export const PRODUCT_EDIT_SAVE_BUTTON = 'product-edit-save-button';
export const PRODUCT_EDIT_BACK_BUTTON='product-edit-back-button';
export const PRODUCT_EDIT_SAVE_CONFIRMATION_BUTTON ='product-edit-save-confirmation-modal-cancel-button';

// product edit pricing rules section
export const PRODUCT_EDIT_BASIC_PRICING_INFORMATION_SECTION= 'product-edit-basic-pricing-information-section';
export const PRODUCT_EDIT_PRICING_RULE_INFORMATION_SECTION= 'product-edit-pricing-rules-information-section';
export const PRODUCT_EDIT_ADD_MORE_PRICING_RULE_BUTTON = 'product-edit-add-more-pricing-rule-button';
export const PRODUCT_EDIT_ADD_PRICING_RULE_BUTTON = 'product-edit-add-pricing-rule-button';

export const PRODUCT_EDIT_PRICING_RULE_STATUS_ACTIVE_BUTTON = 'product-edit-pricing-rule-status-Active-button';
export const PRODUCT_EDIT_PRICING_RULE_STATUS_INACTIVE_BUTTON = 'product-edit-pricing-rule-status-Inactive-button';
export const PRODUCT_EDIT_PRICING_RULE_STATUS_LABEL = 'product-edit-pricing-rule-status-label';

export const PRODUCT_EDIT_PRICING_RULE_PRECEDENCE_LABEL = 'product-edit-pricing-rule-precedence-label';
export const PRODUCT_EDIT_PRICING_RULE_PRECEDENCE_INPUT = 'product-edit-pricing-rule-precedence-input';
export const PRODUCT_EDIT_PRICING_RULE_PRECEDENCE_ERROR = '';

export const PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_LABEL = 'product-edit-pricing-rule-shoptype-label';
export const PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_MULTISELECT = 'product-edit-pricing-rule-shoptype-multiselect';
export const PRODUCT_EDIT_PRICING_RULE_SHOPTYPE_ERROR = 'product-edit-pricing-rule-shoptype-error';

export const PRODUCT_EDIT_PRICING_RULE_ZONE_LABEL = 'product-edit-pricing-rule-zone-label';
export const PRODUCT_EDIT_PRICING_RULE_ZONE_SELECT = 'product-edit-pricing-rule-zone-select';
export const PRODUCT_EDIT_PRICING_RULE_ZONE_ERROR = 'product-edit-pricing-rule-zone-error';

export const PRODUCT_EDIT_PRICING_RULE_PRICE_LABEL = 'product-edit-pricing-rule-price-label';
export const PRODUCT_EDIT_PRICING_RULE_PRICE_INPUT = 'product-edit-pricing-rule-price-input';
export const PRODUCT_EDIT_PRICING_RULE_PRICE_ERROR = 'product-edit-pricing-rule-price-error';

export const PRODUCT_EDIT_PRICING_RULE_DELETE_BUTTON ='product-edit-pricing-rule-delete-button';
export const PRODUCT_EDIT_PRICING_RULE_DELETE_CONFIRMATION_MODAL ='product-edit-pricing-rule-delete-confirmation-modal';
export const PRODUCT_EDIT_BACK_PRESS_CONFIRMATION_MODAL = 'product-edit-discard-confirmation-modal';

// product edit Volume based pricing section
export const PRODUCT_EDIT_VBP_STATUS_TOGGLE = 'product-edit-vbp-status-toggle';
export const PRODUCT_EDIT_VBP_STATUS_TOGGLE_LABEL = 'product-edit-vbp-status-toggle-label';

export const PRODUCT_EDIT_VBP_PRICE_FORMCONTROL = 'product-edit-vbp-price-formcontrol';
export const PRODUCT_EDIT_VBP_QUANTITYFROM_FORMCONTROL = 'product-edit-vbp-quantityfrom-formcontrol';
export const PRODUCT_EDIT_VBP_QUANTITYTO_FORMCONTROL = 'product-edit-vbp-quantityto-formcontrol';
export const PRODUCT_EDIT_VBP_ERRORS_FORMCONTROL = 'product-edit-vbp-errors-formcontrol';

export const PRODUCT_EDIT_VBP_PRICE_INPUT = 'product-edit-vbp-price-input';
export const PRODUCT_EDIT_VBP_QUANTITYFROM_INPUT = 'product-edit-vbp-quantityfrom-input';
export const PRODUCT_EDIT_VBP_QUANTITYTO_INPUT = 'product-edit-vbp-quantityto-input';
export const PRODUCT_EDIT_VBP_ERRORS_INPUT = 'product-edit-vbp-errors-input';

export const PRODUCT_EDIT_VBP_DELETE_BUTTON = 'product-edit-vbp-delete-button';
export const PRODUCT_EDIT_VBP_ADD_MORE_BUTTON = 'product-edit-vbp-add-more-button';


export const PRODUCT_EDIT_CATALOGUE_IMAGE_UPLOAD_SECTION = 'product-edit-catalogue-image-upload-section';
export const PRODUCT_EDIT_CATALOGUE_LANGUAGE_SECTION = 'product-edit-catalogue-language-section';
export const PRODUCT_EDIT_CATALOGUE_TAGS_SECTION = 'product-edit-catalogue-tags-section';
export const PRODUCT_EDIT_CATALOGUE_CATEGORIES_SECTION = 'product-edit-catalogue-categories-section';

export const PRODUCT_EDIT_CATALOGUE_PRODUCT_PREVIEW_BUTTON = 'product-edit-catalogue-product-preview-button';
export const PRODUCT_EDIT_CATALOGUE_PRODUCT_PREVIEW_CLOSE_BUTTON = 'product-edit-catalogue-product-preview-close-button';

export const PRODUCT_EDIT_CATALOGUE_PRODUCT_CART_PREVIEW = 'product-edit-catalogue-product-cart-preview';
export const PRODUCT_EDIT_CATALOGUE_PRODUCT_CART_PREVIEW_HEADING = 'product-edit-catalogue-product-cart-preview-heading';
export const PRODUCT_EDIT_CATALOGUE_PRODUCT_CART_PREVIEW_PRODUCT_NAME = 'product-edit-catalogue-product-cart-preview-product-name';

export const PRODUCT_EDIT_CATALOGUE_PRODUCT_CATEGORY_PREVIEW = 'product-edit-catalogue-product-category-preview';
export const PRODUCT_EDIT_CATALOGUE_PRODUCT_CATEGORY_PREVIEW_HEADING = 'product-edit-catalogue-product-category-preview-heading';
export const PRODUCT_EDIT_CATALOGUE_PRODUCT_CATEGORY_PREVIEW_PRODUCT_NAME = 'product-edit-catalogue-product-category-preview-product-name';

export const PRODUCT_EDIT_CATALOGUE_PRODUCT_SEARCH_PREVIEW = 'product-edit-catalogue-product-search-preview';
export const PRODUCT_EDIT_CATALOGUE_PRODUCT_SEARCH_PREVIEW_HEADING = 'product-edit-catalogue-product-search-preview-heading';
export const PRODUCT_EDIT_CATALOGUE_PRODUCT_SEARCH_PREVIEW_PRODUCT_NAME = 'product-edit-catalogue-product-search-preview-product-name';

export const PRODUCT_EDIT_CATALOGUE_LANGUAGE_FORMCONTROL = 'product-edit-catalogue-language-formcontrol';
export const PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_NAME_FORMCONTROL = 'product-edit-catalogue-language-sku-name-formcontrol';
export const PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_DESCRIPTION_FORMCONTROL = 'product-edit-catalogue-language-sku-description-formcontrol';

export const PRODUCT_EDIT_CATALOGUE_LANGUAGE_SELECT = 'product-edit-catalogue-language-select';
export const PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_NAME_INPUT = 'product-edit-catalogue-language-sku-name-input';
export const PRODUCT_EDIT_CATALOGUE_LANGUAGE_SKU_DESCRIPTION_INPUT = 'product-edit-catalogue-language-sku-description-input';

export const PRODUCT_EDIT_CATALOGUE_TAGS = 'product-edit-catalogue-tags';


//product categoroies :: product edit
export const PRODUCT_EDIT_CATEGORIES_L1_FORMCONTROL = 'product-edit-catalogue-categories-l1-formcontrol';
export const PRODUCT_EDIT_CATEGORIES_L2_FORMCONTROL = 'product-edit-catalogue-categories-l2-formcontrol';
export const PRODUCT_EDIT_CATEGORIES_P1_FORMCONTROL = 'product-edit-catalogue-categories-p1-formcontrol';
export const PRODUCT_EDIT_CATEGORIES_P2_FORMCONTROL = 'product-edit-catalogue-categories-p2-formcontrol';

export const PRODUCT_EDIT_CATEGORIES_L1_SELECT = 'product-edit-catalogue-categories-l1-select';
export const PRODUCT_EDIT_CATEGORIES_L2_SELECT = 'product-edit-catalogue-categories-l2-select';
export const PRODUCT_EDIT_CATEGORIES_P1_INPUT = 'product-edit-catalogue-categories-p1-input';
export const PRODUCT_EDIT_CATEGORIES_P2_INPUT = 'product-edit-catalogue-categories-p2-input';

export const PRODUCT_EDIT_CATEGORIES_DELETE_BUTTON = 'product-edit-catalogue-categories-delete-button';
export const PRODUCT_EDIT_CATEGORIES_ADD_MORE_BUTTON = 'product-edit-catalogue-categories-add-more-button';
export const  PRODUCT_EDIT_CATEGORIES_ADD_NEW_ROW = 'product-edit-catalogue-categories-add-new-row';


//test data
export const PRODUCT_TEST_SKU_NAME = 'product-dev-e2e';
export const PRODUCT_TEST_SKU_CODE = 'Test-Skuname194-20001';
export const PRODUCT_TEST_SKU_BRAND = 'Tang';

export const PRODUCT_SORT_OPTIONS = {
  'asc-name': 'sortBy=name&sortOrder=asc',
  'desc-name': 'sortBy=name&sortOrder=desc',
  'asc-brand': 'sortBy=brand&sortOrder=asc',
  'desc-brand': 'sortBy=brand&sortOrder=desc',
};

export const NAVBAR_PRODUCT_SUB_OPTIONS ={
  PRODUCT :'Products',
  TAGS_MANAGEMENT: 'Tags Management',
  ED_REPORTING: 'ED Reporting'
};

export const PRODUCT_PURCHASING_OPTIONS ={
  DISABLED :'type=DISABLED',
  ENABLED: 'type=ENABLED'
};

export const SKU_INFORMATION_ERRORS = {
  NAME: 'SKU Name should not be empty',
};

export const SKU_PURCHASING_ERRORS = {
  REASON: 'Please select reason to update'
};

export const BASIC_PRICING_INFORMATION_ERRORS = {
  DEFAULT_PRICE: 'Price is mandatory',
  MRP: 'MRP is mandatory',
};

export const TAXATION_INFORMATION_ERRORS = {
  TAX_CATEGORY: 'Tax Category is mandatory',
  TAX_PERCENTAGE: 'Tax Percentage is mandatory',
};

export const PRICING_RULES_ERRORS = {
  SHOPTYPE: 'Please add 1 or more shop types',
  PRICE: 'Please enter valid price',
  DUPLICATE_SHOPTYPE: 'Similar shop type already exist',
  DUPLICATE_ZONE: 'Similar zone already exist',
};

export const PRICING_RULES_LABELS = {
  SHOPTYPE: 'Shop Type*',
  PRICE: 'Price*',
  PRECEDENCE: 'Precedence',
  ZONE: 'Select Zone',
  STATUS: 'Status'
};

export const VBP_LABELS = {
  PRICE: 'Price',
  QUANTITY_FROM: 'Quantity From',
  QUANTITY_TO: 'Quantity To',
};

export const VBP_ERRORS = {
  MINIMUM_VBP: 'Please add a minimum of two pricing segments in VBP',
  PRICE_REQUIRED_1: 'Required field \'Price\' is missing in segment 1 of VBP',
  QUANTITY_FROM_1: 'Required field \'Quantity From\' missing in segment 1 of VBP',
  QUANTITY_TO_1 : 'Required field \'Quantity To\' missing in segment 1 of VBP',
  PRICE_REQUIRED_2: 'Required field \'Price\' is missing in segment 2 of VBP',
  QUANTITY_FROM_2: 'Required field \'Quantity From\' missing in segment 2 of VBP',
  QUANTITY_TO_2 : 'Required field \'Quantity To\' missing in segment 2 of VBP'
};

export const SKU_INFORMATION_LABELS = {
  NAME: 'SKU Name*',
  SKU: 'SKU Code',
  DESCRIPTION: 'SKU Description',
  BRAND: 'Brand',
  SKU_QUANTITY: 'SKU Quantity Restriction'
};

export const SKU_SIZE_LABELS = {
  SIZE: 'Size',
  UNIT: 'Unit',
  LENGTH: 'Length',
  WIDTH: 'Width',
  HEIGHT: 'Height',
  WEIGHT: 'Weight'
};

export const BASIC_PRICING_INFORMATION_LABELS = {
  DEFAULT_PRICE: 'Default Price*',
  MRP: 'Maximum Retail Price - MRP*',
  TRADE_PRICE: 'Trade Price - TP',
};

export const TAXATION_LABELS = {
  TAX_INCLUSIVE: 'Tax Inclusive',
  TAX_PERCENTAGE: 'Tax Percentage',
  TAX_CATEGORY: 'Tax Category*',
  TAX_GROUP: 'Tax Group'
};


export const PRODUCT_PREVIEW_HEADINGS = {
  CATEGORY_VIEW_HEADING : 'Category Screen View',
  SEARCH_VIEW_HEADING : 'Search Screen View',
  CART_VIEW_HEADING : 'Cart Screen View',
};

export const LANGUAGE_SETTINGS_LABELS = {
  LANGUAGE: 'Language',
  SKU_NAME:'SKU Name',
  SKU_DESCRIPTION: 'SKU Description'
};

export const CATEGORIES_LABELS = {
  L1: 'Select Category L1*',
  P1: 'Priority',
  L2: 'Select Category L2*',
  P2: 'Priority'
};

export const CATEGORIES_ERRORS = {
  L1: 'please choose L1 category',
  L2: 'please choose L2 category',
};


export const SKU_PURCHASE_STATUS_BUTTON = {
  ACTIVATE: 'Activate',
  DEACTIVATE: 'Deactivate',
};

export const enum PRODUCT_STATUS {
  ENABLED = 0,
  DISABLED = 1,
}

export const enum PRODUCT_DYNAMIC_PRICIING {
  ENABLED = 1,
  DISABLED = 0,
}

export const enum PRODUCT_VBP {
  ENABLED = 1,
  DISABLED = 0,
}

export const PRODUCT_LISTING_TABLE_HEADINGS = [
  '#',
  'Product ID',
  'SKU Name',
  'SKU Code',
  'Price',
  'Stock',
  'Physical Stock',
  'VBP',
  'Dynamic Pricing',
  'Status',
  'Action',
];

export const TAX_INFORMATION_DATATABLE_HEADINGS = [
  'Tax Codes',
  'Tax Percentage'
];

export const PRODUCT_ONBOARDING_DATA = [
  { id: 'new-product--single-',
    title: 'NEW PRODUCT (SINGLE)',
    type: 'button',
  },
  { id: 'new-products--multiple-',
    title: 'NEW PRODUCTS (MULTIPLE)',
    type: 'file',
  },
  { id: 'for-bulk-update',
    title: 'FOR BULK UPDATE',
    type: 'file',
  },
  { id: 'for-bulk-uploading-images',
    title: 'FOR BULK UPLOADING IMAGES',
    type: 'file',
  },
  { id: 'update-price-availability-stock--bulk-',
    title: 'UPDATE PRICE/AVAILABILITY/STOCK (BULK)',
    type: 'file',
  },
  { id: 'update-product-language--bulk-',
    title: 'UPDATE PRODUCT LANGUAGE (BULK)',
    type: 'file',
  },
  { id: 'update-display-priority--bulk-',
    title: 'UPDATE DISPLAY PRIORITY (BULK)',
    type: 'file',
  },
  { id: 'update-search-terms',
    title: 'UPDATE SEARCH TERMS',
    type: 'file',
  },
  { id: 'update-categories---brands--bulk-',
    title: 'UPDATE CATEGORIES & BRANDS (BULK)',
    type: 'file',
  },
  { id: 'bulk-dynamic-pricing',
    title: 'BULK DYNAMIC PRICING',
    type: 'file',
  }
];