import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './features/books-slice';
import categoriesReducer from './features/categories-slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
