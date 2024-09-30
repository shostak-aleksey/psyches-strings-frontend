import React from 'react';
import cls from './GridContainer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames(cls.GridContainer, {}, [className])}>
      {children}
    </div>
  );
};
