/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class ActivityStreamsService extends HttpService {
  fetchAllActivities = async (baseAuthUrl: string, queryParams: TObject, token: string): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/activity_streams/selected_activity_stream?start_date=' 
      + queryParams.startDate + '&end_date=' + queryParams.endDate, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  dowbloadData  = async (baseAuthUrl: string, token: string,queryParams: TObject): 
  Promise<IPrepareResponse<AxiosResponse>> => {
        try {
          const apiResponse = await this.get(
            `${baseAuthUrl}/web_api/v2/activity_streams/download_selected_activity_stream?start_date=` + 
            queryParams.startDate + '&end_date=' + queryParams.endDate, {
          headers: {Authorization: token}}
          );
          return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
        } catch (error) {
          throw prepareErrorResponse(error);
        }
      };
}
