import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { FaHome, FaUser } from 'react-icons/fa';
import { getRouteMain, getRouteProfile } from '@/shared/const/router';
import { AnimatedText } from '@/entities/AnimatedText/AnimatedText';
import CustomLink from '@/shared/ui/AppLink/AppLink';
import AnimatedSVG from '@/features/AnimatedSVG/AnimatedSVG';

import {
  useInitAuthDataQuery,
  useLogoutMutation,
} from '@/entities/User/api/userApi';
import { getUserAuthData, getUserRole } from '@/entities/User';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const handleGoogleLogin = () => {
    window.location.href = `${__API__}/auth/google`;
  };

  const role = getUserRole();

  const { data: user, isLoading, error } = useInitAuthDataQuery();

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      console.error('Ошибка при логауте:', error);
    }
  };

  const [collapsed, setCollapsed] = useState(true);
  const [rotating, setRotating] = useState(false);

  const onArrowClick = useCallback(() => {
    setRotating(true);
    setCollapsed((collapsed) => !collapsed);
    setTimeout(() => setRotating(false), 500);
  }, [collapsed]);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <HStack
        align="center"
        gap="12"
        className={classNames(cls.NavTop, {}, [])}
      >
        <HStack align="center" gap="16" className={cls.Left}>
          <CustomLink
            className={classNames(cls.Link, {}, [cls.Icon])}
            to={getRouteMain()}
          >
            <AnimatedSVG type={'large'} />
            <AnimatedText
              animationVariant="fadeInTrigger"
              h3
              text={'Psyches Strings'}
              children={undefined}
            />
          </CustomLink>
        </HStack>
        <HStack justify="around" align="center" className={cls.Right}>
          {/* <Button onClick={}>f?</Button> */}
          {/* <button onClick={handleGoogleLogin3}>ffппп</button> */}
          <CustomLink
            className={classNames(cls.SocialLink, {})}
            to={getRouteMain()}
          >
            <FaHome size={20} />
          </CustomLink>

          {user ? (
            <>
              <Button onClick={handleLogout}>Выйти</Button>
            </>
          ) : (
            <button onClick={handleGoogleLogin}>Войти через Google</button>
          )}
          {user && (
            <CustomLink
              className={classNames(cls.SocialLink, {})}
              to={getRouteProfile(user.id)}
            >
              <FaUser size={20} />
            </CustomLink>
          )}
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
    </header>
  );
});
