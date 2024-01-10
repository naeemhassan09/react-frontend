import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from 'src/store/thunks';

interface ITokenData {
  token: string;
}
interface IInitialState {
  data: ITokenData | null;
}

const INITIAL_STATE: IInitialState = {
  data: null,
};

export const authFeatureSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    resetAppData: (state) => {
      state.data = null;
    },
    setAuthToken: (state, action) => {
      if (!state.data) {
        state.data = {
          token: '',
        };
      }

      state.data.token = action.payload;
    },
    setAuthData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.data = null;
    });
  },
});

export const authFeatureReducer = authFeatureSlice.reducer;
export const { setAuthToken, setAuthData } = authFeatureSlice.actions;
