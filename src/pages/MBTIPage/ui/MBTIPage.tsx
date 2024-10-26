import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MBTIPage.module.scss';

interface MBTIPageProps {
  className?: string;
}

export const MBTIPage = ({ className }: MBTIPageProps) => {
  return (
    <div className={classNames(cls.MBTIPage, {}, [className])}>
       MBTIPage
    </div>
  );
};
