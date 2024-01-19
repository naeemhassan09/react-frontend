import { createAsyncThunk } from '@reduxjs/toolkit';
import { ORDERS_FETCH } from 'src/store/action-types';
import { OrderService } from 'src/services';
import { getBaseUrl } from '../selectors/features/app';


// import { showAlert } from '../slices/features/alert';
/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const OrdersServices = new OrderService();

export const fetchOrderData = createAsyncThunk<TObject, TObject, IActionOptions>(
    ORDERS_FETCH,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const { data } = await OrdersServices.fetchAllOrders(baseUrl);
    return thunkAPI.fulfillWithValue(data);
  }
);