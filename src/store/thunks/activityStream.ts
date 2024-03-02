import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACTIVITY_BULK_DOWNLOAD, ACTIVITY_FETCH } from 'src/store/action-types';
import { ActivityStreamsService } from 'src/services';
import { getAuthToken } from 'src/store/selectors/features';
import { getBaseUrl } from '../selectors/features/app';

// import { showAlert } from '../slices/features/alert';
/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const ActivityServices = new ActivityStreamsService();

export const fetchActivityData = createAsyncThunk<TObject, TObject, IActionOptions>(
    ACTIVITY_FETCH,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await ActivityServices.fetchAllActivities(baseUrl, _requestPayload, token);
    return thunkAPI.fulfillWithValue(data);
  }

  
);

export const downloadActiveData = createAsyncThunk<TObject, TObject, IActionOptions>(
    ACTIVITY_BULK_DOWNLOAD,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token =getAuthToken(thunkAPI.getState());

    const { data } = await ActivityServices.dowbloadData(baseUrl, token, _requestPayload);
    return thunkAPI.fulfillWithValue(data);
  }
);