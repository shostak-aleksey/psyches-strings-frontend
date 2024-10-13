import { memo, ReactNode, CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import {
  FontSize,
  FontLine,
  Font,
  FontWeight,
} from '@/shared/const/textStyles';
import { Colors } from '@/shared/const/colors';

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
  fontWeight?: FontWeight;
  'data-testid'?: string;
  textColor?: Colors;
  titleColor?: string;
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
    fontWeight = FontWeight.Regular,
    'data-testid': dataTestId = 'Text',
    titleColor = Colors.Heading,
    textColor = Colors.Primary,
    children,
  } = props;

  const baseStyle: CSSProperties = {
    textAlign: align,
    textTransform: 'none' as 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  };

  const h1Style: CSSProperties = {
    ...baseStyle,
    fontSize: FontSize.XXXL,
    fontWeight: FontWeight.Bold,
    lineHeight: '1.2',
    color: titleColor,
    margin: '0 0 20px 0',
  };

  const h2Style: CSSProperties = {
    ...baseStyle,
    fontSize: '28px',
    fontWeight: FontWeight.Bold,
    lineHeight: '1.3',
    color: titleColor,
    margin: '0 0 15px 0',
  };

  const h3Style: CSSProperties = {
    ...baseStyle,
    fontSize: '24px',
    fontWeight: FontWeight.Bold,
    lineHeight: '1.4',
    color: titleColor,
    margin: '0 0 10px 0',
  };

  const pStyle: CSSProperties = {
    ...baseStyle,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '1.6',
    color: textColor,
    margin: '0 0 10px 0',
  };

  return (
    <div className={classNames(cls.Text)}>
      {h1 && (
        <h1 style={h1Style} data-testid={`${dataTestId}.Header`}>
          {children}
        </h1>
      )}
      {h2 && (
        <h2 style={h2Style} data-testid={`${dataTestId}.Header`}>
          {children}
        </h2>
      )}
      {h3 && (
        <h3 style={h3Style} data-testid={`${dataTestId}.Header`}>
          {children}
        </h3>
      )}
      {p && (
        <p style={pStyle} data-testid={`${dataTestId}.Paragraph`}>
          {children}
        </p>
      )}
    </div>
  );
});
