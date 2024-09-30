import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Section.module.scss';
import { TestProps } from '@/shared/types/tests';
import { Colors } from '@/shared/const/colors';
import { screenSize } from '@/shared/const/screenSize';

interface SectionProps extends TestProps {
  className?: string;
  children?: ReactNode;
  width?: screenSize | number;
  height?: number;
  padding?: string;
  margin?: string;
  background?: Colors;
  border?: boolean;
  separator?: boolean;
  separatorHeight?: number;
  separatorRadius?: number;
  separatorColor?: Colors;
  center?: boolean;
}

export const Section = memo((props: SectionProps) => {
  const {
    className,
    children,
    width,
    height,
    padding,
    margin,
    background = Colors.ColorBg,
    border = false,
    separator = false,
    separatorColor = 'red',
    separatorHeight = 100,
    center = false,
  } = props;

  const style = {
    padding,
    margin,
    background,
    width: '100%',
    height: '100%',
  };

  const containerStyle = {
    width,
    height,
  };

  return (
    <section
      style={style}
      className={classNames(cls.Section, { [cls.center]: center }, [className])}
      data-testid={props['data-testid'] ?? 'Section'}
    >
      {separator && (
        <div
          className={cls.Separator}
          style={{
            height: separatorHeight,
            top: `-${separatorHeight}px`,
            backgroundColor: separatorColor,
          }}
        />
      )}
      <div
        style={containerStyle}
        className={classNames(cls.Container, { [cls.border]: border })}
      >
        {children}
      </div>
    </section>
  );
});
