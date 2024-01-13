import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const dashboardEntitiesSelector = (state: TReduxState) => state.entities.dashboard;

export const getDashboardData = createSelector(dashboardEntitiesSelector, (app) => get(app, 'data', null));

