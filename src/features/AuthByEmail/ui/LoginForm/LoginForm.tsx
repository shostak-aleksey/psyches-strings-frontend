import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useSelector } from 'react-redux';
import {
  getLoginEmail,
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
} from '../../model/selectors/loginSelectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { loginByEmail } from '../../model/services/loginByEmail';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from '@/shared/ui/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const initialReducers: ReducersList = {
    loginForm: loginReducer,
  };

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    await dispatch(loginByEmail({ email, password, role: 'USER' }));
  }, [dispatch, email, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        {error && <Text variant={'error'} text={error}></Text>}
      </VStack>
    </DynamicModuleLoader>
  );
});
