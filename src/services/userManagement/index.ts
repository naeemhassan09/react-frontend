/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class UserManagementService extends HttpService {
  fetchAllUsers = async (baseAuthUrl: string, token: string): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/members', {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  createNewUser = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(baseAuthUrl + `/api/v1/members?saas_account=
      ${window.location.hostname}`, payload, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  deleteUser = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.delete(baseAuthUrl +'/api/v1/members/' +payload.id+'?saas_account=' + 
      window.location.hostname,{
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  updateUser = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    const data=(payload.payload);
    try {
      const apiResponse = await this.put(baseAuthUrl +'/api/v1/members/' +data.id+'?saas_account=' + 
      window.location.hostname,data, {
        headers: {
          Authorization: token
        }
      });
  
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
 
  updatePaswordUser = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(baseAuthUrl +'/api/v1/members/change_password?saas_account=' 
      +window.location.hostname,payload, {
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
