import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EightSpheresOfLifePage.module.scss';

interface EightSpheresOfLifePageProps {
  className?: string;
}

export const EightSpheresOfLifePage = ({ className }: EightSpheresOfLifePageProps) => {
  return (
    <div className={classNames(cls.EightSpheresOfLifePage, {}, [className])}>
       EightSpheresOfLifePage
    </div>
  );
};
