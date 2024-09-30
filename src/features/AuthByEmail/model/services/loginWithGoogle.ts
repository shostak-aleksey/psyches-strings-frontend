import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithGoogleApi } from '../../api/loginApi';
import { storeTokens } from '@/shared/utils/tokenStorage';
import { AuthResponse } from '../../api/loginApi';

interface LoginWithGoogleProps {
  tokenId: string;
}

export const loginWithGoogle = createAsyncThunk<
  AuthResponse,
  LoginWithGoogleProps,
  ThunkConfig<string>
>('login/loginWithGoogle', async (authData, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;

  try {
    const result = await dispatch(
      loginWithGoogleApi.initiate(authData),
    ).unwrap();
    const { accessToken, refreshToken, user } = result;
    storeTokens(accessToken, refreshToken);
    return result;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
