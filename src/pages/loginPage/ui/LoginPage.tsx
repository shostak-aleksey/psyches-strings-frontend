import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginPage.module.scss';
import { LoginForm } from '@/features/AuthByEmail';

interface LoginPageProps {
  className?: string;
}

export const LoginPage = ({ className }: LoginPageProps) => {
  return (
    <div className={classNames(cls.LoginPage, {}, [className])}>
      <LoginForm />
    </div>
  );
};
