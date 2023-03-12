/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import {
  IForgotPasswordRequest,
  IForgotPasswordResponse,
  IResetPasswordRequest,
  IResetPasswordResponse,
} from '../../types/types';

interface ForgotPasswordState {
  isSendEmail: boolean;
  isResetPassword: boolean;
  isLoadingForgotPassword: boolean;
  errorSendEmailMessage: null | string;
  errorResetPasswordMessage: null | string;
  dataRequestReset: IResetPasswordRequest;
}

const initialState: ForgotPasswordState = {
  isSendEmail: false,
  isResetPassword: false,
  isLoadingForgotPassword: false,
  errorSendEmailMessage: null,
  errorResetPasswordMessage: null,
  dataRequestReset: {
    password: '',
    passwordConfirmation: '',
    code: '',
  },
};

const fetchSendEmail = createAsyncThunk<IForgotPasswordResponse, IForgotPasswordRequest, { rejectValue: string }>(
  'forgotPassword/fetchSendEmail',
  async (body, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.forgotPassword(body);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const fetchResetPassword = createAsyncThunk<IResetPasswordResponse, IResetPasswordRequest, { rejectValue: string }>(
  'forgotPassword/fetchResetPassword',
  async (body, { rejectWithValue }) => {
    try {
      return await cleverlandAPI.resetPassword(body);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    putDataRequestReset(state, { payload }: PayloadAction<IResetPasswordRequest>) {
      state.dataRequestReset = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSendEmail.pending, (state) => {
      state.isLoadingForgotPassword = true;
      state.errorSendEmailMessage = null;
    });
    builder.addCase(fetchSendEmail.fulfilled, (state) => {
      state.isLoadingForgotPassword = false;
      state.isSendEmail = true;
      state.errorSendEmailMessage = null;
    });
    builder.addCase(fetchSendEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingForgotPassword = false;
        state.errorSendEmailMessage = payload;
      }
    });

    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isLoadingForgotPassword = true;
      state.errorResetPasswordMessage = null;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state) => {
      state.isLoadingForgotPassword = false;
      state.isResetPassword = true;
      state.errorResetPasswordMessage = null;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingForgotPassword = false;
        state.errorResetPasswordMessage = payload;
      }
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default forgotPasswordSlice.reducer;

export { fetchSendEmail, fetchResetPassword };
export const { putDataRequestReset } = forgotPasswordSlice.actions;
