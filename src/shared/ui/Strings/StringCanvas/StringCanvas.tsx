import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface StringCanvasProps {
  width: number;
  height: number;
  animatePath?: boolean;
  bezierPoints?: [number, number, number, number]; // Новый пропс для кривых Безье
}

export const StringCanvas: React.FC<StringCanvasProps> = ({
  width,
  height,
  animatePath = false,
  bezierPoints = [-100, -100, 20, -100], // Значения по умолчанию
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    let animationFrameId: number;
    let startTime: number | null = null;

    const drawString = (time: number) => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(0, height / 2);
      const duration = 3000;
      const elapsed = startTime ? time - startTime : 0;
      const damping = Math.exp(-elapsed / 1000);
      const frequency = 800;
      const amplitude = 500 * damping;

      // Используем кривые Безье для изгибов
      for (let x = 0; x <= width; x += 1) {
        const y =
          height / 2 +
          amplitude * Math.sin((x / width) * Math.PI * 2 * frequency * elapsed);
        const [cp1xOffset, cp1yOffset, cp2xOffset, cp2yOffset] = bezierPoints;
        const cp1x = x + cp1xOffset;
        const cp1y = y + cp1yOffset;
        const cp2x = x + cp2xOffset;
        const cp2y = y + cp2yOffset;
        context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
      }

      context.strokeStyle = 'white';
      context.stroke();
      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(drawString);
      } else {
        setIsAnimating(false);
        drawInitialString();
      }
    };

    const drawInitialString = () => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(0, height / 2);
      context.lineTo(width, height / 2);
      context.strokeStyle = 'white';
      context.stroke();
    };

    drawInitialString();

    if (isAnimating) {
      startTime = performance.now();
      animationFrameId = requestAnimationFrame(drawString);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, isAnimating, bezierPoints]);

  useEffect(() => {
    if (animatePath) {
      const path = { x: 0, y: height / 2 };
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(path, {
        x: width / 2 - 50,
        duration: 2,
        onUpdate: () => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const context = canvas.getContext('2d');
          if (!context) return;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.beginPath();
          context.moveTo(0, height / 2);
          context.lineTo(path.x, path.y);
          context.strokeStyle = 'white';
          context.stroke();
        },
      })
        .to(path, {
          x: width / 2 + 50,
          y: height / 2 - 50,
          duration: 1,
          onUpdate: () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            if (!context) return;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(0, height / 2);
            context.lineTo(path.x, path.y);
            context.strokeStyle = 'white';
            context.stroke();
          },
        })
        .to(path, {
          x: width,
          y: height / 2,
          duration: 2,
          onUpdate: () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            if (!context) return;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(0, height / 2);
            context.lineTo(path.x, path.y);
            context.strokeStyle = 'white';
            context.stroke();
          },
        });
    }
  }, [animatePath, width, height]);

  const handleClick = () => {
    setIsAnimating(true);
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onClick={handleClick}
    />
  );
};
