import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useSelector } from 'react-redux';
import {
  getLoginEmail,
  getLoginPassword,
} from '../../model/selectors/loginSelectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useLoginWithEmailMutation } from '../../api/loginApi';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const navigate = useNavigate();
  const [loginByEmail, { isLoading, isSuccess, isError, error }] =
    useLoginWithEmailMutation();

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
    loginByEmail({ email, password, role: 'USER' });
  }, [email, password]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(loginActions.setEmail(''));
      dispatch(loginActions.setPassword(''));
      navigate('/main'); // Редирект на главную страницу
    }
  }, [isSuccess, dispatch, navigate]);

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
        {isError && <ErrorMessage error={error} />}
      </VStack>
    </DynamicModuleLoader>
  );
});
