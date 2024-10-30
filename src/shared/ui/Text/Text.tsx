import { forwardRef, memo, ReactNode, CSSProperties } from 'react';
import {
  FontSize,
  FontLine,
  Font,
  FontWeight,
} from '@/shared/const/textStyles';
import { Colors } from '@/shared/const/colors';

export type TextVariant = 'primary' | 'error' | 'accent';
export type TextAlign = 'right' | 'left' | 'center';

export interface TextProps {
  className?: string;
  children?: ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  p?: boolean;
  variant?: TextVariant;
  align?: TextAlign;
  size?: FontSize | string;
  line?: FontLine | string;
  font?: Font;
  fontWeight?: FontWeight;
  'data-testid'?: string;
  color?: Colors;
  margin?: string;
  letterSpacing?: string;
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  maxWidth?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textDecoration?: 'none' | 'underline' | 'line-through' | 'overline';
  lineHeight?: string;
}

export const Text = memo(
  forwardRef<HTMLDivElement, TextProps>((props, ref) => {
    const {
      className,
      h1,
      h2,
      h3,
      h4,
      p,
      variant = 'primary',
      align = 'left',
      size = FontSize.XXL,
      line = FontLine.XXL,
      font = Font.XXL,
      fontWeight = FontWeight.Regular,
      'data-testid': dataTestId = 'Text',
      color = Colors.Heading,
      margin = '0 0 20px 0',
      letterSpacing = 'normal',
      whiteSpace = 'normal',
      maxWidth = 'none',
      textTransform = 'none',
      textDecoration = 'none',
      lineHeight = line,
      children,
    } = props;

    const baseStyle: CSSProperties = {
      textAlign: align,
      textTransform,
      textDecoration,
      margin,
      letterSpacing: `${letterSpacing}px`,
      whiteSpace,
      maxWidth,
      fontSize: size,
      lineHeight,
      fontFamily: font,
    };

    const h1Style: CSSProperties = {
      font: Font.XXXL,
      fontWeight: FontWeight.Bold,
      lineHeight: '1.2',
      color: color,
      ...baseStyle,
    };

    const h2Style: CSSProperties = {
      font: Font.XXL,
      fontWeight: FontWeight.Bold,
      lineHeight: '1.3',
      color: color,
      ...baseStyle,
    };

    const h3Style: CSSProperties = {
      font: Font.XL,
      fontWeight: FontWeight.Bold,
      lineHeight: '1.4',
      color: color,
      ...baseStyle,
    };

    const h4Style: CSSProperties = {
      font: Font.L,
      fontWeight: FontWeight.Bold,
      lineHeight: '1.5',
      color: color,
      ...baseStyle,
    };

    const pStyle: CSSProperties = {
      font: Font.L,
      fontWeight: FontWeight.Regular,
      lineHeight: '1.6',
      color: color,
      ...baseStyle,
    };

    return (
      <>
        {h1 && (
          <h1
            className={className}
            style={h1Style}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
          >
            {children}
          </h1>
        )}
        {h2 && (
          <h2
            className={className}
            style={h2Style}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
          >
            {children}
          </h2>
        )}
        {h3 && (
          <h3
            className={className}
            style={h3Style}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
          >
            {children}
          </h3>
        )}
        {h4 && (
          <h4
            className={className}
            style={h4Style}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
          >
            {children}
          </h4>
        )}
        {p && (
          <p
            className={className}
            style={pStyle}
            data-testid={`${dataTestId}.Paragraph`}
            ref={ref}
          >
            {children}
          </p>
        )}
      </>
    );
  }),
);
