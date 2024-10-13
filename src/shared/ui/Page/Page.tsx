// src/shared/ui/Page/Page.tsx
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { Colors } from '@/shared/const/colors';

interface PageProps {
  className?: string;
  children?: ReactNode;
  background?: Colors;
  width?: string;
  height?: string;
}

export const Page = memo((props: PageProps) => {
  const {
    className,
    children,
    background = Colors.Gradient5_2,
    width = '100%',
    height = '100vh',
  } = props;

  const style = {
    background,
    width,
    height,
  };

  return (
    <div style={style} className={classNames(cls.Page, {}, [className])}>
      {children}
    </div>
  );
});
