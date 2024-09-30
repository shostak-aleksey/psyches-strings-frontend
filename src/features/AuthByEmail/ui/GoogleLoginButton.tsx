import { useGoogleLogin, TokenResponse } from '@react-oauth/google';
import { useLoginWithGoogleMutation } from '../api/loginApi';
import { storeTokens } from '@/shared/utils/tokenStorage';

export const GoogleLoginButton = () => {
  const [loginWithGoogle] = useLoginWithGoogleMutation();

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      try {
        const credential = (tokenResponse as any).credential; // Используем any для обхода ошибки типизации
        const result = await loginWithGoogle({ credential }).unwrap();
        const { accessToken, refreshToken } = result;
        storeTokens(accessToken, refreshToken);
        console.log('Login successful:', result);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });

  return <button onClick={() => handleLogin()}>Login with Google</button>;
};
