/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class DashboardServices extends HttpService {
    fetchAllDashboardData = async (baseAuthUrl: string): Promise<IPrepareResponse<AxiosResponse>> => {
       
        try {
          const apiResponse = await this.get(
            `${baseAuthUrl}/api/v1/dashboards`
          );
          return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
        } catch (error) {
          throw prepareErrorResponse(error);
        }
      };
}
