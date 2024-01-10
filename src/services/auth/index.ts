import Cookies from 'js-cookie';
import { getAuthCookieName } from 'src/utils/auth';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';
import { LocalStorageService } from '../local-storage';

const localStorageService = new LocalStorageService();
//const AUTH_ROLES = [1, 9];

export class AuthService extends HttpService {
  signOut = async (): Promise<any>  => {
    try {
      Cookies.remove(getAuthCookieName(process.env.REACT_APP_ENV));
      localStorageService.clear();
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  signIn = async (
    baseAuthUrl: string,
    data: Record<string, any>
  ): Promise<any> => {
    console.log('Data:' , data);

    try {
      // eslint-disable-next-line max-len
      const apiResponse = await this.post(`${baseAuthUrl}/api/v1/members/signin?saas_account=${window.location.hostname}`,
          {
            ...data
            
          },
        );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  signUp = async (baseUrl: string, data: Record<string, any>): Promise<any>  => {
    try {
      const apiResponse = await this.post(`${baseUrl}/sign-up`, data,
        undefined );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
}
