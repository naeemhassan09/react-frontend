import { createSlice } from '@reduxjs/toolkit';
import { fetchProductData } from 'src/store/thunks';


  

  interface IInitialState {
   data: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
  };


  export const productListEntitySlice = createSlice({
    // A name, used in action types
    name: 'productList',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setProductListData: (state) => {
      state.data=null;
      },

    
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
    state.data=action.payload.products;
   
  });
},
   
  });
  
  export const { setProductListData } = productListEntitySlice.actions;
  
  export const productListEntityReducer = productListEntitySlice.reducer;
  
  