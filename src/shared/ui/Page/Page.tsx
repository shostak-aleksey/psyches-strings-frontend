// src/shared/ui/Page/Page.tsx
import { memo, ReactNode, CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { Colors } from '@/shared/const/colors';

interface PageProps {
  className?: string;
  children?: ReactNode;
  background?: Colors;
  padding?: string;
}

export const Page = memo((props: PageProps) => {
  const {
    className,
    children,
    background = Colors.Gradient5_2,
    padding,
  } = props;

  const style = {
    background,
    padding,
    height: '100vh',
  };

  return (
    <div style={style} className={classNames(cls.Page, {}, [className])}>
      {children}
    </div>
  );
});
