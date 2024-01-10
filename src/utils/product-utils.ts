import { SAUDI_LOCATIONS } from 'src/constants/product';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const validateSKU = (sku: string) => sku && /\s/.test(sku);

export const validateVBP = (product: any) => {
  let msg = '';

  if (product.volume_based_prices.length < 2) {
    msg = 'Please add a minimum of two pricing segments in VBP';
    return msg;
  }

  for (let i = 0; i < product.volume_based_prices.length; i++) {
    let firstSlab = false;
    let lastSlab = false;
    if (i === 0) firstSlab = true;
    if (i === product.volume_based_prices.length - 1) lastSlab = true;

    if (!product.volume_based_prices[i].price) {
      msg = `Required field 'Price' is missing in segment ${i + 1} of VBP`;
      break;
    }

    if (!product.volume_based_prices[i].quantityFrom) {
      msg = `Required field 'Quantity From' missing in segment ${i + 1} of VBP`;
      break;
    }

    if (!product.volume_based_prices[i].quantityTo && !lastSlab) {
      msg = `Required field 'Quantity To' missing in segment ${i + 1} of VBP`;
      break;
    }

    if (product.volume_based_prices[i].quantityTo && lastSlab) {
      msg = 'The \'Quantity To\' of last segment of VBP should be empty';
      break;
    }

    if (firstSlab) {
      if (product.volume_based_prices[i].price !== product.price) {
        msg =
          'The \'Price\' of first segment of VBP should be equal to the price of product';
        break;
      }

      if (product.volume_based_prices[i].quantityFrom !== 1) {
        msg = 'The \'Quantity From\' of first segment of VBP should be 1';
        break;
      }
    } else {
      if (
        product.volume_based_prices[i].quantityFrom >=
          product.volume_based_prices[i].quantityTo &&
        !lastSlab
      ) {
        msg = `The 'Quantity To' should be greater than 'Quantity From' in segment ${
          i + 1
        } of VBP`;
        break;
      }

      if (
        product.volume_based_prices[i - 1].quantityTo !==
        product.volume_based_prices[i].quantityFrom - 1
      ) {
        // eslint-disable-next-line max-len
        msg = `The difference between 'Quantity To' of segment ${i} and 'Quantity From' of segment ${
          i + 1
        } should be 1 in VBP`;
        break;
      }

      if (
        product.volume_based_prices[i - 1].price <=
        product.volume_based_prices[i].price
      ) {
        msg = `The 'Price' of segment ${
          i + 1
        } should be less than 'Price' of segment ${i} in VBP`;
        break;
      }
    }
  }

  return msg;
};

export const prepareUpdateProductRequestBody = (product: TObject, userId: number | string) => {
  const {
    sku,
    stock_quantity,
    physical_stock,
    urdu_name,
    urdu_unit,
    urdu_size,
    urdu_brand,
    deleted_by,
    updated_by,
    created_at,
    updated_at,
    deleted_at,
    created_by,
    is_dynamic_price_enabled,
    vbp_errors,
    ...rest
  } = product;

  if (rest.reason === null) rest.reason = '';
  rest.updated_by = userId;

  return rest;
};

export const checkSaudiLocations = (value: any) => {
  if (value) {
    const isValuePresent = SAUDI_LOCATIONS.LOCATION_IDS?.includes(value);
    return isValuePresent;
  } else {
    return false;
  }
};
