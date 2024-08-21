// import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { User } from '@/entities/User';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setLoginByEmail } from '../../api/loginApi';

// interface LoginByEmailProps {
//   email: string;
//   password: string;
//   role: 'USER' | 'ADMIN';
// }

// export const loginByEmail = createAsyncThunk<
//   User,
//   LoginByEmailProps,
//   ThunkConfig<string>
// >('user/loginByEmail', async (authData, thunkApi) => {
//   const { rejectWithValue, dispatch } = thunkApi;
//   try {
//     const response = await dispatch(setLoginByEmail(authData)).unwrap();
//     return response;
//   } catch (error) {
//     console.log(error);
//     return rejectWithValue('error');
//   }
// });
