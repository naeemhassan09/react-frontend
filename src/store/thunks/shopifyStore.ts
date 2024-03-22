import { createAsyncThunk } from '@reduxjs/toolkit';
import { ShopifyStoreService } from 'src/services';
import { getAuthToken } from 'src/store/selectors/features';
import { SHOPIFY_FETCH } from '../action-types';
import { getBaseUrl } from '../selectors/features/app';


const ShopifyService = new ShopifyStoreService();

export const fetchShopifyData = createAsyncThunk<TObject, TObject, IActionOptions>(
    SHOPIFY_FETCH,
  async ( _requestPayload: Record<string, string>,thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const token=getAuthToken(thunkAPI.getState());
    const { data } = await ShopifyService.fetchAllShopifyStores(baseUrl,token);
    return thunkAPI.fulfillWithValue(data);
  }
);


