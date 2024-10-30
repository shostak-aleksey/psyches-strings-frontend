import { Section } from '@/shared/ui/Section';
import { Container } from '@/shared/ui/Container/Container';
import { AnimatedText } from '@/entities/AnimatedText/AnimatedText';
import { HStack } from '@/shared/ui/Stack';

interface HeaderSectionProps {
  className?: string;
  children?: React.ReactNode;
}

export const HeaderSection = ({ children }: HeaderSectionProps) => {
  return (
    <Section
      fixed
      flex
      align="center"
      // backgroundImage={backgroundImage}
    >
      <Container flex justify="center" align="center">
        <HStack align="center" gap="28">
          <div
            style={
              {
                // margin: '0 0 200px 0',
              }
            }
          >
            <AnimatedText
              animationVariant="slideUp"
              line="1.1em"
              size="130px"
              align="center"
              h1
              start="top 35%"
              end="top -30%"
            >
              Positively uplifting <br /> landscapes
            </AnimatedText>
          </div>
        </HStack>

        {children}
      </Container>
    </Section>
  );
};
