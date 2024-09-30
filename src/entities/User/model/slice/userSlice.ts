import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
  _inited: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.authData = action.payload;
        state._inited = true;
      },
    );

    builder.addCase(initAuthData.rejected, (state) => {
      state.authData = undefined;
      state._inited = true;
    });
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
