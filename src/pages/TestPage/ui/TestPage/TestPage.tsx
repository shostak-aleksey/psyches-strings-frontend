import { Container } from '@/shared/ui/Container/Container';
import { Page } from '@/shared/ui/Page/Page';
import { Section } from '@/shared/ui/Section';
import { VStack } from '@/shared/ui/Stack';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Text } from '@/shared/ui/Text';
import { Questionnaire } from '@/features/Test/Questionnaire';

export const TestPage = () => {
  return (
    <Page>
      <Section>
        <Container flex align="center">
          <VStack align="center" gap="16">
            <Text h2>Enneagramma personalty test</Text>
            <Text h3>Get to know yourself today</Text>

            <StringCanvas
              animated3={{
                amplitude: 10,
                frequency: 0.00001,
                speed: 0.000015,
              }}
            />
          </VStack>
        </Container>
      </Section>
      <Section>
        <Container>
          <Questionnaire />
        </Container>
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
