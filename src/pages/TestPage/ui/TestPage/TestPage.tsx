import { useEffect } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import { Page } from '@/shared/ui/Page/Page';
import { Section } from '@/shared/ui/Section';
import { VStack } from '@/shared/ui/Stack';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Text } from '@/shared/ui/Text';
import { Questionnaire } from '@/features/Test/Questionnaire';
import { Colors } from '@/shared/const/colors';
import { HeaderSection } from '@/pages/TestsPage/ui/HeaderSection/HeaderSection';
import AnimatedSVG from '@/features/AnimatedSVG/AnimatedSVG';
import { ResponsiveVisibility } from '@/shared/lib/useMediaQuery/useMediaQuery';

export const TestPage = () => {
  useEffect(() => {
    // Прокрутка страницы к началу
    gsap.to(window, { duration: 0, scrollTo: { y: 0 } });
  }, []);

  return (
    <Page>
      <HeaderSection />
      <Container>
        <VStack align="center">
          <Container align="center" className="snap-section">
            <StringCanvas />

            <Questionnaire />
          </Container>
        </VStack>
      </Container>
    </Page>
  );
};
