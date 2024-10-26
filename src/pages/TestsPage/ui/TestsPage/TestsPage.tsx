import { useEffect, useRef } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import AnimatedSVG from '@/shared/ui/AnimatedSVG/AnimatedSVG';
import { Page } from '@/shared/ui/Page/Page';

export const TestsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { scale: 0 },
        { scale: 1, duration: 1, stagger: 0.2, ease: 'power2.out' },
      );
    }
  }, []);

  return (
    <Page ref={containerRef}>
      <HeaderSection />
      <Container>
        <Container flex align="center" className="snap-section">
          <AnimatedSVG type="enneagramma" />
        </Container>
        <Container align="center" className="snap-section">
          <AnimatedSVG type="mbti" />
        </Container>
        <Container flex className="snap-section">
          <AnimatedSVG type="REASIC" />
        </Container>
      </Container>
    </Page>
  );
};
