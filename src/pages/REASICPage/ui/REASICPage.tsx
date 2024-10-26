import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './REASICPage.module.scss';

interface REASICPageProps {
  className?: string;
}

export const REASICPage = ({ className }: REASICPageProps) => {
  return (
    <div className={classNames(cls.REASICPage, {}, [className])}>
       REASICPage
    </div>
  );
};
