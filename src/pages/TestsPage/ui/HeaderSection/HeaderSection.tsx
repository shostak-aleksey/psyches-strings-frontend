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
    <Section flex align="center" backgroundImage={backgroundImage}>
      <Container>
        <VStack align="center" gap="12">
          {/* <div
            style={{
              position: 'absolute',
              left: '80%',
              // width: '100%',
              // height: '100%',
              transform: 'rotate(90deg)',
            }}
          >
            <StringCanvas width="100%" height={100} />
          </div> */}
          <HStack align="center" gap="28">
            <div
              style={{
                margin: '0 0 200px 0',
              }}
            >
              <AnimatedText
                // font-size: 120px;
                //     line-height: 1.1em;
                //     text-align: center;
                //     color: var(--bricks-color-sisapw);
                //     padding-bottom: 10px;
                animationVariant="slideUp"
                line="1.1em"
                size="120px"
                align="center"
                maxWidth="1050px"
                h1
                text={'Positively uplifting landscapes'}
              />
            </div>
          </HStack>
          {/* <div
            style={{
              position: 'absolute',
              right: '80vw',
              transform: 'rotate(90deg)',
            }}
          >
            <StringCanvas width="100%" height={100} />
          </div> */}
          {children}
        </VStack>
      </Container>
    </Section>
  );
};
