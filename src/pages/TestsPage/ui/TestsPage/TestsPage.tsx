import { Container } from '@/shared/ui/Container/Container';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { Page } from '@/shared/ui/Page/Page';
import AnimatedSVG from '@/features/AnimatedSVG/AnimatedSVG';
import { VStack } from '@/shared/ui/Stack';
import { ModalTriggerWrapper } from '@/widgets/ModalTriggerWrapper/ModalTriggerWrapper';
import { AppearAnimationWrapper } from '@/entities/AppearAnimationWrapper/AppearAnimationWrapper';

export const TestsPage = () => {
  return (
    <Page>
      <HeaderSection />
      <Container>
        <VStack align="center" gap="128">
          <Container align="center" className="snap-section">
            <AppearAnimationWrapper>
              {' '}
              <ModalTriggerWrapper type="mbti">
                <AnimatedSVG type="mbti" />
              </ModalTriggerWrapper>
            </AppearAnimationWrapper>
          </Container>
          <Container align="center" className="snap-section">
            <AppearAnimationWrapper animationType="complexAnimation2">
              {' '}
              <ModalTriggerWrapper type="enneagramma">
                <AnimatedSVG type="enneagramma" />
              </ModalTriggerWrapper>
            </AppearAnimationWrapper>
          </Container>
          <Container margin="0 0 15vh" align="center" className="snap-section">
            <AppearAnimationWrapper animationType="complexAnimation1">
              {' '}
              <ModalTriggerWrapper type="REASIC">
                <AnimatedSVG type="REASIC" />
              </ModalTriggerWrapper>
            </AppearAnimationWrapper>
          </Container>
        </VStack>
      </Container>
    </Page>
  );
};
