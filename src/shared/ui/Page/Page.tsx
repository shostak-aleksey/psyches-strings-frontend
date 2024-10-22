// src/shared/ui/Page/Page.tsx
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { Colors } from '@/shared/const/colors';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
interface PageProps {
  className?: string;
  children?: ReactNode;
  background?: Colors;
  padding?: string;
}

export const Page = memo((props: PageProps) => {
  const { className, children, background = Colors.Gradient1, padding } = props;

  const style = {
    background,
    padding,
    height: 'auto',
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 2,
        effects: true,
        autoResize: true,
      });
    }
  }, []);
  return (
    <div className="wrapper">
      <div className="content">
        <div style={style} className={classNames(cls.Page, {}, [className])}>
          {children}
        </div>{' '}
      </div>
    </div>
  );
});
