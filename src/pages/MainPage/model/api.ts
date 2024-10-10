import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJzaG9zdGFrLWFsZXNoa2FAbWFpbC5ydSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzI3NjY2MzAyLCJleHAiOjE3Mjc2NjcyMDJ9.Bquri6F2_CUPjaMlMg1_pBnI4pQGJVp3iLBTMsh4kz4';
export const curseApi = createApi({
  reducerPath: 'curseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCurses: builder.query<{}, void>({
      query: () => 'course',
    }),
    getCurseById: builder.query<{ id: number }, number>({
      query: (id) => `course/${id}`,
    }),
  }),
});
export const { useGetCursesQuery, useGetCurseByIdQuery } = curseApi;
