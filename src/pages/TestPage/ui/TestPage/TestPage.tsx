import { useEffect } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import { Page } from '@/shared/ui/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Questionnaire } from '@/features/Test/ui/Questionnaire';
import { HeaderSection } from '@/pages/TestsPage/ui/HeaderSection/HeaderSection';

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

            <Questionnaire testId={'67314bc744d8af164d588686'} limit={8} />
          </Container>
        </VStack>
      </Container>
    </Page>
  );
};
