import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const activityStreamSelector = (state: TReduxState) => state.entities.activityStream;

export const getActivityStream = createSelector(activityStreamSelector, (app) => get(app, 'data', null));

