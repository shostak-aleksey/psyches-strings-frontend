import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import { Button } from '@/shared/ui/Button';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Text } from '@/shared/ui/Text';
import { Container } from '@/shared/ui/Container/Container';
import { AnimatedText } from '@/shared/ui/AnimatedText/AnimatedText';
import { VStack, HStack } from '@/shared/ui/Stack';
import backgroundImage from '@/shared/assets/BackgroundImage2.jpg';

interface HeaderSectionProps {
  className?: string;
}

export const HeaderSection = ({ className }: HeaderSectionProps) => {
  return (
    <Section flex align="center" backgroundImage={backgroundImage}>
      <Container>
        <VStack align="center" gap="12">
          <HStack align="center" gap="128">
            <AnimatedText text={'Positively'} />
            <AnimatedText text={'uplifting'} />
            <AnimatedText text={'landscapes'} />
          </HStack>
          <StringCanvas width="100%" height={100} />
        </VStack>
      </Container>
    </Section>
  );
};
