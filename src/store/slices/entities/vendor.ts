import { createSlice } from '@reduxjs/toolkit';
import {  fetchVendorAllocateInventory, 
    fetchVendorAllocateProduct, 
    fetchVendorData, fetchVendorImportProduct, 
    fetchVendorOrderDetails } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
   orderDetails: []|null, 
   allocateInventory: []|null,
   allocateProductsList: []|null,
   allocatedProductsListIds: []|null,
   importViewProducts: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
   orderDetails: null,
   allocateInventory: null,
   importViewProducts:null,
   allocateProductsList: null,
   allocatedProductsListIds: null,

  };


  export const vendorSlice = createSlice({
    // A name, used in action types
    name: 'vendors',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setVendorData: (state) => {
      state.data=null;
      },  
      setVendorOrderDetails: (state)=>{
        state.orderDetails=null;
      },
      setVendorAllocateInventory: (state)=>{
        state.allocateInventory=null;
      },
      setVendorAllocateProduct: (state)=>{
        state.allocateProductsList=null;
        state.allocatedProductsListIds=null;

      },
      setVendorImportProduct: (state)=>{
        state.importViewProducts=null;
      } 

    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchVendorData.fulfilled, (state, action) => {
        state.data=action.payload.vendors;   
  });
  builder.addCase(fetchVendorOrderDetails.fulfilled, (state, action) => {
   state.orderDetails=action.payload.orders;
});

  builder.addCase(fetchVendorAllocateInventory.fulfilled, (state, action) => {
    state.allocateInventory=action.payload.vendor_product_variants;
 });

 builder.addCase(fetchVendorAllocateProduct.fulfilled, (state, action) => {
    state.allocateProductsList=action.payload.products;
    state.allocatedProductsListIds=action.payload.shopify_product_ids;
 });
 builder.addCase(fetchVendorImportProduct.fulfilled, (state, action) => {
    state.importViewProducts=action.payload.products;
 });
},
   
  });
  
  export const { setVendorData , setVendorOrderDetails} = vendorSlice.actions;
  
  export const vendorReducer = vendorSlice.reducer;
  
  