import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '@/shared/const/colors';
import { Justify, Align, Gap } from '@/shared/const/flex';
import { screenSize } from '@/shared/const/screenSize';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  width?: screenSize | number;
  height?: string | number;
  padding?: string;
  margin?: string;
  background?: Colors;
  backgroundImage?: string;
  flex?: boolean;
  gap?: Gap;
  justify?: Justify;
  align?: Align;
  column?: boolean;
  fixed?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

const StyledSection = styled.section<SectionProps>`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width !== undefined ? `${props.width}px` : '100vw')};
  height: ${(props) => (props.height !== undefined ? `${props.height}` : '100vh')};
  background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : 'none')};
  background-size: cover;
  background-o
  background-repeat: no-repeat;
    // background-attachment: fixed; /* Fix the background image */
  background-attachment: ${(props) => (props.fixed !== undefined ? `fixed` : undefined)};
  background: ${(props) => props.background};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const Section: React.FC<SectionProps> = (props) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        backgroundPositionY: '100%', // Adjust this value for the desired  effect
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }
  }, []);

  return <StyledSection ref={sectionRef} {...props} />;
};
