import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// eslint-disable-next-line import/no-default-export
export default userSlice.reducer;
