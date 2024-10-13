import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { AboutSection } from '../AboutSection/AboutSection';
import { BestVideoSection } from '../BestVideoSection/BestVideoSection';
import { Page } from '@/shared/ui/Page/Page';
import { Colors } from '@/shared/const/colors';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => (
  <Page
    background={Colors.Gradient5_2}
    className={classNames(cls.MainPage, {}, [className])}
  >
    <AboutSection />
    <div className={cls.semicircle} />
    <BestVideoSection />
    <BestVideoSection />
    <BestVideoSection />
    <BestVideoSection />
  </Page>
);
