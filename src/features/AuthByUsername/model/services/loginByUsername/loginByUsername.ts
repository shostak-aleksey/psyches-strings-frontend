import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
  authData: any;
}
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  JSON.stringify(authData);
  try {
    const response = await extra.api.post<User>('/user/login', authData);
    console.log(extra, extra.api, response.data);
    if (!response.data) {
      throw new Error();
    }
    console.log('e', extra, 'a', extra.api, 'r', authData);
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log('e e', extra, 'a a', extra.api, 'r r', authData, e);
    return rejectWithValue('error');
  }
});
