/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { IForgotPasswordRequest, IForgotPasswordResponse } from '../../types/types';

interface ForgotPasswordState {
  isSendEmail: boolean;
  isLoadingForgotPassword: boolean;
  errorSendEmailMessage: null | string;
}

const initialState: ForgotPasswordState = {
  isSendEmail: false,
  isLoadingForgotPassword: false,
  errorSendEmailMessage: null,
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

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    // clearRegistration(state) {
    //   state.errorRegistrationMessage = null;
    //   state.errorRegistrationStatus = null;
    // },
    // putUser(state, { payload }: PayloadAction<RegistrationFormValues>) {
    //   state.user = payload;
    // },
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
  },
});

// eslint-disable-next-line import/no-default-export
export default forgotPasswordSlice.reducer;

export { fetchSendEmail };
// export const { clearRegistration, putUser } = forgotPasswordSlice.actions;
