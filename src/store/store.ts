import { configureStore } from '@reduxjs/toolkit';

import bookDetailsReducer from './features/book-details-slice';
import booksReducer from './features/books-slice';
import categoriesReducer from './features/categories-slice';
import forgotPasswordReducer from './features/forgot-password-slice';
import registrationUserReducer from './features/registration-user-slice';
import userReducer from './features/user-slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    bookDetails: bookDetailsReducer,
    user: userReducer,
    RegistrationUser: registrationUserReducer,
    ForgotPassword: forgotPasswordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
