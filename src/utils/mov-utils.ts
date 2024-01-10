/* eslint-disable @typescript-eslint/no-unused-vars */
export const prepareUpdateMovRuleRequestBody = (rule: TObject ) => {
  const {
      businessUnitId,
      businessUnitName,
      createdAt,
      deletedAt,
      locationName,
      products,
      shopTypes,
      updatedAt,
      version,
    ...rest
  } = rule;

  return rest;
};