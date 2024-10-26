import { Container } from '@/shared/ui/Container/Container';
import { Page } from '@/shared/ui/Page/Page';
import { Section } from '@/shared/ui/Section';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Text } from '@/shared/ui/Text';
import Смычёк from '@/shared/assets/смычёк.svg';
import Скрипка from '@/shared/assets/скрипка.svg';

export const TestPage = () => {
  return (
    <Page>
      <Section>
        <Container flex align="center">
          <VStack align="center" gap="16">
            <Text h2>Enneagramma personalty test</Text>
            <Text h3>Get to know yourself today</Text>

            <StringCanvas
              animated={{ amplitude: 10, frequency: 0.001, speed: 0.00015 }}
              // height={'80%'}
              width={'100%'}
              duration={10000}
              damping={0.5}
              frequency={0.1}
              amplitude={10}
            />
          </VStack>
        </Container>
      </Section>
      <Section>
        <Container>
          <VStack justify="center" align="center" gap="128">
            <VStack
              gap="16"
              justify="center"
              align="center"
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Text align="center" h3>
                А ты пидр ёпта? может ты пидр? да нет?{' '}
              </Text>
              <img
                src={Смычёк}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
              <img
                src={Скрипка}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
            </VStack>
            <VStack
              align="center"
              justify="center"
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Text h3>А ты пидр ёпта? может ты пидр? да нет? </Text>
              <StringCanvas
                width={'100%'}
                duration={10000}
                damping={0.5}
                frequency={0.1}
                amplitude={10}
              />
              <img
                src={Смычёк}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
              <img
                src={Скрипка}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
            </VStack>
            <VStack
              align="center"
              justify="center"
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Text h3>А ты пидр ёпта? может ты пидр? да нет? </Text>
              <img
                src={Смычёк}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
              <img
                src={Скрипка}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
            </VStack>
            <VStack
              align="center"
              justify="center"
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Text h3>А ты пидр ёпта? может ты пидр? да нет? </Text>
              <img
                src={Смычёк}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
              <img
                src={Скрипка}
                alt=""
                style={{
                  width: '30%',
                  height: '100px',
                  position: 'absolute',
                  top: '60%',
                  left: '35%',
                }}
              />
            </VStack>
          </VStack>
        </Container>
      </Section>
      <Section>
        <Container> </Container>
      </Section>
      <Section>
        <Container> </Container>
      </Section>
      <Section>
        <Container> </Container>
      </Section>
      <Section>
        <Container> </Container>
      </Section>
    </Page>
  );
};
