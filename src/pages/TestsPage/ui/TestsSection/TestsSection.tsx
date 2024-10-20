import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestsSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';

interface TestsSectionProps {
  className?: string;
}

export const TestsSection = ({ className }: TestsSectionProps) => {
  return (
    <Section
      height={800}
      background={Colors.Gradient1}
      className={classNames(cls.TestsPage, {}, [className])}
    ></Section>
  );
};
