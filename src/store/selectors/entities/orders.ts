import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const orderDataEntitiesSelector = (state: TReduxState) => state.entities.orderData;

export const getOrderData = createSelector(orderDataEntitiesSelector, (app) => get(app, 'data', null));

