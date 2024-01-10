/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class BrandService extends HttpService {

  fetchBrands = async (
    baseAuthUrl: string,
    queryParams: TObject
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseAuthUrl}/brand-reporting?`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchBrandTypes = async (
    baseUrl: string,
    queryParams: TObject
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/brand-reporting-types`,
        queryParams
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
}
