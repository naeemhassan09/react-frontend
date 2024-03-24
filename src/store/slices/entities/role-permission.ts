import { createSlice } from '@reduxjs/toolkit';
import { fetchRoles, fetchSingleRole } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
   singleData: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
   singleData: null,
  };


  export const RolePermissionSlice = createSlice({
    // A name, used in action types
    name: 'roles',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setRolePermissionDat: (state) => {
      state.data=null;
      },  
      setSingleRole : (state)=>{
        state.singleData=null;
      } 

     
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchRoles.fulfilled, (state, action) => {
        state.data=action.payload.role_permissions
        ;
       
   
  });

  builder.addCase(fetchSingleRole.fulfilled, (state, action) => {
    console.log(action);
    state.data=action.payload
    ;
   

});
  
},
   
  });
  
  export const { setRolePermissionDat } = RolePermissionSlice.actions;
  
  export const rolePermissionReducer = RolePermissionSlice.reducer;
  
  