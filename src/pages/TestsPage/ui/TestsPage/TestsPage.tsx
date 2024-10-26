import { Page } from '@/shared/ui/Page/Page';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import AnimatedSVG from '@/shared/ui/AnimatedSVG/AnimatedSVG';
import { Container } from '@/shared/ui/Container/Container';

export const TestsPage = () => {
  return (
    <Page>
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
