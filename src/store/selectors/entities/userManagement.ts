import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const userManagementSelector = (state: TReduxState) => state.entities.userManagement;

export const getUserData = createSelector(userManagementSelector, (app) => get(app, 'data', null));

