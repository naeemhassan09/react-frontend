import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class PricingService extends HttpService {
  fetchPricingRules = async (
    baseAuthUrl: string,
    queryParams: Record<string, string | number>
  ): Promise<IPrepareResponse<AxiosResponse>> => {

    try {
      const apiResponse = await this.get(`${baseAuthUrl}/pricing-engine/api/v1/pricing-rules`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  updatePricingRules = async (
    baseAuthUrl: string,
    data: TObject
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.put(`${baseAuthUrl}/pricing-engine/api/v1/pricing-rules`, data);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchShopTypes = async (
    baseAuthUrl: string,
    queryParams: Record<string, string | number>
  ): Promise<IPrepareResponse<AxiosResponse>> => {

    try {
      const apiResponse = await this.get(`${baseAuthUrl}/user/shop-type`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  bulkCreatePricingRules = async (
    baseAuthUrl: string,
    data: TObject
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(`${baseAuthUrl}/pricing-engine/api/v1/pricing-rules/bulk`, data);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
}
