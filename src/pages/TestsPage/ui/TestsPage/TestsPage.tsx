import { useEffect } from 'react';
import { Page } from '@/shared/ui/Page/Page';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { TestsSection } from '../TestsSection/TestsSection';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { Colors } from '@/shared/const/colors';
import cls from './TestsPage.module.scss';
import { TestsSection2 } from '../TestsSection copy/TestsSection';
import { TestsSection3 } from '../TestsSection copy 2/TestsSection';
import { TestsSection4 } from '../TestsSection copy 3/TestsSection';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const TestsPage = () => {


  // const scrollToSection = () => {
  //   gsap.to(window, {
  //     duration: 2,
  //     scrollTo: { y: '.main-section', offsetY: 900 }, // Adjust offsetY as needed
  //     ease: 'power2.inOut',
  //   });
  // };

  return (
    <Page background={Colors.White}>
      <HeaderSection/>
        {/* <TestsSection /> */}
        {/* <TestsSection />
        <TestsSection />
        <TestsSection /> */}
          <TestsSection2 />

        <TestsSection3 />
        <TestsSection4 />
    </Page>
  );
};
