import { Section } from '@/shared/ui/Section';
import { Container } from '@/shared/ui/Container/Container';
import { AnimatedText } from '@/entities/AnimatedText/AnimatedText';
import { HStack } from '@/shared/ui/Stack';
import { useState } from 'react';

interface HeaderSectionProps {
  className?: string;
  children?: React.ReactNode;
}

export const HeaderSection = ({ children }: HeaderSectionProps) => {
  return (
    <Section fixed flex align="center">
      <Container flex justify="center" align="center">
        <HStack align="center" gap="28">
          {' '}
          <AnimatedText
            animationVariant="slideUp"
            responsiveSizes={['2.0rem', '3.5rem', '4.5rem', '5.5rem', '7.5rem']}
            align="center"
            h1
            start="top 30%"
            end="top -20%"
          >
            Positively uplifting <br /> landscapes
          </AnimatedText>
        </HStack>

        {children}
      </Container>
    </Section>
  );
};
