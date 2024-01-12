import { createSlice } from '@reduxjs/toolkit';
import { fetchDashboardData } from 'src/store/thunks';


  
  interface IAppData {
    products?: number,
    vendors: number,
    pending_vendors?: number,
    approved_vendors?: number,
    product_import_list: number,
    product_imported_list: number,
    orders_count: number
    orders:[]
    isVendor: boolean,
  }
  interface IInitialState {
   data: IAppData|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
  };


  export const dashboardEntitySlice = createSlice({
    // A name, used in action types
    name: 'dashboard',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setDashboardData: (state) => {
      state.data=null;
      },


      
      
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchDashboardData.fulfilled, (state, action) => {
    const { is_vendor, dashboard_data,orders } = action.payload;
   console.log('dashboard data in slice',is_vendor, dashboard_data,orders , state);

  });

 
},
   
  });
  
  export const { setDashboardData } = dashboardEntitySlice.actions;
  
  export const dashboardEntityReducer = dashboardEntitySlice.reducer;
  
  