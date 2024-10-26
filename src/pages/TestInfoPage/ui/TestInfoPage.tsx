import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestInfoPage.module.scss';

interface TestInfoPageProps {
  className?: string;
}

export const TestInfoPage = ({ className }: TestInfoPageProps) => {
  return (
    <div className={classNames(cls.TestInfoPage, {}, [className])}>
       TestInfoPage
    </div>
  );
};
