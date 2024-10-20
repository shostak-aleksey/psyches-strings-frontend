import styled from 'styled-components';
import { ReactNode } from 'react';
import { Colors } from '@/shared/const/colors';
import { Justify, Align, Gap } from '@/shared/const/flex';
import { screenSize } from '@/shared/const/screenSize';

interface SectionProps {
  className?: string;
  children?: ReactNode;
  width?: screenSize | number;
  height?: number;
  padding?: string;
  margin?: string;
  background?: Colors;
  backgroundImage?: string;
  flex?: boolean;
  gap?: Gap;
  justify?: Justify;
  align?: Align;
  column?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export const Section = styled.section<SectionProps>`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) =>
    props.width !== undefined ? `${props.width}px` : '100vw'};
  height: ${(props) =>
    props.height !== undefined ? `${props.height}px` : '100vh'};
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background: ${(props) => props.background};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;
