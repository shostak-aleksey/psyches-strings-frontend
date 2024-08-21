import { classNames as c } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserSelectors';
import { LoginForm } from '@/features/AuthByEmail';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData);

  console.log(authData);

  if (authData) {
    return (
      <header className={c(cls.Navbar, {}, [className])}>
        <HStack gap="12">b</HStack>
      </header>
    );
  }

  return (
    <header className={c(cls.Navbar, {}, [className])}>
      <HStack justify="around" gap="12">
        <div>SomeLink</div>
        <div>SomeLink</div>
        <div>SomeLink</div>
        <div>SomeLink</div>
        <div>SomeLink</div>
        <div>SomeLink</div>
        <LoginForm />
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
