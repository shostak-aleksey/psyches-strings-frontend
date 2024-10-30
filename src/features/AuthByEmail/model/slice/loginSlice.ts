// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { LoginSchema } from '../type/LoginSchema';
// import { loginByEmail } from '../services/loginByEmail';

// const initialState: LoginSchema = {
//   isLoading: false,
//   email: '',
//   password: '',
// };

// const loginSlice = createSlice({
//   name: 'login',
//   initialState,
//   reducers: {
//     setEmail: (state, action: PayloadAction<string>) => {
//       state.email = action.payload;
//     },
//     setPassword: (state, action: PayloadAction<string>) => {
//       state.password = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginByEmail.pending, (state) => {
//         state.error = undefined;
//         state.isLoading = true;
//       })
//       .addCase(loginByEmail.fulfilled, (state) => {
//         state.isLoading = false;
//         state.email = '';
//         state.password = '';
//       })
//       .addCase(loginByEmail.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { actions: loginActions } = loginSlice;
// export const { reducer: loginReducer } = loginSlice;
