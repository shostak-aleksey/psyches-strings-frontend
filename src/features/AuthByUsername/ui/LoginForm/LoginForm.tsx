import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
  className?: string;
  // onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export const LoginForm = memo(
  ({
    className,
    //  onSuccess
  }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const forceUpdate = useForceUpdate();

    const onChangeUsername = useCallback(
      (value: string) => {
        dispatch(loginActions.setUsername(value));
      },
      [dispatch],
    );

    const onChangePassword = useCallback(
      (value: string) => {
        dispatch(loginActions.setPassword(value));
      },
      [dispatch],
    );
    const authData: any = {
      email: username,
      password: password,
      role: 'USER',
    };
    const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername(authData));
      if (result.meta.requestStatus === 'fulfilled') {
        // onSuccess();
        forceUpdate();
      }
    }, [
      dispatch,
      username,
      password,
      //  onSuccess,
      forceUpdate,
    ]);

    return (
      <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
        <VStack gap="16" className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={'Форма авторизации'} />
          {error && (
            <Text text={'Вы ввели неверный логин или пароль'} variant="error" />
          )}
          <Input
            autofocus
            type="text"
            className={cls.input}
            placeholder={'Введите username'}
            onChange={onChangeUsername}
            value={username}
          />
          <Input
            type="text"
            className={cls.input}
            placeholder={'Введите пароль'}
            onChange={onChangePassword}
            value={password}
          />
          <Button
            className={cls.loginBtn}
            onClick={onLoginClick}
            disabled={isLoading}
          >
            {'Войти'}
          </Button>
        </VStack>
      </DynamicModuleLoader>
    );
  },
);
