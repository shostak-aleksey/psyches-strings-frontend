import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column' | 'rowReverse' | 'columnReverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexGap =
  | '4'
  | '8'
  | '12'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '64'
  | '128';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
  rowReverse: cls.rowReverse,
  columnReverse: cls.columnReverse,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  12: cls.gap12,
  16: cls.gap16,
  20: cls.gap20,
  24: cls.gap24,
  28: cls.gap28,
  32: cls.gap32,
  64: cls.gap64,
  128: cls.gap128,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
  grow?: number;
  shrink?: number;
  basis?: string;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    max,
    grow,
    shrink,
    basis,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    cls[wrap],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
  };

  const styles: React.CSSProperties = {
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
  };

  return (
    <div
      className={classNames(cls.Flex, mods, classes)}
      style={styles}
      {...otherProps}
    >
      {children}
    </div>
  );
};
