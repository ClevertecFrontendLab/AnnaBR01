/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { cleverlandAPI } from '../../services/cleverland-api';
import { IRegistrationUsrerRequest, IUsrerResponse, RegistrationFormValues } from '../../types/types';

interface RegistrationUserState {
  isRegistration: boolean;
  isLoadingRegistration: boolean;
  errorRegistrationMessage: null | string;
  errorRegistrationStatus: number | null;
  user: RegistrationFormValues;
}

const initialState: RegistrationUserState = {
  isRegistration: false,
  isLoadingRegistration: false,
  errorRegistrationMessage: null,
  errorRegistrationStatus: null,
  user: {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
};

const fetchRegistrationUser = createAsyncThunk<
  IUsrerResponse,
  IRegistrationUsrerRequest,
  { rejectValue: { message: string; status: number | undefined } }
>('registrationUser/fetchRegistrationUser', async (body, { rejectWithValue }) => {
  try {
    return await cleverlandAPI.registrationUser(body);
  } catch (error) {
    const axiosError = error as AxiosError;

    return rejectWithValue({ message: axiosError.message, status: axiosError.response?.status });
  }
});

const registrationUserSlice = createSlice({
  name: 'registrationUser',
  initialState,
  reducers: {
    clearRegistration(state) {
      state.errorRegistrationMessage = null;
      state.errorRegistrationStatus = null;
    },
    putUser(state, { payload }: PayloadAction<RegistrationFormValues>) {
      state.user = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRegistrationUser.pending, (state) => {
      state.isLoadingRegistration = true;
      state.errorRegistrationMessage = null;
    });
    builder.addCase(fetchRegistrationUser.fulfilled, (state) => {
      state.isLoadingRegistration = false;
      state.isRegistration = true;
      state.errorRegistrationMessage = null;
      state.errorRegistrationStatus = null;
    });
    builder.addCase(fetchRegistrationUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingRegistration = false;
        state.errorRegistrationMessage = payload.message;
        if (payload.status) {
          state.errorRegistrationStatus = payload.status;
        }

        if (payload.status === 400) {
          state.user = {
            email: '',
            username: '',
            password: '',
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
export default registrationUserSlice.reducer;

export { fetchRegistrationUser };
export const { clearRegistration, putUser } = registrationUserSlice.actions;
