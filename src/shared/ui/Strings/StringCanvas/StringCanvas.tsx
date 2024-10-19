import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface StringCanvasProps {
  width?: string | number;
  height?: string | number;
  animatePath?: boolean;
  duration?: number;
  elapsed?: number;
  damping?: number;
  frequency?: number;
  amplitude?: number;
}

export const StringCanvas: React.FC<StringCanvasProps> = ({
  width = '100%',
  height = 70,
  animatePath = false,
  duration = 3000,
  elapsed: initialElapsed = 0,
  damping = 0.5,
  frequency = 0.3,
  amplitude = 40,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [widthPx, setWidthPx] = useState<number | undefined>();
  const [heightPx, setHeightPx] = useState<number | undefined>();
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number>(initialElapsed);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    let animationFrameId: number;

    const drawString = (time: number) => {
      if (!context) return;
      context.clearRect(0, 0, widthPx || 0, heightPx || 0);
      context.beginPath();
      context.moveTo(0, (heightPx || 0) / 2);
      const elapsed = time - (startTime || 0);
      const dampingValue = Math.exp((-elapsed / duration) * damping);
      const frequencyValue = frequency * dampingValue;
      const amplitudeValue = amplitude * dampingValue;

      for (let x = 0; x <= (widthPx || 0); x += 1) {
        const y =
          (heightPx || 0) / 2 +
          amplitudeValue *
            Math.sin(
              (x / (widthPx || 0)) * Math.PI * 2 * frequencyValue * elapsed,
            );
        context.lineTo(x, y);
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
      context.clearRect(0, 0, widthPx || 0, heightPx || 0);
      context.beginPath();
      context.moveTo(0, (heightPx || 0) / 2);
      context.lineTo(widthPx || 0, (heightPx || 0) / 2);
      context.strokeStyle = 'white';
      context.stroke();
    };

    drawInitialString();

    if (isAnimating) {
      setStartTime(performance.now());
      animationFrameId = requestAnimationFrame(drawString);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    widthPx,
    heightPx,
    isAnimating,
    startTime,
    duration,
    damping,
    frequency,
    amplitude,
  ]);

  useEffect(() => {
    if (animatePath) {
      const path = { x: 0, y: heightPx || 0 };
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(path, {
        x: (widthPx || 0) / 2 - 50,
        duration: 2,
        onUpdate: () => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const context = canvas.getContext('2d');
          if (!context) return;
          context.clearRect(0, 0, widthPx || 0, heightPx || 0);
          context.beginPath();
          context.moveTo(0, (heightPx || 0) / 2);
          context.lineTo(path.x, path.y);
          context.strokeStyle = 'white';
          context.stroke();
        },
      })
        .to(path, {
          x: (widthPx || 0) / 2 + 50,
          y: (heightPx || 0) / 2 - 50,
          duration: 1,
          onUpdate: () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            if (!context) return;
            context.clearRect(0, 0, widthPx || 0, heightPx || 0);
            context.beginPath();
            context.moveTo(0, (heightPx || 0) / 2);
            context.lineTo(path.x, path.y);
            context.strokeStyle = 'white';
            context.stroke();
          },
        })
        .to(path, {
          x: widthPx || 0,
          y: (heightPx || 0) / 2,
          duration: 2,
          onUpdate: () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            if (!context) return;
            context.clearRect(0, 0, widthPx || 0, heightPx || 0);
            context.beginPath();
            context.moveTo(0, (heightPx || 0) / 2);
            context.lineTo(path.x, path.y);
            context.strokeStyle = 'white';
            context.stroke();
          },
        });
    }
  }, [animatePath, widthPx, heightPx]);

  const handleClick = () => {
    setIsAnimating(true);
    setStartTime(performance.now());
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof width === 'string' && width.endsWith('%')) {
        setWidthPx(window.innerWidth * (parseInt(width, 10) / 100));
      } else {
        setWidthPx(width as number);
      }
      if (typeof height === 'string' && height.endsWith('%')) {
        setHeightPx(window.innerHeight * (parseInt(height, 10) / 100));
      } else {
        setHeightPx(height as number);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={widthPx}
      height={heightPx}
      style={{ width, height }}
      onClick={handleClick}
    />
  );
};
