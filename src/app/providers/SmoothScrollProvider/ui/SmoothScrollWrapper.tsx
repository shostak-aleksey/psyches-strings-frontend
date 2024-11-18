import { useEffect } from 'react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
interface SmoothScrollWrapperProps {
  children?: React.ReactNode;
}

export const SmoothScrollWrapper = ({ children }: SmoothScrollWrapperProps) => {
  useEffect(() => {
    if (!ScrollTrigger.isTouch) {
      const smoother = ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 2, // Adjust the smoothness level as needed
        speed: 0.7,
        effects: true,
      });

      return () => {
        smoother.kill(); // Clean up the smoother on component unmount
      };
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="content">{children}</div>
    </div>
  );
};
