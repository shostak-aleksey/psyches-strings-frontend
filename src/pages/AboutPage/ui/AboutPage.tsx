import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
  className?: string;
}

export const AboutPage = ({ className }: AboutPageProps) => {
  return (
    <div className={classNames(cls.AboutPage, {}, [className])}>
      AboutPage
    </div>
  );
};
