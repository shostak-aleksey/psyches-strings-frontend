import React, { useEffect, useRef } from 'react';
import { Text, TextProps } from '@/shared/ui/Text';
import { Colors } from '@/shared/const/colors';

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimatedTextProps extends TextProps {
  text?: string | React.ReactNode;
  children: React.ReactNode;
  animationVariant?: 'fadeInTrigger' | 'slideUp' | 'fadeIn' | 'rotate';
  start?: string;
  end?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  text,
  animationVariant = 'slideUp',
  start,
  end,
  ...textProps
}) => {
  const textContainerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textContainerRef.current) {
      const split = new SplitText(textContainerRef.current, { type: 'chars' });

      let animationConfig;

      switch (animationVariant) {
        case 'fadeIn':
          animationConfig = {
            fontSize: 0,
            opacity: 0,
            stagger: -0.2,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: start || 'top -75%',
              end: end || 'bottom -200%',
              scrub: 1,
            },
            ease: 'power1.inOut',
          };
          break;
        case 'fadeInTrigger':
          animationConfig = {
            y: -25,
            fontSize: 0,
            opacity: 0,
            stagger: -2,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: start || 'top -75%',
              end: end || 'bottom -200%',
              scrub: 2,
            },
            duration: 5,
            ease: 'power1.inOut',
          };
          break;
        case 'rotate':
          animationConfig = {
            rotation: 360,
            stagger: 0.05,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: start || 'top 75%',
              end: end || 'bottom 25%',
              scrub: 1,
            },
            ease: 'power1.inOut',
          };
          break;
        case 'slideUp':
        default:
          animationConfig = {
            y: -75,
            stagger: 0.03,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: start || 'top 25%',
              end: end || 'bottom 10%',
              scrub: 2,
            },
            ease: 'sine.inOut',
          };
          break;
      }

      const animation = gsap.fromTo(split.chars, { y: 0 }, animationConfig);

      return () => {
        animation.kill();
      };
    }
  }, [animationVariant, start, end]);

  return (
    <div>
      <Text {...textProps} color={Colors.White} ref={textContainerRef}>
        {children ? (text = children) : text}
      </Text>
    </div>
  );
};