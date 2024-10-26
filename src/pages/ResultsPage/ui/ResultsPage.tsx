import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ResultsPage.module.scss';

interface ResultsPageProps {
  className?: string;
}

export const ResultsPage = ({ className }: ResultsPageProps) => {
  return (
    <div className={classNames(cls.ResultsPage, {}, [className])}>
       ResultsPage
    </div>
  );
};
