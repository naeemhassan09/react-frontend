import { createSlice } from '@reduxjs/toolkit';
import { downloadProductData, fetchProductData } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
   downloadData:[]|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
   downloadData:[],
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

      downloadProductsData: (state) => {
        state.downloadData=null;
        },   
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
    state.data=action.payload.products;
   
  });

  builder.addCase(downloadProductData.fulfilled, (__, action) => {
    const csvData = action.payload;
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'products.csv');
    document.body.appendChild(link);
    link.click();
   
  });
},
   
  });
  
  export const { setProductListData, downloadProductsData } = productListEntitySlice.actions;
  
  export const productListEntityReducer = productListEntitySlice.reducer;
  
  