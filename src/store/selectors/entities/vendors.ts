import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const vendorSelector = (state: TReduxState) => state.entities.vendors;

export const getVendorsData = createSelector(vendorSelector, (app) => get(app, 'data', null));

export const getVendorsOrderDetails = createSelector(vendorSelector, (app) => get(app, 'orderDetails', null));

export const getVendorsAllocateInventory = createSelector(vendorSelector, (app) => get(app, 'allocateInventory', null));

export const getVendorsImportProduct = createSelector(vendorSelector, (app) => get(app, 'importViewProducts', null));

export const getVendorsAllocateProductList = createSelector(vendorSelector, (app) => 
get(app, 'allocateProductsList', null));

export const getVendorsAllocateProductIds = createSelector(vendorSelector, (app) => 
get(app, 'allocatedProductsListIds', null));
