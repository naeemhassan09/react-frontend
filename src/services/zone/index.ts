import { AxiosResponse } from 'axios';
import { getAllZones } from 'src/store/mock';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class ZoneService extends HttpService {
  fetchAllZones = async (
    baseAuthUrl: string,
    queryParams: Record<string, string | number>
  ): Promise<IPrepareResponse<AxiosResponse>> => {

    try {
      const apiResponse = await this.get(`${baseAuthUrl}/config/zone`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchAllZonesMock = async (
    baseAuthUrl: string,
    queryParams: Record<string, string | number>
  ): Promise<IPrepareResponse<AxiosResponse>> => {

    try {
      const apiResponse = getAllZones({ baseAuthUrl, queryParams });   
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  createZone = async (
    baseAuthUrl: string,
    data: Record<string, string | number>
  ): Promise<IPrepareResponse<AxiosResponse>> => {

    try {
      const apiResponse = await this.post(`${baseAuthUrl}/config/zone`, data);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  updateZone = async (
    baseAuthUrl: string,
    data: Record<string, string | number>,
    id: string
  ): Promise<IPrepareResponse<AxiosResponse>> => {

    try {
      const apiResponse = await this.put(`${baseAuthUrl}/config/zone/${id}`, data);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchZoneNames = async ( baseUrl: string, queryParams: Record<string, string>): Promise<any> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/config/zone/check-name`,
        queryParams
      );
  
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
}
