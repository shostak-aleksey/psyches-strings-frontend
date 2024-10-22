import { useEffect } from 'react';
import { Page } from '@/shared/ui/Page/Page';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { TestsSection } from '../TestsSection/TestsSection';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { Colors } from '@/shared/const/colors';
import cls from './TestsPage.module.scss';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const TestsPage = () => {
  useEffect(() => {
    gsap.to('.tests-section', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.tests-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }, []);

  const scrollToSection = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: '.main-section', offsetY: 900 }, // Adjust offsetY as needed
      ease: 'power2.inOut',
    });
  };

  return (
    <Page background={Colors.White}>
      <HeaderSection>
        <button onClick={scrollToSection} className={cls.downArrow}>
          ↓
        </button>
      </HeaderSection>
      <div className="tests-section">
        <TestsSection height={300} />
        <TestsSection height={300} />
        <TestsSection height={300} />
        <TestsSection height={300} />
        <div className="main-section">
          <TestsSection height={1100} />
        </div>
      </div>
    </Page>
  );
};
