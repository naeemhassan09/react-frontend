import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const shopifyStoreSelector = (state: TReduxState) => state.entities.shopifyStore;

export const getShopifyData = createSelector(shopifyStoreSelector, (app) => get(app, 'data', null));

