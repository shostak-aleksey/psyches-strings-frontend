import { classNames as c } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserSelectors';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData);

  console.log(authData);

  if (authData) {
    return (
      <header className={c(cls.Navbar, {}, [className])}>
        <HStack gap="12">b f</HStack>
      </header>
    );
  }

  return (
    <header className={c(cls.Navbar, {}, [className])}>
      <HStack className="HStack" justify="around" gap="12">
        <Link className={cls.Link} to="/">
          Главная
        </Link>
        <Link className={cls.Link} to="/about">
          Обо мне
        </Link>
        {/* <Link to="/articles">SomeLink</Link>
        <Link to="/profile/123">SomeLink</Link> */}
        <Link className={cls.Link} to="/login">
          login
        </Link>
        <Link className={cls.Link} to="/registration">
          registration
        </Link>
      </HStack>
    </header>
  );
});

// const [isAuthModal, setIsAuthModal] = useState(false);
// const onCloseModal = useCallback(() => {
//   setIsAuthModal(false);
// }, []);
// const onShowModal = useCallback(() => {
//   setIsAuthModal(false);
// }, []);
