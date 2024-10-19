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

const mediaQueries: { [key: string]: CSSProperties } = {
  '@media (min-width: 1400px)': {
    maxWidth: '1320px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
};

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
    ...mediaQueries,
  };

  return (
    <div style={style} className={classNames(cls.Page, {}, [className])}>
      {children}
    </div>
  );
});
