import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserSelectors';
import { Link } from 'react-router-dom';
import { FaYoutube, FaTelegram } from 'react-icons/fa';
// import { GoogleLogin } from 'react-google-login';
import Logo from '@/shared/assets/2v.png';
import {
  getRouteMain,
  // getRouteProfile,
  // getRouteTests,
} from '@/shared/const/router';
import { AnimatedText } from '@/shared/ui/AnimatedText/AnimatedText';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const clientId =
    '387774286843-ltq12q54gienljk3ieq3ibe4lkj7u80a.apps.googleusercontent.com';
  const authData = useSelector(getUserAuthData);
  const [collapsed, setCollapsed] = useState(true);
  const [rotating, setRotating] = useState(false);

  const onArrowClick = useCallback(() => {
    setRotating(true);
    setCollapsed((collapsed) => !collapsed);
    setTimeout(() => setRotating(false), 500); // Убираем класс вращения после завершения анимации
  }, [collapsed]);

  const onSuccess = (response: any) => {
    console.log('Login Success: currentUser:', response.profileObj);
    // Здесь вы можете добавить логику для обработки данных пользователя
  };

  const onFailure = (response: any) => {
    console.log('Login failed: res:', response);
    // Здесь вы можете добавить логику для обработки ошибок
  };

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <HStack gap="12">b f</HStack>
      </header>
    );
  }
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <HStack
        justify="between"
        align="center"
        gap="12"
        className={classNames(cls.NavTop, {}, [])}
      >
        <HStack justify="around" align="center" gap="32" className={cls.Left}>
          <Link
            className={classNames(cls.Link, {}, [cls.Icon])}
            to={getRouteMain()}
          >
            <img className={cls.Logo} src={Logo} alt="" />{' '}
            <AnimatedText text={'Psyches'} />
            <AnimatedText text={'Strings'} />
          </Link>
        </HStack>
        <HStack justify="around" align="center" gap="32" className={cls.Right}>
          <Link className={classNames(cls.SocialLink, {})} to="/articles">
            <FaYoutube size={20} />
          </Link>
          <Link className={classNames(cls.SocialLink, {})} to="/articles">
            <FaTelegram size={20} />
          </Link>{' '}
          <span
            onClick={onArrowClick}
            className={classNames(cls.arrows, {
              [cls.arrowUp]: !collapsed,
              [cls.arrowDown]: collapsed,
              [cls.rotating]: rotating,
            })}
          />
        </HStack>
      </HStack>
      {/* <HStack
        className={classNames(cls.NavBottom, { [cls.opened]: collapsed }, [])}
        justify="around"
        align="center"
        gap="12"
      >

        <Link className={classNames(cls.Link)} to={getRouteTests()}>
          Тесты
        </Link>
        <Link className={classNames(cls.Link)} to={getRouteProfile('1')}>
          Профиль
        </Link> */}
      {/* <GoogleLogin
          clientId={clientId}
          buttonText="Войти"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className={cls.googleButton}
            >
              Войти
            </button>
          )}
        /> */}
      {/* </HStack> */}
    </header>
  );
});
