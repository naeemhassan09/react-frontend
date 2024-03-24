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

    fetchSingleRole = async (baseAuthUrl: string, token: string, payload: string): 
    Promise<IPrepareResponse<AxiosResponse>> => {
        try {
            console.log(payload);
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
}