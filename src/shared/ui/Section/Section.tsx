import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Section.module.scss';
import { TestProps } from '@/shared/types/tests';
import { Colors } from '@/shared/const/colors';
import { screenSize } from '@/shared/const/screenSize';

interface SectionProps extends TestProps {
  className?: string;
  children?: ReactNode;
  width?: screenSize | number;
  height?: number;
  padding?: string;
  margin?: string;
  background?: Colors;
  backgroundImage?: string;
  backgroundVideo?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const Section = memo((props: SectionProps) => {
  const {
    className,
    children,
    width = '100%',
    height = '100vh',
    padding = 0,
    margin = 0,
    background = Colors.Gradient5_2,
    backgroundImage,
    backgroundVideo,
    ref,
  } = props;

  const style = {
    padding,
    margin,
    background,
    width,
    height,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section
      style={style}
      className={classNames(cls.Section, {}, [className])}
      data-testid={props['data-testid'] ?? 'Section'}
      ref={ref}
    >
      {backgroundVideo && (
        <video
          src={backgroundVideo}
          autoPlay
          muted
          loop
          className={cls.backgroundVideo}
          style={{
            objectFit: 'contain',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
      {children}
    </section>
  );
});
