/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { IBook } from '../../types/types';

interface BooksState {
  books: IBook[];
  isLoadingBooks: boolean;
  errorBooks: null | string;
}

const initialState: BooksState = {
  books: [],
  isLoadingBooks: false,
  errorBooks: null,
};

const fetchBooks = createAsyncThunk<IBook[], undefined, { rejectValue: string }>(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.getBooks();
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoadingBooks = true;
      state.errorBooks = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoadingBooks = false;
      state.books = payload;
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingBooks = false;
        state.errorBooks = payload;
      }
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default booksSlice.reducer;

export { fetchBooks };
