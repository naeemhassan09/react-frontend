import { createSlice } from '@reduxjs/toolkit';
import {  fetchVendorData } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
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
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchVendorData.fulfilled, (state, action) => {
        state.data=action.payload.vendors;   
  });
},
   
  });
  
  export const { setVendorData } = vendorSlice.actions;
  
  export const vendorReducer = vendorSlice.reducer;
  
  