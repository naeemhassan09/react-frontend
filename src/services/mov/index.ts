import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class MovService extends HttpService {
  fetchMovRules = async (
    baseAuthUrl: string,
    queryParams: Record<string, string | number>
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(`${baseAuthUrl}/pricing-engine/api/v1/mov-rules`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  createMovRules = async (
    baseAuthUrl: string,
    queryParams: Record<string, string | number>
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(`${baseAuthUrl}/pricing-engine/api/v1/mov-rules`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchRuleNames = async ( baseUrl: string, queryParams: Record<string, string>): Promise<any> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/pricing-engine/api/v1/mov-rules/check-name`,
        queryParams
      );
  
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchDuplicateRule = async ( baseUrl: string, queryParams: Record<string, string>): Promise<any> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/pricing-engine/api/v1/mov-rules/check-duplicate`,
        queryParams
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
  
  updateRule = async (
    baseAuthUrl: string,
    body: any
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const { id } = body;

      const apiResponse = await this.put(`${baseAuthUrl}/pricing-engine/api/v1/mov-rules/${id}`, {
        ...body
      });
      
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
}
