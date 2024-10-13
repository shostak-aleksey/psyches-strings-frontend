import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Section.module.scss';
import { TestProps } from '@/shared/types/tests';
import { Colors } from '@/shared/const/colors';
import { Direction } from '@/shared/const/flex';
import { Align } from '@/shared/const/flex';
import { screenSize } from '@/shared/const/screenSize';

interface SectionProps extends TestProps {
  className?: string;
  children?: ReactNode;
  width?: screenSize | number;
  height?: number;
  padding?: string;
  margin?: string;
  background?: Colors;
  backgroundImage?: string;
  flex?: boolean;
  gap?: string;
  flexDirection?: Direction;
  justifyContent?: Align;
  alignItems?: Align;
  ref?: React.Ref<HTMLDivElement>;
}

export const Section = memo((props: SectionProps) => {
  const {
    className,
    children,
    width = '100%',
    height = '100vh',
    padding = '90px',
    margin = 0,
    background,
    backgroundImage,
    justifyContent,
    alignItems,
    ref,
    gap,
    flex,
  } = props;

  const style = {
    display: flex ? 'flex' : 'block',
    justifyContent,
    gap,
    alignItems,
    padding,
    margin,
    width,
    height,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    background,
  };

  return (
    <section
      style={style}
      className={classNames(cls.Section, {}, [className])}
      data-testid={props['data-testid'] ?? 'Section'}
      ref={ref}
    >
      {children}
    </section>
  );
});
