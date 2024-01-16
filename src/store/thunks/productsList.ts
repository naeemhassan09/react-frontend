import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCT_FETCH } from 'src/store/action-types';
import { ProductService } from 'src/services';
import { getBaseUrl } from '../selectors/features/app';


// import { showAlert } from '../slices/features/alert';
/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const ProductServices = new ProductService();

export const fetchProductData = createAsyncThunk<TObject, TObject, IActionOptions>(
    PRODUCT_FETCH,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const { data } = await ProductServices.fetchAllProducts(baseUrl);
    return thunkAPI.fulfillWithValue(data);
  }
);