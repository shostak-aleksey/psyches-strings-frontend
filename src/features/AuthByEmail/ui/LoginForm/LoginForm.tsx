import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useSelector } from 'react-redux';
import {
  getLoginEmail,
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
} from '../../model/selectors/loginSelectors';
import { setEmail, setPassword } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
// import { loginByEmail } from '../../model/services/loginByEmail';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { loginByEmail } from '../../model/services/loginByEmail';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    await dispatch(loginByEmail({ email, password, role: 'USER' }));
  }, [dispatch, email, password]);

  return (
    <VStack gap="16" className={classNames(cls.LoginForm, {}, [className])}>
      <label>
        Login:
        <input
          value={email}
          onChange={(e) => onChangeEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
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
});
