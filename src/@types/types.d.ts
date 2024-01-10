/**
 * Defined some of the common types
 */
type ReactNode = import('react').ReactNode
type ReactChild = import('react').ReactChild
type ReactChildren = import('react').ReactChildren
type Component = import('react').Component
type TFunction = () => void
type TObject = Record<string, number, string, undefined, boolean, TFunction>
type TArrayOfObjects = Array<string, TObject>
type TNumberOrString = number | string
type TFunctionOrObject = TFunction | TObject

/**
 * Redux Store types
 */
type TDispatch = import('../store/index').AppDispatch
type TReduxState = import('../store/index').ReduxState

/**
 * Defined an interfce example
 */
interface ILoginDataProps {
  email: string,
  password: string,
}

interface IHttpRequestOptions {
  headers?: Record<string, string>;
  queryParams?: Record<string, string>;
}

interface IActionOptions {
  dispatch?: TDispatch;
  state: TReduxState;
}

interface IActionButton {
  dataCy?: string;
  onClick: TFunction;
  text?: string;
}

interface IBarcode {
  barcode?: string;
  name?: string;
  sku?: string
}

interface IPrepareResponse<T> {
  data: any;
  error: boolean;
  statusCode: number;
  statusText: string;
  statusMessage?: T;
}

interface ITag {
  created_at?: string
  deleted_at?: string
  id?: number
  name?: string
  status?: boolean
  updated_at?: string
}

interface IProduct {
  active_categories?: any[];
  barcode?: string;
  brand?: string;
  catalogue_product_id?: number
  consent_required?: number
  cost_price: number
  created_at?: string
  created_by?: number
  deleted_at?: number
  deleted_by?: number
  delivery_time?: string
  description?: string
  disabled?: number
  height?: string
  id?: number;
  image_url?: string
  is_deactivated?: boolean
  is_volume_based_price_enabled?: number
  length?: string
  location_id?: number
  mrp: number
  multilingual?: any
  name?: string
  physical_stock: number
  price: number;
  priority?: number
  published?: number
  quantity_limit?: number
  reason?: string
  size?: string
  sku?: string
  stock_quantity?: number
  tax_category?: number
  tax_group?: string
  tax_inclusive?: number
  tax_percent?: number
  trade_price?: number
  unit?: string
  updated_at?: string
  updated_by?: number
  urdu_brand?: string
  urdu_name?: string
  urdu_size?: string
  urdu_unit?: string
  volume_based_prices?: any[]
  weight?: string
  width?: string
  [key: string]: any;
}

type TProduct = {
  id: number;
  name: string;
  sku: string;
  image_url?: string ;
  description: string;
  location_id: number;
  price: number;
  cost_price: number;
  mrp: number;
  stock_quantity: number;
  size: string;
  unit: string;
  brand: string;
  urdu_name: string;
  urdu_unit: string;
  urdu_size: string;
  urdu_brand: string;
  disabled: number | boolean;
  deleted_by?: number;
  updated_by?: number;
  barcode: string;
  consent_required: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  tax_percent: number;
  tax_inclusive: number | boolean;
  catalogue_product_id: number
  published: 0,
  priority: number
  weight: number;
  height: number;
  length: number;
  width: number;
  tax_category: number;
  trade_price: number;
  delivery_time: number;
  quantity_limit: number;
  is_volume_based_price_enabled: boolean | number;
  physical_stock: boolean | number;
  created_by: number;
  tax_group: number;
  is_dynamic_price_enabled: boolean | number;
  active_categories: Array<TObject>;
  multilingual: Array<TObject>;
  volume_based_prices: Array<TObject>;
  is_deactivated: boolean;
  reason: string;
  [key: string]: TObject;
}


interface IFetchProducts {
  page?: number;
  per_page?: number;
  company_id?: string;
  business_unit_id?: string;
  isAdmin?: number;
  search?: any;
  location_id?: string,
  disabled?: string,
  category_id?: string,
  sortOrder?: string,
  sortBy?: string,
  pricingTypes?: string,
  searchOnAttributes?: string
}

interface IFetchProductsQueryParams extends IFetchProducts {
  selectedbusinessUnitId?: string,
  selectedlocationId?: string,
}

interface IFetchProductsApiData extends IFetchProducts {
  businessUnitId?: string,
  locationId?: string,
}

type IFetchTags = IFetchProducts

interface ITagInput {
  options?: TArrayOfObjects;
  onClick: (a: any) => void;
  result?: TArrayOfObjects;
  testId?: string;
}

interface ISubCategory {
  created_at: string,
  updated_at: string,
  deleted_at?: string | null,
  id: number,
  name: string,
  image_url?: string | null,
  priority: number,
  start_date: string | null,
  end_date: string | null,
  disabled_at?: string | null,
  disabled_by?: number | null,
  location_id: number,
  type: number,
  parent: number | null,
  maxProductPriority: number,
  multilingual: any[]
}
interface ICategory {
  sub_categories?: ISubCategory[],
  multilingual: any[],
  created_at: string,
  updated_at: string,
  deleted_at?: string | null,
  id: number,
  name: string,
  image_url?: string | null,
  priority: number,
  start_date?: string | null,
  end_date?: string | null,
  disabled_at?: string | null,
  disabled_by?: number | null,
  location_id: number,
  type: number,
  parent?: number | null,
  maxProductPriority?: number
}

interface PaginateProps {
  page: number;
  count: number;
  pageSize: number;
  margin?: number;
  onPageChange: (page: number) => any;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'ghost' | 'outline' | 'link';
  selectedVariant?: 'solid' | 'ghost' | 'outline' | 'link';
  previousIcon?: React.ReactElement;
  nextIcon?: React.ReactElement;
  colorScheme?: string;
  fontWeight?:
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  borderRadius?:
    | 'none'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full';
}

interface ProductOnboardingProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  onSave: (file: TObject) => void;
}

interface ProductOnboardingItemProps {
  id: number;
  type: string;
  title: string;
  onFileClick: (file: File | null, id: number) => void;
  onButtonClick: () => void;
  onFileRemove: () => void;
  selectedFile: any;
  templateUrl?: string;
  testID?: string;
}

interface ISelectProps {
  options: any,
  onChange?: (a: any) => void;
  value?: string;
  placeholder?: string;
  variant?: string;
  disabled?: boolean;
  testId?: string;
}

type IFetchZones = IFetchProducts;

type TZoneCreationFormData = {
  locationId: number | undefined;
  name: string;
  businessUnitId: number;
};

type DataTableProps<Data extends object> = {
  data: TObject[];
  columns: ColumnDef<Data, TObject>[];
  renderSubComponent?: (props: { row: Row<Data> }) => React.ReactElement;
  getRowCanExpand: (row: Row<Data>) => boolean;
  getRowSelected?: (row: Row<Data>) => boolean;
  onRowSelectionChange?: (row: Row<Data>) => boolean;
  pageCount?: TObject;
  page?: TObject;
  pageSize?: TObject;
  handlePageChange?: TObject;
  testId?: string;
  getRowId?: any;
  mode?: string;
};