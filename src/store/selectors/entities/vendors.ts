import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const vendorSelector = (state: TReduxState) => state.entities.vendors;

export const getVendorsData = createSelector(vendorSelector, (app) => get(app, 'data', null));

