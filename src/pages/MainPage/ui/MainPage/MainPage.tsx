import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Page } from '@/shared/ui/Page/Page';
import { Colors } from '@/shared/const/colors';
import { AboutSection } from '../AboutSection/AboutSection';
import { BestVideoSection } from '../BestVideoSection/BestVideoSection';
import { PopularGuidesSection } from '../PopularGuidesSection/PopularGuidesSection';

gsap.registerPlugin(ScrollTrigger);

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <Page
      background={Colors.Gradient1}
      className={classNames(cls.MainPage, {}, [className])}
    >
      <AboutSection />

      <BestVideoSection />
      <PopularGuidesSection />
    </Page>
  );
};
