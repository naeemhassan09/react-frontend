/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
// import { useSelector } from 'react-redux';
// import { getAuthToken } from 'src/store/selectors/features';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';


export class RolePermissionService extends HttpService {
    fetchAllRolePermission = async (baseAuthUrl: string, token: string): Promise<IPrepareResponse<AxiosResponse>> => {
        try {
          const apiResponse = await this.get(
            `${baseAuthUrl}/api/v1/role_permissions/role_permission_list?saas_account=${window.location.hostname}`,
        {headers: {Authorization: token}}
          );
          return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
        } catch (error) {
          throw prepareErrorResponse(error);
        }
      };

    fetchSingleRole = async (baseAuthUrl: string, token: string, payload: TObject): 
    Promise<IPrepareResponse<AxiosResponse>> => {
        try {
          const apiResponse = await this.get(
            `${baseAuthUrl}/api/v1/role_permissions/${payload}
            ?saas_account=${window.location.hostname}`,
        {headers: {Authorization: token}}
          );
          return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
        } catch (error) {
          throw prepareErrorResponse(error);
        }
      };

      createRole = async (baseAuthUrl: string, token: string, payload: TObject): 
      Promise<IPrepareResponse<AxiosResponse>> => {
          try {
            const apiResponse = await this.post(
              `${baseAuthUrl}/api/v1/role_permissions?saas_account=${window.location.hostname}`,payload.payload,
              {headers: {Authorization: token}}
            );
            return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
          } catch (error) {
            throw prepareErrorResponse(error);
          }
        };

    updateRole = async (baseAuthUrl: string, token: string, payload: TObject): 
    Promise<IPrepareResponse<AxiosResponse>> => {
        try {
            const apiResponse = await this.put(
            `${baseAuthUrl}/api/v1/role_permissions/${payload.id}
            /?saas_account=${window.location.hostname}`,payload,
            {headers: {Authorization: token}}
            );
            return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
        } catch (error) {
            throw prepareErrorResponse(error);
        }
        };

  
}