import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import styled from 'styled-components';

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className: string;
}

const StyledLink = styled.a<{ isAnimating: boolean }>`
  cursor: ${({ isAnimating }) => (isAnimating ? 'default' : 'pointer')};
  pointer-events: ${({ isAnimating }) => (isAnimating ? 'none' : 'auto')};
`;

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, className }) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (path: string) => {
    if (isAnimating) return; // Если анимация уже выполняется, ничего не делаем

    setIsAnimating(true); // Устанавливаем состояние анимации в true

    const pinkSquare = document.getElementById('pink-square');
    const blackSquare = document.getElementById('black-square');

    if (pinkSquare && blackSquare) {
      gsap.to(pinkSquare, {
        duration: 1,
        y: '-100%',
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to(blackSquare, {
            duration: 1,
            x: '100%',
            ease: 'power2.inOut',
            onComplete: () => {
              navigate(path); // Навигация после завершения анимации
              gsap.to([blackSquare, pinkSquare], {
                duration: 0.7,
                opacity: 0,
                ease: 'power2.inOut',
                onComplete: () => {
                  gsap.to([blackSquare, pinkSquare], {
                    display: 'none',
                    onComplete: () => {
                      // Возвращаем элементы в исходные состояния
                      gsap.set(pinkSquare, {
                        y: '0%',
                        opacity: 1,
                        display: 'block',
                      });
                      gsap.set(blackSquare, {
                        x: '0%',
                        opacity: 1,
                        display: 'block',
                      });
                      setIsAnimating(false); // Сбрасываем состояние анимации
                    },
                  });
                },
              });
            },
          });
        },
      });
    }
  };

  return (
    <StyledLink
      isAnimating={isAnimating}
      className={className}
      onClick={() => handleNavigation(to)}
    >
      {children}
    </StyledLink>
  );
};

export default CustomLink;
