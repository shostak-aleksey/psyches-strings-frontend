import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { rtkApi } from '@/shared/api/rtkApi';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      rtkApi.endpoints.initAuthData.matchFulfilled,
      (state, { payload }) => {
        state.authData = payload;
        state._inited = true;
      },
    );
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
