import React from 'react';
import { Container } from '@/shared/ui/Container/Container';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { Page } from '@/shared/ui/Page/Page';
import AnimatedSVG from '@/features/AnimatedSVG/AnimatedSVG';
import { VStack } from '@/shared/ui/Stack';
import { ModalTriggerWrapper } from '@/widgets/ModalTriggerWrapper/ModalTriggerWrapper';

export const TestsPage = () => {
  return (
    <Page>
      <HeaderSection />
      <Container>
        <VStack align="center" gap="128">
          <Container align="center" className="snap-section">
            <ModalTriggerWrapper type="mbti">
              <AnimatedSVG type="mbti" />
            </ModalTriggerWrapper>
          </Container>
          <Container align="center" className="snap-section">
            <ModalTriggerWrapper type="enneagramma">
              <AnimatedSVG type="enneagramma" />
            </ModalTriggerWrapper>
          </Container>
          <Container margin="0 0 15vh" align="center" className="snap-section">
            <ModalTriggerWrapper type="REASIC">
              <AnimatedSVG type="REASIC" />
            </ModalTriggerWrapper>
          </Container>
        </VStack>
      </Container>
    </Page>
  );
};
