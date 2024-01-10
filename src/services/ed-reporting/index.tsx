import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class EdReportingService extends HttpService {

  reportCustomerSKU = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/api/v1/report-customer-sku`,
        data
      );
      
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchEdReportingList = async (
    baseAuthUrl: string,
    queryParams: Record<string, string | number>
  ): Promise<any> => {

    try {
      const apiResponse = await this.get(`${baseAuthUrl}/api/v1/report-customer-sku`, queryParams);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

}
