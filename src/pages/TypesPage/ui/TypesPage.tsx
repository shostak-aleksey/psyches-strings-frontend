import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TypesPage.module.scss';

interface TypesPageProps {
  className?: string;
}

export const TypesPage = ({ className }: TypesPageProps) => {
  return (
    <div className={classNames(cls.TypesPage, {}, [className])}>
       TypesPage
    </div>
  );
};
