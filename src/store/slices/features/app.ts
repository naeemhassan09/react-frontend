import { createSlice } from '@reduxjs/toolkit';
import { uploadFileToS3 } from 'src/store/thunks';

interface IAppFeature {
  baseUrl: string,
  categoryServiceUrl: string
  selectedCompanyId: string,
  selectedBusinessUnitId: string,
  selectedLocationId: string,
  searchValue: string,
  selectedDataToEdit?: TObject,
  chunkSize: number,
  validationStates: {
    isLoading: boolean,
    error: null,
    isFileUploaded: boolean
  },
}

const INITIAL_STATE: IAppFeature = {
  baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
  categoryServiceUrl: process.env.REACT_APP_CATEGORY_SERVICE_URL || '',
  chunkSize: Number(process.env.REACT_APP_CHUNK_SIZE) || 200,
  selectedCompanyId: '',
  selectedBusinessUnitId: '',
  selectedLocationId: '',
  searchValue: '',
  validationStates: {
    isLoading: false,
    error: null,
    isFileUploaded: false
  },
};

export const appFeatureSlice = createSlice({
  // A name, used in action types
  name: 'app',
  // The initial state for the reducer
  initialState: INITIAL_STATE,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    toggleLoading: (state) => {
      state.validationStates.isLoading = true;
    },
    updateSelectedCompanyId: (state, action) => {
      state.selectedCompanyId = action.payload;
    },
    updateSelectedBusinessUnitId: (state, action) => {
      state.selectedBusinessUnitId = action.payload;
    },
    updateSelectedLocationId: (state, action) => {
      state.selectedLocationId = action.payload;
    },
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSelectedDataToEdit: (state,action) => {
      state.selectedDataToEdit = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(uploadFileToS3.fulfilled, (state) => {
      state.validationStates.isFileUploaded = true;
    });
  }
});

export const {
  toggleLoading,
  updateSelectedCompanyId,
  updateSelectedBusinessUnitId,
  updateSelectedLocationId,
  updateSearchValue,
  setSelectedDataToEdit
} = appFeatureSlice.actions;
export const appFeatureReducer = appFeatureSlice.reducer;
