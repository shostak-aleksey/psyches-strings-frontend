import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { StyledDiv } from '../AnimatedREASIC/AnimatedREASIC';

// gsap.registerPlugin(window.DrawSVGPlugin);

export interface AnimatedENNEAGRAMMAProps {
  responsiveSizes?: [string, string, string, string, string];
}

const StyledSvg = styled.svg`
  z-index: 3;
  position: relative;
  overflow: visible;

  text {
    tspan {
      fill: #64a;
    }
  }
`;

export const AnimatedENNEAGRAMMA: React.FC<AnimatedENNEAGRAMMAProps> = ({
  responsiveSizes,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const numbersRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const textElement = textRef.current;
    const numbersElement = numbersRef.current;

    if (!svgElement || !textElement || !numbersElement) return;

    const numbers = numbersElement.querySelectorAll('tspan');
    const circle = svgElement.querySelector('circle');
    const enneagramPath = svgElement.querySelector('#symbol-path');

    const timeline = gsap.timeline({ paused: true });

    // Анимация для чисел
    timeline.to(numbers, {
      fill: 'white',
      duration: 1,
      stagger: 0.1,
      ease: 'power3.inOut',
      transformOrigin: '1000px 1000px',
      filter: 'url(#glowEffect)',
    });

    // Анимация для пути символа
    timeline.fromTo(
      enneagramPath,
      {
        strokeDasharray: '5%',
        // strokeDashoffset: '0%',
        stroke: '#64a',
      },
      {
        strokeDasharray: '0%',
        // strokeDashoffset: '0%',
        stroke: 'white',
        duration: 3,
        ease: 'power1.inOut',
        filter: 'url(#glowEffect)',
      },
      0,
    );

    // Анимация для круга
    timeline.to(
      circle,
      {
        scale: 0,
        duration: 1.5,
        transformOrigin: '1000px 1000px',
        ease: 'power3.in',
      },
      '-=2.5',
    );

    // Анимация для текста
    timeline.fromTo(
      textElement,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.9)' },
      '-=1.5',
    );

    const handleMouseEnter = () => timeline.play();
    const handleMouseLeave = () => timeline.reverse();

    svgElement.addEventListener('mouseenter', handleMouseEnter);
    svgElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      svgElement.removeEventListener('mouseenter', handleMouseEnter);
      svgElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <StyledDiv responsiveSizes={responsiveSizes}>
      <StyledSvg
        ref={svgRef}
        version="1.1"
        viewBox="0 0 2000 2000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="portalGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#64a', stopOpacity: 0 }} />
            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 1 }} />
          </radialGradient>
          <radialGradient id="sphereGradient3" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              style={{ stopColor: '#ff0000', stopOpacity: 1 }}
            />
            <stop offset="100%" style={{ stopColor: '#ff0', stopOpacity: 0 }} />
          </radialGradient>
          <filter id="glowEffect">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g id="enneagram-symbol" viewBox="0 0 2000 2000">
          <path
            d="M 1000.00,222.00 A 778.00,778.00, -1.57 0,1 1673.77,1389.00 A 778.00,778.00, -1.57 0,1 326.23,1389.00 A 778.00,778.00, -1.57 0,1 1000.00,222.00 M 1000.00,222.00 L 1673.77,1389.00 326.23,1389.00 Z M 1500.09,404.02 L 1266.09,1731.08 1766.18,864.90 499.91,404.02 733.91,1731.08 233.82,864.90 Z"
            fill="none"
            id="symbol-path"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="15.56"
          />
        </g>
        <circle cx="1000" cy="1000" r="1000" fill="url(#portalGradient3)" />
        <text
          ref={textRef}
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="white"
          fontSize="100"
          dy=".3em"
        >
          Enneagramma
        </text>
        <text
          ref={numbersRef}
          fill="white"
          fontFamily="monospace"
          fontSize="144"
          id="numbers"
          transform="translate(-43.20,46.80)"
        >
          <tspan x="1000.00" y="111.00">
            9
          </tspan>
          <tspan x="1571.44" y="318.99">
            1
          </tspan>
          <tspan x="1875.49" y="845.63">
            2
          </tspan>
          <tspan x="1769.90" y="1444.50">
            3
          </tspan>
          <tspan x="1304.06" y="1835.39">
            4
          </tspan>
          <tspan x="695.94" y="1835.39">
            5
          </tspan>
          <tspan x="230.10" y="1444.50">
            6
          </tspan>
          <tspan x="124.51" y="845.63">
            7
          </tspan>
          <tspan x="428.56" y="318.99">
            8
          </tspan>
        </text>
      </StyledSvg>
    </StyledDiv>
  );
};
