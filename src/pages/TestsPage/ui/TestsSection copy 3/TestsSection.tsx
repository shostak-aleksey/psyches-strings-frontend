import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestsSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import AnimatedSVG from '@/shared/ui/AnimatedSVG/AnimatedSVG';
import { Container } from '@/shared/ui/Container/Container';

import Image from '@/shared/assets/7v.png';
interface TestsSectionProps {
  className?: string;
}

export const TestsSection4 = ({ className }: TestsSectionProps) => {
  return (
    <Section
      background={Colors.Gradient1}
      className={classNames(cls.TestsPage, {}, [className])}
    >
      <Container justify='center' flex isNarrow>
        <AnimatedSVG   type="REASIC" />
        {/* <img src={Image} alt="" /> */}

      </Container>
    </Section>
  );
};
