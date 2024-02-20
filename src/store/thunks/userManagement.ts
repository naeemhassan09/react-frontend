import { createAsyncThunk } from '@reduxjs/toolkit';
import {  USER_CREATE, USER_FETCH, USER_DELETE,USER_UPDATE } from 'src/store/action-types';
import { UserManagementService } from 'src/services';
import { getAuthToken } from 'src/store/selectors/features';
import { getBaseUrl } from '../selectors/features/app';

// import { showAlert } from '../slices/features/alert';
/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const userService = new UserManagementService();

export const fetchUserData = createAsyncThunk<TObject, TObject, IActionOptions>(
    USER_FETCH,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await userService.fetchAllUsers(baseUrl, token);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const createUser = createAsyncThunk<TObject, TObject, IActionOptions>(
    USER_CREATE,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await userService.createNewUser(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const updateUser = createAsyncThunk<TObject, TObject, IActionOptions>(
    USER_UPDATE,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await userService.updateUser(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const deleteUser = createAsyncThunk<TObject, TObject, IActionOptions>(
    USER_DELETE,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await userService.deleteUser(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);