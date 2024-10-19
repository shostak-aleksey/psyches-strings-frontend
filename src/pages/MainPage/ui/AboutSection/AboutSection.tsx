import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import { Text } from '@/shared/ui/Text';
import { StringWithControls } from '@/features/SliderControls';
import { Container } from '@/shared/ui/Container/Container';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <Section
      height={800}
      background={Colors.Gradient1}
      padding="220px 0 220px"
      align="center"
      justify="center"
      flex
      column
      className={classNames(cls.AboutSection, {}, [className])}
    >
      <Container>
        <Text align="center" margin="0px 0 110px" h1 color={Colors.White}>
          НАСТРОЙ СВОЁ ПОНИМАНИЕ МИРА НА НОВУЮ ВОЛНУ
        </Text>
        <StringWithControls />
      </Container>
    </Section>
  );
};
