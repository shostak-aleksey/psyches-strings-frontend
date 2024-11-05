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
        smooth: 1.3, // Adjust the smoothness level as needed
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
