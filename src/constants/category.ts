export const SUPER_CATEGORY_TYPE_SLUG='super-category';
export const MASTER_CATEGORY_TYPE_SLUG='master-category';
export const COMMERCIAL_CATEGORY_TYPE_SLUG='category';
export const COMMERCIAL_SUB_CATEGORY_TYPE_SLUG='sub-category';

export enum CATEGORY_TOOLTIPS {
    COMMERCIAL_CATEGORY =`Reporting category a product/sku belongs to e.g.
    Category - beverages
    Sub category - soft drinks`,
    COMMERCIAL_SUB_CATEGORY = `Reporting sub category a product/sku belongs to e.g.
    Category - beverages
    Sub category - soft drinks`,
    MASTER_CATEGORY ='Product/sku category in master catalog',
    SUPER_CATEGORY ='Categorization of a product as food or non-food',
    CORPORATE_BRAND = `Reporting brand a product/sku belongs to e.g.
    Corporate brand - nestle
    Sub brand - nescafe`,
    BRAND=`Reporting brand a product/sku belongs to e.g
    Corporate brand - nestle`
}

export const CATEGORY_LABELS: TObject = {
    commercialCategory : 'Commercial Category',
    commercialSubCategory : 'Commercial Sub Category',
    masterCategory : 'Master Category',
    superCateggory : 'Super Category',
    corporateBrand : 'Corporate Brand',
    brand : 'Sub Brand'
};

export const CATEGORY_TOOLTIP: TObject = {
    commercialCategory : `Reporting category a product/sku belongs to e.g.
    Category - beverages
    Sub category - soft drinks`,
    commercialSubCategory : `Reporting sub category a product/sku belongs to e.g.
    Category - beverages
    Sub category - soft drinks`,
    masterCategory : 'Product/sku category in master catalog',
    superCateggory : 'Categorization of a product as food or non-food',
    corporateBrand : `Reporting brand a product/sku belongs to e.g.
    Corporate brand - nestle
    Sub brand - nescafe`,
    brand : `Reporting brand a product/sku belongs to e.g
    Corporate brand - nestle`
};