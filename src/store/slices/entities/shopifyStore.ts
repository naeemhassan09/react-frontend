import { createSlice } from '@reduxjs/toolkit';
import { fetchShopifyData } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
  };


  export const ShopifyStoreSlice = createSlice({
    // A name, used in action types
    name: 'shopifyStore',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setStoreData: (state) => {
      state.data=null;
      },   

     
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchShopifyData.fulfilled, (state, action) => {
        console.log(state, action);
        state.data=action.payload;
   
  });
},
   
  });
  
  export const { setStoreData } = ShopifyStoreSlice.actions;
  
  export const shopifyStoreReducer = ShopifyStoreSlice.reducer;
  
  