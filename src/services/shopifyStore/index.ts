/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class ShopifyStoreService extends HttpService {
  fetchAllShopifyStores = async (baseAuthUrl: string, token: string): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/shopify_stores', {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };


 

}