import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ResultsPage.module.scss';
import { AppearAnimationWrapper } from '@/entities/AppearAnimationWrapper/AppearAnimationWrapper';
import AnimatedSVG from '@/features/AnimatedSVG/AnimatedSVG';
import { HeaderSection } from '@/pages/TestsPage/ui/HeaderSection/HeaderSection';
import { Container } from '@/shared/ui/Container/Container';
import { Page } from '@/shared/ui/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { ModalTriggerWrapper } from '@/widgets/ModalTriggerWrapper/ModalTriggerWrapper';

interface ResultsPageProps {
  className?: string;
}

export const ResultsPage = ({ className }: ResultsPageProps) => {
  return (
    <Page>
      <HeaderSection />
      <Container>
        <VStack align="center" gap="128">
          <Container align="center" className="snap-section">
            <AppearAnimationWrapper animationType="complexAnimation2">
              {' '}
              <ModalTriggerWrapper type="enneagramma">
                <AnimatedSVG type="enneagramma" />
              </ModalTriggerWrapper>
            </AppearAnimationWrapper>
          </Container>
        </VStack>
      </Container>
    </Page>
  );
};
