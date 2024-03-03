import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const emailTemplateSelector = (state: TReduxState) => state.entities.emailTemplate;

export const getEmailTemplate = createSelector(emailTemplateSelector, (app) => get(app, 'data', null));

