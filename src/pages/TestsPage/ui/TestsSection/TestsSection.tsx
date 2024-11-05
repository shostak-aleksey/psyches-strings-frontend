import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestsSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import EnneagramSVG from '@/shared/ui/EnneagramSVG/EnneagramSVG';

interface TestsSectionProps {
  className?: string;
}

export const TestsSection = ({ className }: TestsSectionProps) => {
  return (
    <Section
      // height={200}
      background={Colors.Gradient1}
      className={classNames(cls.TestsPage, {}, [className])}
    ></Section>
  );
};
