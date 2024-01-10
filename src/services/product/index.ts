/* eslint-disable padding-line-between-statements */
import { AxiosResponse } from 'axios';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class ProductService extends HttpService {
  fetchAllProducts = async (
    baseAuthUrl: string,
    queryParams: IFetchProductsQueryParams
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    const {
      page,
      per_page,
      search,
      company_id,
      disabled,
      category_id,
      selectedbusinessUnitId: business_unit_id,
      selectedlocationId: location_id,
      sortOrder,
      sortBy,
      pricingTypes,
      searchOnAttributes
    } = queryParams;
    const apiData: IFetchProductsApiData = { page, per_page };
    if (search) {
      apiData.search = search;
    }
    if (company_id) {
      apiData.company_id = company_id;
    }
    if (business_unit_id) {
      apiData.business_unit_id = business_unit_id;
    }
    if (location_id) {
      apiData.location_id = location_id;
    }
    if (disabled) {
      apiData.disabled = disabled;
    }
    if (category_id) {
      apiData.category_id = category_id;
    }
    if (sortOrder) {
      apiData.sortOrder = sortOrder;
    }
    if (sortBy) {
      apiData.sortBy = sortBy;
    }
    if (pricingTypes) {
      apiData.pricingTypes = pricingTypes;
    }
    if (searchOnAttributes) {
      apiData.searchOnAttributes = searchOnAttributes;
    }
    try {
      const apiResponse = await this.get(`${baseAuthUrl}/product/getAllProducts`, {
        ...apiData,
        isAdmin: 1
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchAllCategories = async (
    baseAuthUrl: string,
    business_unit_id: string,
    location_id: string,
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseAuthUrl}/categories/getAllAdminCategories`,
        {
          business_unit_id,
          location_id,
          avoidPagination: 1,
          isAdmin: 1
        }
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  createProduct = async (
    baseAuthUrl: string,
    body: any
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.post(`${baseAuthUrl}/product/createProduct`, {
        ...body
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  bulkUploadProducts = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/product/onBoardProducts`,
        data
      );
      
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  bulkUploadProductsTaxGroups = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/product/bulkUploadProductsTaxGroups`,
        data
      );
      
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  updateProduct = async (
    baseAuthUrl: string,
    body: any
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const { location_id } = body;
      const apiResponse = await this.post(`${baseAuthUrl}/product/updateProduct?location_id=${location_id}`, {
        ...body
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  bulkUpdateLocationPricesAndStock = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/product/updateMultipleLocationPrices`,
        data
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  bulkUpdateProducts = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/product/updateProducts`,
        data
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  bulkUpdateProductLanguage = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.put(
        `${baseUrl}/api/v1/product/multilingual`,
        data
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  bulkUpdateProductDisplayPriority = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/product/bulkUpdateProductPriorities`,
        data
      );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
  
  fetchSkuReasons = async (
    baseAuthUrl: string,
    type: string,
    
  ): Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(
        `${baseAuthUrl}/api/v1/sku-deactivation-reason?type=${type}`
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };

  fetchTaxGroups = async (
    baseAuthUrl: string,
    queryParams?: object,
    ) : Promise<IPrepareResponse<AxiosResponse>> => {
    try {
      const apiResponse = await this.get(`${baseAuthUrl}/taxation/api/v1/tax-groups`, queryParams );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error : TObject) {
      throw prepareErrorResponse(error);
    }
  };


  updateTaxGroups = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/taxation/api/v1/product-tax-groups`,
        data
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchProductTaxGroup = async (baseUrl: string, id: string): Promise<any> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/taxation/api/v1/tax-groups/` + id
      );
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchSelectedProductTaxGroup = async (baseUrl: string, id: any): Promise<any> => {
    try {
      const apiResponse = await this.get(`${baseUrl}/taxation/api/v1/product-tax-groups/${id}`);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  searchTag = async ( baseUrl: string, queryParams: Record<string, string>): Promise<any> => {
    try {
      const apiResponse = await this.get(
        `${baseUrl}/tag/search`,
        queryParams
      );
  
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  fetchProductsByIds = async (baseUrl: string, queryParams: any): Promise<any> => {
    try {
      const { id, select } = queryParams;

      const apiResponse = await this.get(`${baseUrl}/api/v1/product/portal`, { 
        id: id,
        select
      });
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };

  bulkCategoryBrandsLink = async (baseUrl: string, data: TObject): Promise<any> => {
    try {
      const apiResponse = await this.post(
        `${baseUrl}/brand-category-product-junction/bulk-map-products`,
        data
      );
      
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      return prepareErrorResponse(error);
    }
  };
}
