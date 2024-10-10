import React from 'react';
import cls from './GridContainer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface GridContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  gap?: '0' | '4' | '8' | '12' | '16' | '20' | '24' | '28';
  padding?:
    | '0px'
    | '8px'
    | '12px'
    | '16px'
    | '20px'
    | '24px'
    | '28px'
    | '32px'
    | '64px'
    | '100px'
    | '128px';
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = '0',
  padding = '0',
  className,
}) => {
  return (
    <div
      className={classNames(cls.GridContainer, {}, [className])}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        padding: padding,
      }}
    >
      {children}
    </div>
  );
};
