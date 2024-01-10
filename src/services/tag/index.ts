/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class TagService extends HttpService {
  fetchAllTags = async (
    baseAuthUrl: string,
    queryParams: IFetchTags
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    const {
      page,
      per_page,
      } = queryParams;

    try {
      const apiResponse = await this.get(`${baseAuthUrl}/tag`, {
        page,
        per_page,
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  createTag = async (
    baseAuthUrl: string,
    name: any
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    
    try {
      const apiResponse = await this.post(`${baseAuthUrl}/tag`, {
        name: name
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  updateTag = async (
    baseAuthUrl: string,
    payload: any
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    
    try {
      const { name, id} = payload;
      const apiResponse = await this.put(`${baseAuthUrl}/tag/${id}`, {
        name: name
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
}
