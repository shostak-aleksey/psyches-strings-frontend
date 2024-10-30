import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginResponse {
  message(arg0: string, message: any): unknown;
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    type: Array<string>;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
  endpoints: (builder) => ({
    googleCallback: builder.query({
      query: () => '/auth/google/callback',
      transformResponse: (response: LoginResponse) => {
        // Обработка ответа
        if (response.success) {
          // Сохраняем токены в localStorage
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
        }
        return response;
      },
    }),
  }),
});

export const { useGoogleCallbackQuery } = apiSlice;
