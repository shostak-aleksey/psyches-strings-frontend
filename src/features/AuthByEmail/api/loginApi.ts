import { User } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

interface LoginByEmailParams {
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

interface LoginResponse {
  token: string;
}

const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    LoginByEmail: build.mutation<LoginResponse, LoginByEmailParams>({
      query: (authData) => ({
        url: '/user/login',
        method: 'POST',
        body: authData,
      }),
    }),
  }),
});

export const { useLoginByEmailMutation } = loginApi;
export const LoginByEmail = loginApi.endpoints.LoginByEmail.initiate;
