import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '@/entities/User/model/slice/userSlice';

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
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post<User>('/login', authData);

    if (!response.data) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
