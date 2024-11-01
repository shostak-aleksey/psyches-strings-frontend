import React, { useRef, useEffect, useState } from 'react';

interface StringCanvasProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  animatePath?: boolean;
  justifySelf?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  alignSelf?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  duration?: number;
  elapsed?: number;
  damping?: number;
  frequency?: number;
  amplitude?: number;
  speed?: number;
  animated?: boolean | { amplitude: number; frequency: number; speed: number };
  animated2?: boolean | { amplitude: number; frequency: number; speed: number };
  animated3?: boolean | { amplitude: number; frequency: number; speed: number };
  animated4?: boolean | { amplitude: number; frequency: number; speed: number };
  margin?: string; // New prop added for margin
}

export const StringCanvas: React.FC<StringCanvasProps> = ({
  width = '100%',
  height = 70,
  elapsed: initialElapsed = 0,
  duration = 3000,
  damping = 1.5,
  frequency = 0.5,
  amplitude = 20,
  speed = 1,
  animated = false,
  animated2 = false,
  animated3 = false,
  animated4 = false,
  justifySelf,
  alignSelf,
  margin, // New prop used here
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
        if (animated) {
          startPassiveAnimation();
        } else if (animated2) {
          startPassiveAnimation2();
        } else if (animated3) {
          startPassiveAnimation3();
        } else if (animated4) {
          startPassiveAnimation4();
        } else {
          drawInitialString();
        }
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

    const startPassiveAnimation = () => {
      if (!context) return;
      const passiveAmplitude =
        typeof animated === 'object' ? animated.amplitude : amplitude;
      const passiveFrequency =
        typeof animated === 'object' ? animated.frequency : frequency;
      const passiveSpeed =
        typeof animated === 'object' ? animated.speed : speed;
      const passiveDraw = (time: number) => {
        context.clearRect(0, 0, widthPx || 0, heightPx || 0);
        context.beginPath();
        context.moveTo(0, (heightPx || 0) / 2);
        for (let x = 0; x <= (widthPx || 0); x += 1) {
          const y =
            (heightPx || 0) / 2 +
            passiveAmplitude *
              Math.sin(
                ((x + time * passiveSpeed) / (widthPx || 0)) *
                  Math.PI *
                  2 *
                  passiveFrequency,
              );
          context.lineTo(x, y);
        }
        context.strokeStyle = 'white';
        context.stroke();
        animationFrameId = requestAnimationFrame(passiveDraw);
      };
      animationFrameId = requestAnimationFrame(passiveDraw);
    };

    const startPassiveAnimation2 = () => {
      if (!context) return;
      const passiveAmplitude =
        typeof animated2 === 'object' ? animated2.amplitude : amplitude;
      const passiveFrequency =
        typeof animated2 === 'object' ? animated2.frequency : frequency;
      const passiveSpeed =
        typeof animated2 === 'object' ? animated2.speed : speed;
      const passiveDraw = (time: number) => {
        context.clearRect(0, 0, widthPx || 0, heightPx || 0);
        context.beginPath();
        context.moveTo(0, (heightPx || 0) / 2);
        for (let x = 0; x <= (widthPx || 0); x += 1) {
          const y =
            (heightPx || 0) / 2 +
            passiveAmplitude *
              Math.sin(
                (((widthPx || 0) - x + time * passiveSpeed) / (widthPx || 0)) *
                  Math.PI *
                  2 *
                  passiveFrequency,
              );
          context.lineTo(x, y);
        }
        context.strokeStyle = 'white';
        context.stroke();
        animationFrameId = requestAnimationFrame(passiveDraw);
      };
      animationFrameId = requestAnimationFrame(passiveDraw);
    };

    const startPassiveAnimation3 = () => {
      if (!context) return;
      const passiveAmplitude =
        typeof animated3 === 'object' ? animated3.amplitude : amplitude;
      const passiveFrequency =
        typeof animated3 === 'object' ? animated3.frequency : frequency;
      const passiveSpeed =
        typeof animated3 === 'object' ? animated3.speed : speed;
      const passiveDraw = (time: number) => {
        context.clearRect(0, 0, widthPx || 0, heightPx || 0);
        context.beginPath();
        context.moveTo(0, (heightPx || 0) / 2);
        for (let x = 0; x <= (widthPx || 0); x += 1) {
          const y1 =
            (heightPx || 0) / 2 +
            passiveAmplitude *
              Math.sin(
                ((x + time * passiveSpeed) / (widthPx || 0)) *
                  Math.PI *
                  2 *
                  passiveFrequency,
              );
          const y2 =
            (heightPx || 0) / 2 +
            passiveAmplitude *
              Math.sin(
                (((widthPx || 0) - x + time * passiveSpeed) / (widthPx || 0)) *
                  Math.PI *
                  2 *
                  passiveFrequency,
              );
          const y = (y1 + y2) / 2; // Combine both waves
          context.lineTo(x, y);
        }
        context.strokeStyle = 'white';
        context.stroke();
        animationFrameId = requestAnimationFrame(passiveDraw);
      };
      animationFrameId = requestAnimationFrame(passiveDraw);
    };

    const startPassiveAnimation4 = () => {
      if (!context) return;
      const passiveAmplitude =
        typeof animated4 === 'object' ? animated4.amplitude : amplitude;
      const passiveFrequency =
        typeof animated4 === 'object' ? animated4.frequency : frequency;
      const passiveSpeed =
        typeof animated4 === 'object' ? animated4.speed : speed;
      const passiveDraw = (time: number) => {
        context.clearRect(0, 0, widthPx || 0, heightPx || 0);
        context.beginPath();
        context.moveTo(0, (heightPx || 0) / 2);
        for (let x = 0; x <= (widthPx || 0); x += 1) {
          const y =
            (heightPx || 0) / 2 +
            passiveAmplitude *
              Math.sin(
                ((x + time * passiveSpeed) / (widthPx || 0)) *
                  Math.PI *
                  2 *
                  passiveFrequency,
              );
          context.lineTo(x, y);
        }
        context.strokeStyle = 'white';
        context.stroke();
        animationFrameId = requestAnimationFrame(passiveDraw);
      };
      animationFrameId = requestAnimationFrame(passiveDraw);
    };

    if (isAnimating) {
      setStartTime(performance.now());
      animationFrameId = requestAnimationFrame(drawString);
    } else if (animated) {
      startPassiveAnimation();
    } else if (animated2) {
      startPassiveAnimation2();
    } else if (animated3) {
      startPassiveAnimation3();
    } else if (animated4) {
      startPassiveAnimation4();
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
    speed,
    animated,
    animated2,
    animated3,
    animated4,
  ]);

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
      style={{ width, height, justifySelf, alignSelf, margin }} // Added margin here
      onClick={handleClick}
    />
  );
};
