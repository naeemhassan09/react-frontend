/* eslint-disable */
// import { getSelectedCategoryId } from 'src/store/selectors/features/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppService } from 'src/services';
// import { bulkCreatePricingRules, fetchProducts } from 'src/store/thunks';
import {
  APP_FETCH_ALL_COMPANIES,
  APP_FETCH_BUSINESS_UNITS,
  APP_FETCH_ALL_LOCATIONS,
  APP_UPLOAD_FILE_TO_S3,
  APP_UPLOAD_IMAGE_TO_S3,
  APP_UPDATE_SEARCH_TERMS,
} from 'src/store/action-types';
import { FILE_UPLOAD_ACTIONS } from 'src/constants/app';
// import { reportCustomerSKUAssignment } from 'src/store/thunks/ed-reporting';
import {
  getBaseUrl,
  getChunkSize,
  getSelectedBusinessUnitId,
  getSelectedCompanyId,
  getSelectedLocationId,
} from '../selectors/features/app';

// import { getProductPage } from '../selectors/features/product';
import {
  // updateSearchValue,
  // updateSelectedBusinessUnitId,
  // updateSelectedCompanyId,
  // updateSelectedLocationId,
} from '../slices/features/app';
// import { updateProductCurrentPage, 
//   updateSelectedCategoryId, updateSelectedSubCategoryId } from '../slices/features/product';
import { showAlert } from '../slices/features/alert';
// import { getSelectedSubCategoryId } from './../selectors/features/product';
//import { PRODUCT_SETTINGS } from './../../constants/common';
// import {
//   bulkCategoryBrandsLink,
//   bulkUpdateLocationPricesAndStock,
//   bulkUpdateProductDisplayPriority,
//   bulkUpdateProductLanguage,
//   bulkUpdateProducts,
//   bulkUploadProducts,
//   bulkUploadProductsTaxGroups,
// } from './product';

const appService = new AppService();

export const fetchAllCompanies = createAsyncThunk<
  TObject,
  TObject,
  IActionOptions
>(APP_FETCH_ALL_COMPANIES, async (_: any, thunkAPI) => {
  try {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const { data } = await appService.fetchAllCompanies(baseUrl);
    return thunkAPI.fulfillWithValue(data);
  } catch ({ statusText }) {
    return thunkAPI.rejectWithValue(statusText);
  }
});

export const fetchBusinessUnits = createAsyncThunk<
  TObject,
  TObject,
  IActionOptions
>(APP_FETCH_BUSINESS_UNITS, async (companyId: string, thunkAPI) => {
  try {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const { data } = await appService.fetchBusinessUnits(baseUrl, companyId);

    return thunkAPI.fulfillWithValue(data);
  } catch ({ statusText }) {
    return thunkAPI.rejectWithValue(statusText);
  }
});

export const fetchAllLocations = createAsyncThunk<
  TObject,
  TObject,
  IActionOptions
>(
  APP_FETCH_ALL_LOCATIONS,
  async (_requestPayload: Record<string, string>, thunkAPI) => {
    try {
      const baseUrl = getBaseUrl(thunkAPI.getState());
      const { companyId, businessUnitId } = _requestPayload;

      const { data } = await appService.fetchAllLocations(
        baseUrl,
        companyId,
        businessUnitId
      );

      return thunkAPI.fulfillWithValue(data);
    } catch ({ statusText }) {
      return thunkAPI.rejectWithValue(statusText);
    }
  }
);

export const fetchInitialData =
  () =>
  async (dispatch: any): Promise<any> => {
    dispatch(fetchAllCompanies({}));
    // dispatch(fetchProducts({pageIndex: 1, pageSize: PRODUCT_SETTINGS.PER_PAGE }));
  };

export const handleRefresh =
  () =>
  async (dispatch: any, ): Promise<any> => {
    // const selectedCompanyId = getSelectedCompanyId(getState());
    // const selectedBusinessUnitId = getSelectedBusinessUnitId(getState());
    // const selectedLocationId = getSelectedLocationId(getState());
    // const searchValue = getSearchValue(getState());
    // const currentPage = getProductPage(getState());
    // const categoryId = getSelectedCategoryId(getState());
    // const subCatId = getSelectedSubCategoryId(getState());

    // selectedCompanyId && dispatch(updateSelectedCompanyId(''));
    // selectedBusinessUnitId && dispatch(updateSelectedBusinessUnitId(''));
    // selectedLocationId && dispatch(updateSelectedLocationId(''));
    // searchValue && dispatch(updateSearchValue(''));
    // currentPage !== 1 && dispatch(updateProductCurrentPage(1));
    // categoryId && dispatch(updateSelectedCategoryId(''));
    // subCatId && dispatch(updateSelectedSubCategoryId(''));
    dispatch(fetchInitialData());
  };

export const updateSearchTerms = createAsyncThunk<
  TObject,
  TObject,
  IActionOptions
>(
  APP_UPDATE_SEARCH_TERMS,
  async (data: TArrayOfObjects, thunkAPI) => {

    try { 
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const chunkSize = getChunkSize(thunkAPI.getState());
    
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = { customerSearchTerms: data.slice(i, i + chunkSize) };
      await appService.updateSearchTerms(baseUrl, chunk);
    }

    thunkAPI.dispatch(showAlert({
        message: 'Product Search Terms Updated Successfully',
        type: 'success',
      }));
      return thunkAPI.fulfillWithValue('success');
    }
    catch (err: any) {
        thunkAPI.dispatch(showAlert({
          message: err?.data?.message || err.toString(),
          type: 'error',
              }));
          return thunkAPI.rejectWithValue(err);
          }
  }
);

export const uploadFileToS3 = createAsyncThunk<
  TObject,
  TObject,
  IActionOptions
>(
  APP_UPLOAD_FILE_TO_S3,
  async (requestPayload: TObject, thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const { file, action } = requestPayload;
    const formData = new FormData();
    formData.append('file', file);

    if (action === FILE_UPLOAD_ACTIONS.BULK_DYNAMIC_PRICE_CREATE){
      // thunkAPI.dispatch(bulkCreatePricingRules(formData));
      return thunkAPI.rejectWithValue(false);
    } else if (action === FILE_UPLOAD_ACTIONS.BULK_LINK_PRODUCTS){
      // thunkAPI.dispatch(bulkCategoryBrandsLink(formData));
      return thunkAPI.rejectWithValue(false);
    }

    const response = await appService.uploadFileToS3(baseUrl, { data: formData });

    if (response.error) {
      thunkAPI.dispatch(showAlert({
        message: 'Error Uploading File',
        type: 'error',
      }));
      return thunkAPI.rejectWithValue(response.error);
    }

    // if (action === FILE_UPLOAD_ACTIONS.BULK_UPLOAD_PRODUCTS) 
    //   thunkAPI.dispatch(bulkUploadProducts(response?.data));
    // else if (action === FILE_UPLOAD_ACTIONS.BULK_UPLOAD_PRODUCTS_TAX_GROUPS)
    //   thunkAPI.dispatch(bulkUploadProductsTaxGroups(response?.data));
    // else if (action === FILE_UPLOAD_ACTIONS.BULK_UPDATE_PRODUCTS) 
    //   thunkAPI.dispatch(bulkUpdateProducts(response?.data));
    // else if (action === FILE_UPLOAD_ACTIONS.BULK_UPDATE_LOCATION_PRICES_STOCK) 
    //   thunkAPI.dispatch(bulkUpdateLocationPricesAndStock(response?.data));
    // else if (action === FILE_UPLOAD_ACTIONS.BULK_UPDATE_PRODUCT_LANGUAGE) 
    //   thunkAPI.dispatch(bulkUpdateProductLanguage(response?.data));
    // else if (action === FILE_UPLOAD_ACTIONS.BULK_UPDATE_PRODUCT_DISPLAY_PRIORITY) 
    //   thunkAPI.dispatch(bulkUpdateProductDisplayPriority(response?.data));
    // else if (action === FILE_UPLOAD_ACTIONS.CUSTOMER_SKU_ASSIGNMENT)
    //   {thunkAPI.dispatch(reportCustomerSKUAssignment(response?.data));
    //   return;}

    thunkAPI.dispatch(showAlert({
      message: 'File Uploaded Successfully',
      type: 'success',
    }));    
    return thunkAPI.fulfillWithValue(response?.data);
  }
);

export const uploadImageToS3 = createAsyncThunk<
  TObject,
  TObject,
  IActionOptions
>(
  APP_UPLOAD_IMAGE_TO_S3,
  async (requestPayload: TObject, thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const { file } = requestPayload;
    const formData = new FormData();
    formData.append('picture', file);
    const response = await appService.uploadImageToS3(baseUrl, { data: formData });

    if (response.error) {
      thunkAPI.dispatch(showAlert({
        message: 'Error Uploading File',
        type: 'error',
      }));
      return thunkAPI.rejectWithValue(response.error);
    }

    thunkAPI.dispatch(showAlert({
      message: 'File Uploaded Successfully',
      type: 'success',
    }));    
    return thunkAPI.fulfillWithValue(response?.data);
  }
);