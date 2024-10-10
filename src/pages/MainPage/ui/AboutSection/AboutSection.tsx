import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
// import { Strings } from '@/shared/ui/Strings/Strings';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    // <div />
    <Section
      height={850}
      background={Colors.Gradient5_2}
      className={classNames(cls.AboutSection, {}, [className])}
    >
      {/* <Strings /> */}
    </Section>
  );
};
