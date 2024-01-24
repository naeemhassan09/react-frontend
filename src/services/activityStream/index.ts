/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';

import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';



export class ActivityStreamsService extends HttpService {

    fetchAllActivities = async (baseAuthUrl: string, start_date: string, end_date: string, token:string): 
    Promise<IPrepareResponse<AxiosResponse>> => {
    console.log('data', start_date, token);

        try {
            const apiResponse = await this.get(`${baseAuthUrl}/api/v1/activity_streams/selected_activity_stream?
            start_date=${start_date}&end_date=${end_date}&Token=${token}`,
              );
              
          console.log('api resp', apiResponse);
          return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
        } catch (error) {
          throw prepareErrorResponse(error);
        }
      };
}