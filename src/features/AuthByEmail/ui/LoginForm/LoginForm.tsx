import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useSelector } from 'react-redux';
import {
  getLoginEmail,
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
} from '../../model/selectors/loginSelectors';
import {
  setEmail,
  setPassword,
  setLoading,
  setError,
} from '../../model/slice/loginSlice';
import { useCallback } from 'react';
// import { loginByEmail } from '../../model/services/loginByEmail';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { useLoginByEmailMutation } from '../../api/loginApi';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const [loginByEmail] = useLoginByEmailMutation();

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const response = await loginByEmail({
        email,
        password,
        role: 'USER',
      }).unwrap();
      console.log('Login successful:', response);
      dispatch(setError(''));
    } catch (err) {
      dispatch(setError((err as Error).message || 'Failed to login'));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, email, password, loginByEmail]);

  return (
    <VStack gap="16" className={classNames(cls.LoginForm, {}, [className])}>
      <label>
        Login:
        <Input
          value={email}
          onChange={onChangeEmail}
          type="email"
          placeholder="email"
        />
      </label>
      <label>
        Password:
        <Input
          value={password}
          onChange={onChangePassword}
          type="password"
          placeholder="Password"
        />
      </label>
      <button onClick={onLoginClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Send'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </VStack>
  );
};
