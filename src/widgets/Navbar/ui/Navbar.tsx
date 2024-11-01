// Navbar.tsx
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useInitAuthDataQuery } from '@/entities/User/api/userApi';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { FaHome, FaUser } from 'react-icons/fa';
import { getRouteMain, getRouteProfile } from '@/shared/const/router';
import CustomLink from '@/shared/ui/AppLink/AppLink';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArrowRotation } from '@/shared/ui/arrowRotation/arrowRotation';
import { AnimatedText } from '@/entities/AnimatedText/AnimatedText';
import AnimatedSVG from '@/features/AnimatedSVG/AnimatedSVG';
import DropdownMenu from '@/widgets/DropdownMenu/DropdownMenu';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const { data: userQuery, isLoading: isInitLoading } = useInitAuthDataQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userQuery) {
      dispatch(userActions.setAuthData(userQuery));
    }
  }, [dispatch, userQuery]);

  const user = useSelector((state: StateSchema) => state.user);

  console.log('userState', user, userQuery);

  const handleGoogleLogin = useCallback(() => {
    window.location.href = `${__API__}/auth/google`;
  }, []);

  const toggleDropdown = useCallback(() => {
    setDropdownVisible((prev) => !prev);
  }, []);

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <HStack
        align="center"
        gap="12"
        className={classNames(cls.NavTop, {}, [])}
        style={{ width: '100vw' }}
      >
        <HStack
          align="center"
          gap="16"
          className={classNames(cls.Left, {
            [cls.Mobile]: window.innerWidth < 768,
          })}
        >
          <CustomLink
            className={classNames(cls.Link, {}, [cls.Icon])}
            to={getRouteMain()}
          >
            <AnimatedSVG type="large" />
            <AnimatedText
              className={cls.AnimatedText}
              responsiveSizes={['1rem', '1.25rem', '1.5rem', '1.75rem', '2rem']}
              animationVariant="fadeInTrigger1"
              h3
            >
              Psyches Strings
            </AnimatedText>
          </CustomLink>
        </HStack>
        <HStack
          justify="around"
          align="center"
          className={classNames(cls.Right, {
            [cls.Mobile]: window.innerWidth < 768,
          })}
        >
          {user?.user?.id && (
            <CustomLink
              className={classNames(cls.SocialLink, {})}
              to={getRouteProfile(user.user.id)}
            >
              <FaUser size={20} />
            </CustomLink>
          )}
          <CustomLink
            className={classNames(cls.SocialLink, {})}
            to={getRouteMain()}
          >
            <FaHome size={20} />
          </CustomLink>
          <ArrowRotation onToggle={toggleDropdown} />
          <DropdownMenu
            isDropdownVisible={isDropdownVisible}
            toggleDropdown={toggleDropdown}
            handleGoogleLogin={handleGoogleLogin}
            isInitLoading={isInitLoading}
            user={user?.user}
          />
        </HStack>
      </HStack>
    </header>
  );
});
