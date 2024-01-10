import get from 'lodash.get';
import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const appFeatureSelector = (state: TReduxState) => state.features.app;

export const getAppValidationStates = createSelector(appFeatureSelector, (state) =>
  get(state, 'validationStates')
);

export const getBaseUrl = createSelector(appFeatureSelector, (app) => get(app, 'baseUrl', ''));

export const getChunkSize = createSelector(appFeatureSelector, (app) => get(app, 'chunkSize', 200));

export const getCategoryServiceUrl = createSelector(appFeatureSelector, (app) => get(app, 'categoryServiceUrl', ''));

export const getSelectedCompanyId = createSelector(appFeatureSelector, (app) => get(app, 'selectedCompanyId', ''));

export const getSelectedBusinessUnitId = createSelector(appFeatureSelector,
  (app) => get(app, 'selectedBusinessUnitId', '')
);

export const getSelectedLocationId = createSelector(appFeatureSelector, (app) => get(app, 'selectedLocationId', ''));

export const getSearchValue = createSelector(appFeatureSelector, (app) => get(app, 'searchValue', ''));

export const getUploadedFile = createSelector(appFeatureSelector, (app) => get(app, 'uploadedFile', ''));

export const getSelectedProduct = createSelector(appFeatureSelector, (app) => get(app, 'selectedDataToEdit', ''));

export const getIsProductFileUploaded = createSelector(
  getAppValidationStates,
  (validationStates) => get(validationStates, 'isFileUploaded', false)
);