import React, { useEffect, useRef } from 'react';
import cls from './AnimatedText.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
}) => {
  const textRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 1 },
      {
        y: 0,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: 0,
          end: 400,
          scrub: true,
        },
        ease: 'power2.in',
      },
    );
  }, []);

  return (
    <h2 className={classNames(cls.LogoText, {}, [className])}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={cls.inner}
          ref={(el) => (textRef.current[index] = el!)}
        >
          {char}
        </span>
      ))}
    </h2>
  );
};
