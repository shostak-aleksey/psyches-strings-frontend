import { useEffect, useRef } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { Page } from '@/shared/ui/Page/Page';
import AnimatedSVG from '@/features/AnimatedSVG/AnimatedSVG';
import { VStack } from '@/shared/ui/Stack';

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
        <VStack align="center" gap="128">
          <Container align="center" className="snap-section">
            <AnimatedSVG type="mbti" />
          </Container>
          <Container align="center" className="snap-section">
            <AnimatedSVG type="enneagramma" />
          </Container>
          <Container margin="0 0 15vh" align="center" className="snap-section">
            <AnimatedSVG type="REASIC" />
          </Container>
        </VStack>
      </Container>
    </Page>
  );
};
