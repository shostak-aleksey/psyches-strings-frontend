import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { AboutSection } from '../AboutSection/AboutSection';
import { BestVideoSection } from '../BestVideoSection/BestVideoSection';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => (
  <div className={classNames(cls.MainPage, {}, [className])}>
    <AboutSection />
    <BestVideoSection />
  </div>
);
