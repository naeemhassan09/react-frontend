import get from 'lodash.get';
import { createSelector } from 'reselect';
import { ROLES } from 'src/constants/roles';
/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const authFeatureSelector = (state: TReduxState) => state.features.auth;

export const getData = createSelector(authFeatureSelector, (app) => get(app, 'data', null));

export const getAuthToken = createSelector(getData, (data) => get(data, 'token', ''));

export const getIsLoggedIn = createSelector(getAuthToken, (authToken) => authToken.length > 0);

export const getUserData = createSelector(getData, (userLoggedIn) => get(userLoggedIn, 'user', null));

export const getUserRoleData = createSelector(getUserData, (userData) => get(userData, 'role', null));

export const getUserRoleId = createSelector(getUserRoleData, (userRoleData) => get(userRoleData, 'id', null));

export const getIsAdmin = createSelector(getUserData, (data: any) => data && data?.role?.name === ROLES.ADMIN);
