/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class VendorsService extends HttpService {
  fetchAllVendors = async (baseAuthUrl: string, token: string): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/vendors', {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  createNewVendor = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(baseAuthUrl + '/api/v1/vendors',payload, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  updateVendor = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.put(baseAuthUrl + '/api/v1/vendors/'+payload.id,payload, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  updateStatusVendor = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    const payloadData=payload.payload;
    try {
      const apiResponse = await this.post(baseAuthUrl + '/api/v1/vendors/change_status',payloadData, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  updatePasswordVendor = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(baseAuthUrl + '/api/v1/vendors/change_password',payload, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  getVendorOrder = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/vendors/vendor_order_detail?id='+payload, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  getVendorAllocateInventory = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/products/view_imported_variants?vendor_id='+payload, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  getVendorAllocateProduct= async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/products/drowdown?vendor_id='+payload, {
        headers: {
          Authorization: token
        }
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  getVendorImportProduct = async (baseAuthUrl: string, token: string, payload: any): 
  Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(baseAuthUrl + '/api/v1/products/view_imported_products?vendor_id='+payload, {
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




//   createNewUser = async (baseAuthUrl: string, token: string, payload: any): 
//   Promise<IPrepareResponse<AxiosResponse>> => {
//     try {
//       const apiResponse = await this.post(baseAuthUrl + '/api/v1/members', payload, {
//         headers: {
//           Authorization: token
//         }
//       });
//       return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
//     } catch (error) {
//       throw prepareErrorResponse(error);
//     }
//   };

//   deleteUser = async (baseAuthUrl: string, token: string, payload: any): 
//   Promise<IPrepareResponse<AxiosResponse>> => {
//     try {
//       const apiResponse = await this.delete(baseAuthUrl +'/api/v1/members/' +payload.id+'?saas_account=' + 
//       window.location.hostname,{
//         headers: {
//           Authorization: token
//         }
//       });
//       return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
//     } catch (error) {
//       throw prepareErrorResponse(error);
//     }
//   };

//   updateUser = async (baseAuthUrl: string, token: string, payload: any): 
//   Promise<IPrepareResponse<AxiosResponse>> => {
//     const data=(payload.payload);
//     try {
//       const apiResponse = await this.put(baseAuthUrl +'/api/v1/members/' +data.id+'?saas_account=' + 
//       window.location.hostname,data, {
//         headers: {
//           Authorization: token
//         }
//       });
  
//       return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
//     } catch (error) {
//       throw prepareErrorResponse(error);
//     }
//   };
 
//   updatePaswordUser = async (baseAuthUrl: string, token: string, payload: any): 
//   Promise<IPrepareResponse<AxiosResponse>> => {
//     try {
//       const apiResponse = await this.post(baseAuthUrl +'/api/v1/members/change_password?saas_account=' 
//       +window.location.hostname,payload, {
//         headers: {
//           Authorization: token
//         }
//       });
  
//       return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
//     } catch (error) {
//       throw prepareErrorResponse(error);
//     }
//   };
// }
