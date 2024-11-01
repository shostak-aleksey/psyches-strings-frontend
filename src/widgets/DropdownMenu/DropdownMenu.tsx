import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '@/entities/User/api/userApi';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { StateSchema } from '@/app/providers/StoreProvider';
import CustomLink from '@/shared/ui/AppLink/AppLink';
import cls from './DropdownMenu.module.scss';
import { Text } from '@/shared/ui/Text';
import gsap from 'gsap';
import { User } from '@/entities/User';
import { getRouteTest } from '@/shared/const/router';
import { FaSquare } from 'react-icons/fa';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { VStack } from '@/shared/ui/Stack';

interface DropdownMenuProps {
  isDropdownVisible: boolean;
  toggleDropdown: () => void;
  handleGoogleLogin: () => void;
  isInitLoading: boolean;
  user?: User;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isDropdownVisible,
  handleGoogleLogin,
  isInitLoading,
  user,
  toggleDropdown,
}) => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const userState = useSelector((state: StateSchema) => state.user);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const DropdownLoginContent = useRef<HTMLDivElement>(null);

  console.log('userState', userState, user);
  const handleLogout = useCallback(async () => {
    try {
      await logout().unwrap();
      dispatch(userActions.logout());
    } catch (error) {
      console.error('Ошибка при логауте:', error);
    }
  }, [logout, dispatch]);

  useEffect(() => {
    if (isDropdownVisible) {
      gsap.to([dropdownRef.current, DropdownLoginContent.current], {
        opacity: 1,
        x: userState?.user?.id ? 0 : 20,
        duration: 0.5,
        display: 'flex',
      });
    } else {
      gsap.to([dropdownRef.current, DropdownLoginContent.current], {
        opacity: 0,
        x: 300,
        duration: 0.5,
        display: 'none',
      });
    }
  }, [isDropdownVisible, userState?.user?.id]);

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownVisible) {
        toggleDropdown();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownVisible, toggleDropdown]);

  return (
    <div ref={dropdownRef} className={cls.DropdownMenu} style={{ opacity: 0 }}>
      {userState?.user?.id ? (
        <>
          <div className={cls.profile}>
            <div className={cls.avatar}>
              <img
                className="avatar-img"
                src={user?.photos?.[0]?.value || ''}
                alt="avatar"
              />
            </div>
            <div>
              <Text p className={cls.name}>
                {user?.name?.givenName || 'имя пользователя'}{' '}
                {user?.name?.familyName || ''}
              </Text>
              <a href="#" className={cls.profileLink}>
                Настройки профиля
              </a>
            </div>
          </div>
          <StringCanvas
            margin="0px  0 10px 0 "
            frequency={10}
            animated4
            width={200}
            height={10}
            speed={0.05}
            amplitude={1}
            animatePath
          />
          <CustomLink to={getRouteTest('MBTI')} className={cls.DropdownLink}>
            Пройти тест MBTI
            {/* <FaSquare className={cls.Square} size={8} /> */}
          </CustomLink>
          <CustomLink to={getRouteTest('REASIC')} className={cls.DropdownLink}>
            Пройти тест REASIC
            {/* <FaSquare className={cls.Square} size={8} /> */}
          </CustomLink>
          <CustomLink
            to={getRouteTest('ENNEAGRAMMA')}
            className={cls.DropdownLink}
          >
            Пройти тест ENNEA...
            {/* <FaSquare className={cls.Square} size={8} /> */}
          </CustomLink>
          {/* <div className={cls.Separator}></div> */}
          <StringCanvas
            alignSelf="center"
            frequency={10}
            margin="10px  0 15px 0 "
            animated4
            width={200}
            height={10}
            speed={0.05}
            amplitude={1}
            animatePath
          />
          <button onClick={handleLogout} className={cls.LogoutButton}>
            Выйти из аккаунта
          </button>
        </>
      ) : (
        <VStack ref={DropdownLoginContent} className={cls.DropdownLoginContent}>
          <Text align="left" p className={cls.DropdownText}>
            Авторизация необходима для сохранения и отслеживания ваших тестов.
          </Text>
          <button
            onClick={handleGoogleLogin}
            disabled={isInitLoading}
            className={cls.LoginButton}
          >
            <div className={cls.Separator}></div>
            <Text margin="0" p align="left">
              Войти через Google
            </Text>
          </button>
        </VStack>
      )}
    </div>
  );
};

export default DropdownMenu;
