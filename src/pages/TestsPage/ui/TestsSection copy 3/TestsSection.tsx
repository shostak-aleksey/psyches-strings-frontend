import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestsSection.module.scss';
import { Section } from '@/shared/ui/Section';
import AnimatedSVG from '@/shared/ui/AnimatedSVG/AnimatedSVG';
import { Container } from '@/shared/ui/Container/Container';

interface TestsSectionProps {
  className?: string;
}

export const TestsSection4 = ({ className }: TestsSectionProps) => {
  return (
    <Section className={classNames(cls.TestsPage, {}, [className])}>
      <Container justify="center" flex isNarrow>
        aa
        {/* <img src={Image} alt="" /> */}
      </Container>
    </Section>
  );
};
