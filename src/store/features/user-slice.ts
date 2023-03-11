/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { AuthFormValues, IAuthUsrerRequest, IUsrer, IUsrerResponse } from '../../types/types';

interface UserState {
  isAuth: boolean;
  isLoadingAuthUser: boolean;
  errorAuthMessage: null | string;
  errorAuthStatus: number | null;
  user: IUsrer;
  userRequest: AuthFormValues;
}

const initialState: UserState = {
  isAuth: false,
  isLoadingAuthUser: false,
  errorAuthMessage: null,
  errorAuthStatus: null,
  user: {
    id: null,
    username: '',
    email: '',
    provider: '',
    confirmed: false,
    blocked: false,
    createdAt: '',
    updatedAt: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  userRequest: { identifier: '', password: '' },
};

const fetchAuthUser = createAsyncThunk<
  IUsrerResponse,
  IAuthUsrerRequest,
  { rejectValue: { message: string; status: number | undefined } }
>('user/fetchAuthUser', async (body, { rejectWithValue }) => {
  try {
    return await cleverlandAPI.authUser(body);
  } catch (error) {
    const axiosError = error as AxiosError;

    return rejectWithValue({ message: axiosError.message, status: axiosError.response?.status });
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearAuth(state) {
      state.errorAuthMessage = null;
      state.errorAuthStatus = null;
    },

    putUser(state, { payload }: PayloadAction<AuthFormValues>) {
      state.userRequest = payload;
    },
    logout(state) {
      state.isAuth = false;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAuthUser.pending, (state) => {
      state.isLoadingAuthUser = true;
      state.errorAuthMessage = null;
    });
    builder.addCase(fetchAuthUser.fulfilled, (state, { payload }) => {
      state.isLoadingAuthUser = false;
      state.isAuth = true;
      state.errorAuthMessage = null;
      state.errorAuthStatus = null;
      state.user = payload.user;
      localStorage.setItem('token', payload.jwt);
    });
    builder.addCase(fetchAuthUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingAuthUser = false;
        state.errorAuthMessage = payload.message;
        if (payload.status) {
          state.errorAuthStatus = payload.status;
        }

        if (payload.status === 400) {
          state.user = {
            id: null,
            username: '',
            email: '',
            provider: '',
            confirmed: false,
            blocked: false,
            createdAt: '',
            updatedAt: '',
            firstName: '',
            lastName: '',
            phone: '',
          };
        }
      }
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default userSlice.reducer;
export { fetchAuthUser };
export const { clearAuth, putUser, logout } = userSlice.actions;
