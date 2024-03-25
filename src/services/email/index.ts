/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class EmailService extends HttpService {
  fetchAllEmailTemplate = async (baseAuthUrl: string, token: string): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/email_templates', {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  createEmailTemplate = async (baseAuthUrl: string, token: string, payload: TObject): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(baseAuthUrl + `/api/v1/email_templates?saas_account=
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

  updateEmailTemplate = async (baseAuthUrl: string, token: string, payload: TObject): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.put(baseAuthUrl + '/api/v1/email_templates/'+payload.id+
      `?saas_account=${window.location.hostname}`, payload, {
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