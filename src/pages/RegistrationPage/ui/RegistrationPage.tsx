import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RegistrationPage.module.scss';

interface RegistrationPageProps {
  className?: string;
}

export const RegistrationPage = ({ className }: RegistrationPageProps) => {
  return (
    <div className={classNames(cls.registrationPage, {}, [className])}>
      registrationPage
    </div>
  );
};
