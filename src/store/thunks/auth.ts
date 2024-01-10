import { createAsyncThunk } from '@reduxjs/toolkit';
import { LocalStorageService } from 'src/services/local-storage';
import { AUTH_LOGIN, AUTH_LOGOUT } from 'src/store/action-types';
import { AuthService } from '../../services/auth';
import { getBaseUrl } from '../selectors/features/app';
import { showAlert } from '../slices/features/alert';

/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const authService = new AuthService();
const localStorageService = new LocalStorageService();

export const login = createAsyncThunk<TObject, TObject, IActionOptions>(
  AUTH_LOGIN,
  async (_requestPayload: Record<string, string>, thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    console.log('baseUrl: ', baseUrl);
    const { data, error } = await authService.signIn(baseUrl, _requestPayload);

    if (error) {
      thunkAPI.dispatch(showAlert({
        message: data?.message || data?.userMessage || data?.code,
        type: 'error',
      }));
      return thunkAPI.rejectWithValue({ ...error });
    }

    thunkAPI.dispatch(showAlert({
      message: 'Signed In Successfully',
      type: 'success',
    }));

    localStorageService.persist('authToken', data?.token);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const logout = createAsyncThunk<TObject, TObject, IActionOptions>(
  AUTH_LOGOUT,
  async (_requestPayload: Record<string, string>, thunkAPI) => {
    const response = await authService.signOut();
    thunkAPI.fulfillWithValue({ payload: _requestPayload});
    return response?.data;
  }
);
