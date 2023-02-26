/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { IBook, Rating } from '../../types/types';
import { filterRating } from '../../utils/filter-rating';
import { getCountCategories } from '../../utils/get-count-categories';

interface BooksState {
  books: IBook[];
  isLoadingBooks: boolean;
  errorBooks: null | string;
  ratingType: Rating;
  displayedBooks: IBook[];
  countCategories: { [key: string]: number };
}

const initialState: BooksState = {
  books: [],
  isLoadingBooks: false,
  errorBooks: null,
  ratingType: 'down',
  displayedBooks: [],
  countCategories: {},
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
  reducers: {
    changeRatingType(state) {
      state.ratingType === 'down' ? (state.ratingType = 'up') : (state.ratingType = 'down');
    },

    changeDisplayedBooksByRating(state) {
      state.displayedBooks = filterRating(state.displayedBooks, state.ratingType);
    },

    changeDisplayedBooks(state) {
      state.displayedBooks = filterRating(state.books, state.ratingType);
    },

    changeDisplayedBooksByCategory(state, { payload }: PayloadAction<string>) {
      const booksArray = state.books.filter((book) => book.categories?.includes(payload));

      state.displayedBooks = filterRating(booksArray, state.ratingType);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoadingBooks = true;
      state.errorBooks = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoadingBooks = false;
      state.books = payload;
      state.displayedBooks = filterRating(payload, state.ratingType);
      state.countCategories = getCountCategories(payload);
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
export const { changeRatingType, changeDisplayedBooksByRating, changeDisplayedBooksByCategory, changeDisplayedBooks } =
  booksSlice.actions;
