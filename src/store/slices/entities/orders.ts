import { createSlice } from '@reduxjs/toolkit';
import { fetchOrderData } from 'src/store/thunks';
import { fetchProductVarient } from 'src/store/thunks';


  

  interface IInitialState {
   data: []|null,
   productVarient:[],
  }
  
  const INITIAL_STATE : IInitialState = {
    data:null,
    productVarient:[],
  };


  export const OrderEntitySlice = createSlice({
    // A name, used in action types
    name: 'orderList',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setOrderData: (state) => {
      state.data=null;
      },

      setProductVairnet: ((state)=>{
        state.productVarient=[];
      })

    
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchOrderData.fulfilled, (state, action) => {
    state.data=action.payload.orders;
   
  });
  builder.addCase(fetchProductVarient.fulfilled, (state, action) => {
    state.productVarient=action.payload;
    
   });

  
},
   
  });
  
  export const { setOrderData } = OrderEntitySlice.actions;
  
  export const orderEntityReducer = OrderEntitySlice.reducer;
  
  