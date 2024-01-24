import { createSlice } from '@reduxjs/toolkit';
import { fetchActivityData } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
  };


  export const ActivityStreamSlice = createSlice({
    // A name, used in action types
    name: 'activityStream',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setActivityData: (state) => {
      state.data=null;
      },   
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchActivityData.fulfilled, (state, action) => {
        console.log(action, state);
   
  });
},
   
  });
  
  export const { setActivityData } = ActivityStreamSlice.actions;
  
  export const activeStreamReducer = ActivityStreamSlice.reducer;
  
  