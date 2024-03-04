import { createSlice } from '@reduxjs/toolkit';
import { fetchEmailData } from 'src/store/thunks';


  interface IInitialState {
   data: []|null,
  }
  
  const INITIAL_STATE : IInitialState = {
   data:null,
  };


  export const EmailTemplateSlice = createSlice({
    // A name, used in action types
    name: 'emailTemplate',
    // The initial state for the reducer
    initialState: INITIAL_STATE,
    // An object of 'case reducers'. Key names will be used to generate actions.
    reducers: {
      setEmailData: (state) => {
      state.data=null;
      },   
    },

     // A "builder callback" function used to add more reducers
  extraReducers: (builder) => {
    builder.addCase(fetchEmailData.fulfilled, (state, action) => {
        state.data=action.payload.email_templates;
   
  });
},
   
  });
  
  export const { setEmailData } = EmailTemplateSlice.actions;
  
  export const emailTemplateReducer = EmailTemplateSlice.reducer;
  
  