import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';
export type TextAlign = 'right' | 'left' | 'center';
export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
  'data-testid'?: string;
  titleColor?: string;
  textColor?: string;
  primaryColor?: string;
  linkColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontFamily?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = 'primary',
    align = 'left',
    size = 'm',
    bold,
    'data-testid': dataTestId = 'Text',
    titleColor,
    textColor,
    primaryColor,
    fontSize,
    lineHeight,
    fontFamily,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const additionalClasses = [className, cls[variant], cls[align], sizeClass];

  const style = {
    color: textColor || 'inherit',
    fontSize: fontSize || 'inherit',
    lineHeight: lineHeight || 'inherit',
    fontFamily: fontFamily || 'inherit',
  };

  return (
    <div
      className={classNames(cls.Text, { [cls.bold]: bold }, additionalClasses)}
      style={{ color: primaryColor }}
    >
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestId}.Header`}
          style={{ color: titleColor }}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={cls.text}
          data-testid={`${dataTestId}.Paragraph`}
          style={style}
        >
          {text}
        </p>
      )}
    </div>
  );
});
