import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResult } from 'api';
import { searchFn } from './thunk';

type State = {
  result: SearchResult | null;
  loading: boolean;
  error?: string | null;
  search: string;
  language: string;
};

const initialState: State = {
  result: null,
  loading: false,
  error: null,
  search: '',
  language: 'js',
};

const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    changeSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    changeLanguage: (state, { payload }: PayloadAction<string>) => {
      state.language = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(searchFn.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(searchFn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchFn.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.result = null;
    });
  },
});

export const { changeSearch, changeLanguage } = searchSlice.actions;

export const { reducer: searchReducer } = searchSlice;
