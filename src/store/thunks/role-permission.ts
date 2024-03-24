import { createAsyncThunk } from '@reduxjs/toolkit';
import {  FETCH_ROLES, FETCH_SINLE_ROLES } from 'src/store/action-types';
import { RolePermissionService } from 'src/services';
import { getBaseUrl } from '../selectors/features/app';
import { getAuthToken } from '../selectors/features';

// import { showAlert } from '../slices/features/alert';
/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const RolePermissionServices = new RolePermissionService();

export const fetchRoles = createAsyncThunk<TObject, TObject, IActionOptions>(
    FETCH_ROLES,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token= getAuthToken(thunkAPI.getState());
    const { data } = await RolePermissionServices.fetchAllRolePermission(baseUrl, token);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const fetchSingleRole = createAsyncThunk<TObject, TObject, IActionOptions>(
   FETCH_SINLE_ROLES ,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token= getAuthToken(thunkAPI.getState());
    const { data } = await RolePermissionServices.fetchSingleRole(baseUrl, token, '');
    return thunkAPI.fulfillWithValue(data);
  }
);