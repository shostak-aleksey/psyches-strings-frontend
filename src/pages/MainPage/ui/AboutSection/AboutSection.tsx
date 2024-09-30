import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import { Card } from '@/shared/ui/Card/Card';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <Section
      height={900}
      background={Colors.Gradient10}
      className={classNames(cls.AboutSection, {}, [className])}
    />
  );
};
