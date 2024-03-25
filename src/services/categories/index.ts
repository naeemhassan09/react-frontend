/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class CategoryService extends HttpService {

  fetchCategories = async (
    baseUrl: string,
    queryParams: TObject
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/reporting-categories`,
        queryParams
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  createBrandProductAssociation = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/brand-category-product-junction/link-product?saas_account=${window.location.hostname}`,
        data
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  unlinkBrandProductAssociation = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/brand-category-product-junction/unlink-product?saas_account=${window.location.hostname}`,
        data
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchBrandCategoryAssociationsBySku = async (
    baseUrl: string,
    queryParams: TObject
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/brand-category-product-junction/get-categories-and-brands?saas_account=${window.location.hostname}`,
        queryParams
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchCategoryTypes = async (
    baseUrl: string,
    queryParams: TObject
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/reporting-category-types?saas_account=${window.location.hostname}`,
        queryParams
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
}
