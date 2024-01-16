import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const productListEntitiesSelector = (state: TReduxState) => state.entities.productList;

export const getProductList = createSelector(productListEntitiesSelector, (app) => get(app, 'data', null));

