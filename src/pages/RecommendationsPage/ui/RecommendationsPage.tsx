import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RecommendationsPage.module.scss';

interface RecommendationsPageProps {
  className?: string;
}

export const RecommendationsPage = ({ className }: RecommendationsPageProps) => {
  return (
    <div className={classNames(cls.RecommendationsPage, {}, [className])}>
       RecommendationsPage
    </div>
  );
};
