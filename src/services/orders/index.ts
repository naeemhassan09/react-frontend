/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { getAuthToken } from 'src/store/selectors/features';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';


export class OrderService extends HttpService {
    fetchAllOrders = async (baseAuthUrl: string): Promise<IPrepareResponse<AxiosResponse>> => {
    //    const token=useSelector(getAuthToken);
        try {
          const apiResponse = await this.get(
            `${baseAuthUrl}/api/v1/orders`,
        //    { headers: {Authorization: token}}
          );
          return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
        } catch (error) {
          throw prepareErrorResponse(error);
        }
      };

      fetchVarients = async (baseAuthUrl: string, token: string): Promise<IPrepareResponse<AxiosResponse>> => {
        

            try {
              const apiResponse = await this.get(
                `${baseAuthUrl}/api/v1/orders/product_drowdown?saas_account=${window.location.hostname}`,
               { headers: {
                    Authorization: `${token}`
                  }}
              );
              return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
            } catch (error) {
              throw prepareErrorResponse(error);
            }
          };
}

