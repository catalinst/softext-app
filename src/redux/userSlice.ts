import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSlice } from '../meta/interfaces/user';

const initialState: UserSlice = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  authenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.authenticated = true;
    },
    logOut: (state) => {
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.authenticated = false;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
