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
      ...baseStyle,
      fontWeight: FontWeight.Bold,
      color: color,
    };

    const h2Style: CSSProperties = {
      ...baseStyle,
      fontWeight: FontWeight.Regular,
      color: color,
    };

    const h3Style: CSSProperties = {
      ...baseStyle,
      fontWeight: FontWeight.Regular,
      color: color,
    };

    const pStyle: CSSProperties = {
      ...baseStyle,
      fontWeight: FontWeight.Regular,
      color: color,
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
