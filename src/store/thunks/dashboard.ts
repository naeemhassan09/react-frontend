import { createAsyncThunk } from '@reduxjs/toolkit';
import { APP_FETCH_DASHBOARD_DETAILS } from 'src/store/action-types';
import { DashboardServices } from 'src/services';
import { getBaseUrl } from '../selectors/features/app';


// import { showAlert } from '../slices/features/alert';
/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const DashboardService = new DashboardServices();

export const fetchDashboardData = createAsyncThunk<TObject, TObject, IActionOptions>(
    APP_FETCH_DASHBOARD_DETAILS,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const { data } = await DashboardService.fetchAllDashboardData(baseUrl);
    return thunkAPI.fulfillWithValue(data);
  }
);


