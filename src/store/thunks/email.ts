import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmailService } from 'src/services';
import { getAuthToken } from 'src/store/selectors/features';
import { EMAIL_CREATE, EMAIL_FETCH, EMAIL_UPDATE } from '../action-types';
import { getBaseUrl } from '../selectors/features/app';


const EmailServices = new EmailService();

export const fetchEmailData = createAsyncThunk<TObject, TObject, IActionOptions>(
    EMAIL_FETCH,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await EmailServices.fetchAllEmailTemplate(baseUrl,token);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const creatEmailTemplate = createAsyncThunk<TObject, TObject, IActionOptions>(
    EMAIL_CREATE,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await EmailServices.createEmailTemplate(baseUrl,token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);

export const updatEmailTemplate = createAsyncThunk<TObject, TObject, IActionOptions>(
    EMAIL_UPDATE,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await EmailServices.updateEmailTemplate(baseUrl,token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);
