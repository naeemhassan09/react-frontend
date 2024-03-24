import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const RolePermissionSelector = (state: TReduxState) => state.entities.rolePermisssion;

export const getAllRolePermission = createSelector(RolePermissionSelector, (app) => get(app, 'data', null));

export const getSingleRolePermission = createSelector(RolePermissionSelector, (app) => get(app, 'singleData', null));
