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
import { FontLine, FontSize } from '@/shared/const/textStyles';

interface HeaderSectionProps {
  className?: string;
  children?: React.ReactNode;
}

export const HeaderSection = ({ className, children }: HeaderSectionProps) => {
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
              end="top -20%"
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
