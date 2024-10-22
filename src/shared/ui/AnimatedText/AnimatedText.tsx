import React, { useEffect, useRef } from 'react';
import { Text, TextProps } from '@/shared/ui/Text';
import { Colors } from '@/shared/const/colors';

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimatedTextProps extends TextProps {
  text: string;
  animationVariant?: 'fadeInTrigger' | 'slideUp' | 'fadeIn' | 'rotate'; // Add more variants as needed
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  animationVariant = 'slideUp', // Default to 'slideUp'
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
            // y: -25,
            fontSize: 0,
            opacity: 0,
            stagger: -0.2,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: 'top -75%',
              end: 'bottom -200%',
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
              start: 'top -75%',
              // end: 'bottom -200%',
              scrub: 2, // This allows the animation to be tied to the scroll position
            },
            duration: 5, // Set the duration of the animation to 2 seconds
            ease: 'power1.inOut',
          };
          break;
        case 'rotate':
          animationConfig = {
            rotation: 360,
            stagger: 0.05,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: 'top 75%',
              end: 'bottom 25%',
              scrub: 1,
            },
            ease: 'power1.inOut',
          };
          break;
        case 'slideUp':
        default:
          animationConfig = {
            y: -200,
            stagger: 0.009,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: 'top 25%',
              end: 'bottom 10%',
              scrub: 2,
            },
            ease: 'power2.inOut',
          };
          break;
      }

      const animation = gsap.fromTo(split.chars, { y: 0 }, animationConfig);

      return () => {
        animation.kill();
      };
    }
  }, [animationVariant]);

  return (
    <div>
      <Text {...textProps} color={Colors.White} ref={textContainerRef}>
        {text}
      </Text>
    </div>
  );
};
