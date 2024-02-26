import { createAsyncThunk } from '@reduxjs/toolkit';
import {  VendorsService } from 'src/services';
import { getAuthToken } from 'src/store/selectors/features';
import { getBaseUrl } from '../selectors/features/app';
import { VENDOR_CREATE, VENDOR_FETCH, VENDOR_ORDER_DETAIL, VENDOR_UPDATE, VENDOR_UPDATE_PASSWORD, 
    VENDOR_UPDATE_STATUS } from '../action-types';

// import { showAlert } from '../slices/features/alert';
/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const vendorServices = new VendorsService();

export const fetchVendorData = createAsyncThunk<TObject, TObject, IActionOptions>(
    VENDOR_FETCH,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await vendorServices.fetchAllVendors(baseUrl, token);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const createVendor= createAsyncThunk<TObject, TObject, IActionOptions>(
    VENDOR_CREATE,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await vendorServices.createNewVendor(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const updateVendor = createAsyncThunk<TObject, TObject, IActionOptions>(
    VENDOR_UPDATE,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await vendorServices.updateVendor(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const updateStatusVendor = createAsyncThunk<TObject, TObject, IActionOptions>(
    VENDOR_UPDATE_STATUS,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await vendorServices.updateStatusVendor(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }

  
);

export const updatePassworVendor = createAsyncThunk<TObject, TObject, IActionOptions>(
    VENDOR_UPDATE_PASSWORD,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await vendorServices.updatePasswordVendor(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const fetchVendorOrderDetails = createAsyncThunk<TObject, TObject, IActionOptions>(
    VENDOR_ORDER_DETAIL,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await vendorServices.getVendorOrder(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);


//     USER_DELETE,
//   async ( _requestPayload: Record<string, string>,thunkAPI) => {
//     const baseUrl = getBaseUrl(thunkAPI.getState());
//     const token=getAuthToken(thunkAPI.getState());
//     const { data } = await userService.deleteUser(baseUrl, token, _requestPayload);
//     return thunkAPI.fulfillWithValue(data);
//   }
// );

// export const updatePasswordUser = createAsyncThunk<TObject, TObject, IActionOptions>(
//     USER_UPDATE_PASSWORD,
//   async ( _requestPayload: Record<string, string>,thunkAPI) => {
//     const baseUrl = getBaseUrl(thunkAPI.getState());
//     const token=getAuthToken(thunkAPI.getState());
//     const { data } = await userService.updatePaswordUser(baseUrl, token, _requestPayload);
//     return thunkAPI.fulfillWithValue(data);
//   }
// );