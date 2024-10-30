// import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useLoginWithEmailMutation } from '../../api/loginApi';
// import { storeTokens } from '@/shared/utils/tokenStorage';
// import { AuthResponse } from '../../api/loginApi';

// interface LoginByEmailProps {
//   email: string;
//   password: string;
//   role: 'USER' | 'ADMIN';
// }

// export const loginByEmail = createAsyncThunk<
//   AuthResponse,
//   LoginByEmailProps,
//   ThunkConfig<string>
// >('login/loginByEmail', async (authData, thunkApi) => {
//   const { dispatch, rejectWithValue } = thunkApi;
//   const [loginByEmail] = useLoginWithEmailMutation();

//   try {
//     const result = await loginByEmail(authData).unwrap();
//     const { accessToken, refreshToken, user } = result;
//     storeTokens(accessToken, refreshToken);
//     console.log(result);
//     return result;
//   } catch (e) {
//     console.log(e);
//     return rejectWithValue('error');
//   }
// });
