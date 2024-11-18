import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AppearAnimationWrapperProps {
  children: React.ReactNode;
  animationType?:
    | 'fadeIn'
    | 'slideUp'
    | 'zoomIn'
    | 'slideLeft'
    | 'slideRight'
    | 'rotateIn'
    | 'bounceIn'
    | 'complexAnimation1'
    | 'complexAnimation2'
    | 'complexAnimation3';
}

export const AppearAnimationWrapper: React.FC<AppearAnimationWrapperProps> = ({
  children,
  animationType = 'fadeIn',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let animationConfig;
    switch (animationType) {
      case 'fadeIn':
        animationConfig = {
          opacity: 0,
          y: 20,
          duration: 3,
          ease: 'power2.out',
        };
        break;
      case 'slideUp':
        animationConfig = { y: 100, duration: 3, ease: 'power2.out' };
        break;
      case 'zoomIn':
        animationConfig = { scale: 0.5, duration: 3, ease: 'power2.out' };
        break;
      case 'slideLeft':
        animationConfig = { x: 100, duration: 3, ease: 'power2.out' };
        break;
      case 'slideRight':
        animationConfig = { x: -100, duration: 3, ease: 'power2.out' };
        break;
      case 'rotateIn':
        animationConfig = { rotation: 360, duration: 3, ease: 'power2.out' };
        break;
      case 'bounceIn':
        animationConfig = { scale: 0.5, duration: 3, ease: 'bounce.out' };
        break;
      case 'complexAnimation1':
        animationConfig = {
          opacity: 0,
          x: 50,
          y: 50,
          scale: 0.5,
          rotation: 180,
          duration: 5,
          ease: 'elastic.out(1, 0.3)',
        };
        break;
      case 'complexAnimation2':
        animationConfig = {
          opacity: 0,
          y: -100,
          scale: 1.5,
          duration: 5,
          ease: 'back.out(1.7)',
        };
        break;
      case 'complexAnimation3':
        animationConfig = {
          x: 200,
          y: 200,
          rotation: 720,
          scale: 0.3,
          duration: 4,
          ease: 'elastic.inOut(1, 0.98)',
        };
        break;
      default:
        animationConfig = {};
    }

    gsap.from(element, {
      ...animationConfig,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      gsap.killTweensOf(element);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationType]);

  return <div ref={containerRef}>{children}</div>;
};
