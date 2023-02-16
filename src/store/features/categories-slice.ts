/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { ICategory } from '../../types/types';

interface CategoriesState {
  categories: ICategory[];
  isLoadingCategories: boolean;
  errorCategories: null | string;
}

const initialState: CategoriesState = {
  categories: [],
  isLoadingCategories: false,
  errorCategories: null,
};

const fetchCategories = createAsyncThunk<ICategory[], undefined, { rejectValue: string }>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.getCategories();
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoadingCategories = true;
      state.errorCategories = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.isLoadingCategories = false;
      state.categories = payload;
    });
    builder.addCase(fetchCategories.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingCategories = false;
        state.errorCategories = payload;
      }
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default categoriesSlice.reducer;

export { fetchCategories };
