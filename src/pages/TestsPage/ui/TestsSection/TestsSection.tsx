import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestsSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';

interface TestsSectionProps {
  className?: string;
  height: number;
}

export const TestsSection = ({ className, height }: TestsSectionProps) => {
  return (
    <Section
      height={height}
      background={Colors.Gradient1}
      className={classNames(cls.TestsPage, {}, [className])}
    ></Section>
  );
};
