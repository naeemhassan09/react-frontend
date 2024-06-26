import { createSlice } from '@reduxjs/toolkit';
import {  fetchUserData } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
  };


  export const UserManagementSlice = createSlice({
    // A name, used in action types
    name: 'userManagement',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setUserData: (state) => {
      state.data=null;
      },   
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
        state.data=action.payload.users;   
  });
},
   
  });
  
  export const { setUserData } = UserManagementSlice.actions;
  
  export const userManagementReducer = UserManagementSlice.reducer;
  
  