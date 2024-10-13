import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { FontSize, FontLine, Font } from '@/shared/const/textStyles';

export type TextVariant = 'primary' | 'error' | 'accent';
export type TextAlign = 'right' | 'left' | 'center';

interface TextProps {
  className?: string;
  children?: ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  p?: boolean;
  variant?: TextVariant;
  align?: TextAlign;
  size?: FontSize;
  line?: FontLine;
  font?: Font;
  bold?: boolean;
  'data-testid'?: string;
  titleColor?: string;
  textColor?: string;
  primaryColor?: string;
  linkColor?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    h1,
    h2,
    h3,
    p,
    variant = 'primary',
    align = 'left',
    font = Font.XXL,
    bold,
    'data-testid': dataTestId = 'Text',
    titleColor,
    textColor,
    primaryColor,
    children,
  } = props;

  const style = {
    color: primaryColor || (h1 || h2 || h3 ? titleColor : textColor),
    font: font,
    textAlign: align,
  };

  return (
    <div
      data-testid={dataTestId}
      className={classNames(
        cls.Text,
        { [cls.bold]: bold, [cls[variant]]: variant },
        [className],
      )}
      style={style}
    >
      {h1 && (
        <h1 style={style} data-testid={`${dataTestId}.Header`}>
          {children}
        </h1>
      )}
      {h2 && (
        <h2 style={style} data-testid={`${dataTestId}.Header`}>
          {children}
        </h2>
      )}
      {h3 && (
        <h3 style={style} data-testid={`${dataTestId}.Header`}>
          {children}
        </h3>
      )}
      {p && (
        <p style={style} data-testid={`${dataTestId}.Paragraph`}>
          {children}
        </p>
      )}
    </div>
  );
});
