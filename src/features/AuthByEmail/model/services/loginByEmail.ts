import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginByEmail } from '../../api/loginApi';

interface LoginByEmailProps {
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

export const loginByEmail = createAsyncThunk<
  User,
  LoginByEmailProps,
  ThunkConfig<string>
>('login/loginByEmail', async (authData, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;

  try {
    const response = await dispatch(LoginByEmail(authData)).unwrap();
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
