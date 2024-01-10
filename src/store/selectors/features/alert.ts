import { createSelector } from 'reselect';

const alertFeatureBaseSelector = (state: TReduxState) => state?.features?.alert;

const getAlertData = createSelector(alertFeatureBaseSelector, (data) => data?.data);

export const getAlertMessage = createSelector(getAlertData, (data) => data?.message);

export const getAlertType = createSelector(getAlertData, (data) => data?.type);

export const getAlertVisible = createSelector(alertFeatureBaseSelector, (data) => data?.validationStates?.isVisible);
