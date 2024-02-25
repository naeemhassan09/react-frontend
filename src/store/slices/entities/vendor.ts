import { createSlice } from '@reduxjs/toolkit';
import {  fetchVendorData, fetchVendorOrderDetails } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
   orderDetails: []|null, 
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
   orderDetails: null,
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
},
   
  });
  
  export const { setVendorData , setVendorOrderDetails} = vendorSlice.actions;
  
  export const vendorReducer = vendorSlice.reducer;
  
  