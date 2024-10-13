import React from 'react';
import cls from './GridContainer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface GridContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  gap?: string;
  padding?: string;
  minmax?: string;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = '16px',
  padding = '0',
  minmax = '320px',
  className,
}) => {
  return (
    <div
      className={classNames(cls.GridContainer, {}, [className])}
      style={{
        display: 'grid',
        gridTemplateRows: direction === 'column' ? 'auto' : undefined,
        gridTemplateColumns:
          direction === 'row'
            ? `repeat(auto-fill, minmax(${minmax}, 1fr))`
            : undefined,
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
