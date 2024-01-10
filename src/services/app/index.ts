import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class AppService extends HttpService {
  fetchAllCompanies = async (baseAuthUrl: string): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseAuthUrl}/config/company/getAll`
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchBusinessUnits = async (
    baseAuthUrl: string,
    companyId: string
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    const apiData: Record<string, string> = {};

    if (companyId) {
      apiData.companyId = companyId;
    }

    try {
      const apiResponse = await this.get(`${baseAuthUrl}/config/businessunit/getAll`, { ...apiData });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchBusinessUnitsByIds = async (
    baseAuthUrl: string,
    queryParams: any
  ): Promise<IPrepareResponse<AxiosResponse>> => {    
    try {
      const apiResponse = await this.get(`${baseAuthUrl}/config/businessunit`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchAllLocations = async (
    baseAuthUrl: string,
    companyId: string,
    businessUnitId: string
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseAuthUrl}/config/location/getAll`,
        {
          companyId,
          businessUnitId,
        }
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchLocations = async (
    baseAuthUrl: string,
    params: any,
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseAuthUrl}/config/location/`,
        params
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  // WIP: this postResourceToS3 is work in progress
  postResourceToS3 = async (
    baseUrl: string,
    params: any,
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        baseUrl,
        params
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  updateSearchTerms = async (baseUrl: string, requestData: TObject) => {
    try {
      
      const headers: TObject = {
        Accept: 'application/json',
        'content-type': 'application/json',
      };

      const apiResponse = await this.put(
        `${baseUrl}/products/quick-search`,
        requestData,
        null,
        {headers}
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  uploadFileToS3 = async (baseUrl: string, requestData: TObject) => {
    try {
      const { data } = requestData;
      
      const headers: TObject = {
        Accept: 'application/json',
        'content-type': 'multipart/form-data',
      };

      const apiResponse = await this.post(
        `${baseUrl}/upload/uploadFileToS3`,
        data,
        {headers}
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  uploadImageToS3 = async (baseUrl: string, requestData: TObject) => {
    try {
      const { data } = requestData;
      
      const headers: TObject = {
        Accept: 'application/json',
        'content-type': 'multipart/form-data',
      };

      const apiResponse = await this.post(
        `${baseUrl}/upload/uploadUserImageToS3`,
        data,
        {headers}
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
}
