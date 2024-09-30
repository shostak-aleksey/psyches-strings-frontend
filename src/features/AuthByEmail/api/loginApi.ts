// src/features/AuthByEmail/api/loginApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '@/entities/User';

interface LoginWithGoogleParams {
  credential: string;
}

interface LoginWithEmailParams {
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}
export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    loginWithGoogle: builder.mutation<AuthResponse, LoginWithGoogleParams>({
      query: (authData) => ({
        url: '/user/google-login',
        method: 'POST',
        body: authData,
      }),
    }),
    loginWithEmail: builder.mutation<AuthResponse, LoginWithEmailParams>({
      query: (authData) => ({
        url: '/user/registration',
        method: 'POST',
        body: authData,
      }),
    }),
  }),
});

export const { useLoginWithGoogleMutation } = loginApi;
export const { useLoginWithEmailMutation } = loginApi;
