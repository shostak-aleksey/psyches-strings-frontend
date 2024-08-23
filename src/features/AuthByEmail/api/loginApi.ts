import { User } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

interface LoginByEmailParams {
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    LoginByEmail: build.mutation<User, LoginByEmailParams>({
      query: (authData) => ({
        url: '/user/login',
        method: 'POST',
        body: authData,
      }),
    }),
  }),
});

export const LoginByEmail = loginApi.endpoints.LoginByEmail.initiate;
