import React from 'react';
import cls from './FlexContainer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FlexContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  gap?: '0' | '4' | '8' | '12' | '16' | '20' | '24' | '28';
  className?: string;
}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = '0',
  className,
}) => {
  return (
    <div
      className={classNames(cls.flexContainer, {}, [className])}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};
