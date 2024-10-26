import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { getRouteTest } from '@/shared/const/router';
import { StyledDiv } from '../AnimatedREASIC/AnimatedREASIC';

export interface AnimatedENNEAGRAMMAProps {}

export const AnimatedENNEAGRAMMA: React.FC<AnimatedENNEAGRAMMAProps> = ({}) => {
  const StyledSvg = styled.svg`
    z-index: 3;
    position: relative;
    overflow: visible;
    pointer-events: none;

    text {
      pointer-events: auto;
    }

    circle {
      pointer-events: auto;
      fill: url(#portalGradient3);
      filter: url(#portalEffect3);
    }
  `;
  return (
    <StyledDiv>
      <StyledSvg
        version="1.1"
        viewBox="0 0 2000 2000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="portalGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#64a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id="sphereGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#ff0', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f00', stopOpacity: 0 }} />
          </radialGradient>
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
        <circle cx="1000" cy="1000" r="789" fill="url(#portalGradient)" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="white"
          fontSize="100"
          dy=".3em"
        >
          <Link to={getRouteTest('enneagramma')}> Эннеаграмма </Link>
        </text>
        <text
          fill="white"
          font-family="monospace"
          font-size="144"
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
