import { forwardRef, memo, ReactNode } from 'react';
import styled from 'styled-components';
import {
  FontSize,
  FontLine,
  Font,
  FontWeight,
} from '@/shared/const/textStyles';
import { Colors } from '@/shared/const/colors';

export type TextVariant = 'primary' | 'error' | 'accent';
export type TextAlign = 'right' | 'left' | 'center' | 'justify';

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
  responsiveSizes?: [string, string, string, string, string]; // New prop for responsive font sizes
}

const adaptiveStyle = (
  responsiveSizes?: [string, string, string, string, string],
) => `
  font-size: ${responsiveSizes ? responsiveSizes[0] : '1rem'};
  line-height: 1.5;
  @media (min-width: 576px) {
    font-size: ${responsiveSizes ? responsiveSizes[1] : '1.25rem'};
  }
  @media (min-width: 768px) {
    font-size: ${responsiveSizes ? responsiveSizes[2] : '1.5rem'};
  }
  @media (min-width: 992px) {
    font-size: ${responsiveSizes ? responsiveSizes[3] : '1.75rem'};
  }
  @media (min-width: 1200px) {
    font-size: ${responsiveSizes ? responsiveSizes[4] : '2rem'};
  }
`;

const StyledH1 = styled.h1<TextProps>`
  font-family: ${(props) => props.font || Font.XXXL};
  font-weight: ${(props) => props.fontWeight || FontWeight.Bold};
  line-height: 1.2;
  color: ${(props) => props.color || Colors.Heading};
  text-align: ${(props) => props.align || 'left'};
  text-transform: ${(props) => props.textTransform || 'none'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  margin: ${(props) => props.margin || '0 0 0px 0'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  white-space: ${(props) => props.whiteSpace || 'normal'};
  max-width: ${(props) => props.maxWidth || 'none'};
  font-size: ${(props) => props.size || FontSize.XL};
  line-height: ${(props) => props.lineHeight || FontLine.XL};
  ${(props) => adaptiveStyle(props.responsiveSizes)}
`;

const StyledH2 = styled(StyledH1)`
  font-family: ${(props) => props.font || Font.XL};
  line-height: 1.3;
`;

const StyledH3 = styled(StyledH1)`
  font-family: ${(props) => props.font || Font.L};
  line-height: 1.4;
`;

const StyledH4 = styled(StyledH1)`
  font-family: ${(props) => props.font || Font.M};
  line-height: 1.5;
`;

const StyledP = styled.p<TextProps>`
  font-family: ${(props) => props.font || Font.L};
  font-weight: ${(props) => props.fontWeight || FontWeight.Regular};
  line-height: 1.6;
  color: ${(props) => props.color || Colors.Heading};
  text-align: ${(props) => props.align || 'left'};
  text-transform: ${(props) => props.textTransform || 'none'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  margin: ${(props) => props.margin || '0 0 0px 0'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  white-space: ${(props) => props.whiteSpace || 'normal'};
  max-width: ${(props) => props.maxWidth || 'none'};
  font-size: ${(props) => props.size || FontSize.M};
  line-height: ${(props) => props.lineHeight || FontLine.M};
  ${(props) =>
    props.responsiveSizes ? adaptiveStyle(props.responsiveSizes) : ''}
`;

export const Text = memo(
  forwardRef<HTMLDivElement, TextProps>((props, ref) => {
    const {
      className,
      h1,
      h2,
      h3,
      h4,
      p,
      'data-testid': dataTestId = 'Text',
      children,
    } = props;

    return (
      <>
        {h1 && (
          <StyledH1
            className={className}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
            {...props}
          >
            {children}
          </StyledH1>
        )}
        {h2 && (
          <StyledH2
            className={className}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
            {...props}
          >
            {children}
          </StyledH2>
        )}
        {h3 && (
          <StyledH3
            className={className}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
            {...props}
          >
            {children}
          </StyledH3>
        )}
        {h4 && (
          <StyledH4
            className={className}
            data-testid={`${dataTestId}.Header`}
            ref={ref}
            {...props}
          >
            {children}
          </StyledH4>
        )}
        {p && (
          <StyledP
            className={className}
            data-testid={`${dataTestId}.Paragraph`}
            ref={ref}
            {...props}
          >
            {children}
          </StyledP>
        )}
      </>
    );
  }),
);
