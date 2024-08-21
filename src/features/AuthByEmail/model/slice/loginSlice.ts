import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../type/LoginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  email: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setEmail, setPassword, setLoading, setError } =
  loginSlice.actions;
export default loginSlice.reducer;
