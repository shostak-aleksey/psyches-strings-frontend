import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <Section
      height={850}
      background={Colors.Gradient5_2}
      className={classNames(cls.AboutSection, {}, [className])}
    ></Section>
  );
};
