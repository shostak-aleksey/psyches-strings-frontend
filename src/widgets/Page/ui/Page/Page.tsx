import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useMedia } from 'use-media';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';

const MAX_WIDTH_DESKTOP = 1170;
const MAX_WIDTH_TABLET = 768;
const MAX_WIDTH_MOBILE = 480;

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;
  const isDesktop = useMedia({ minWidth: MAX_WIDTH_DESKTOP });
  const isTablet = useMedia({
    minWidth: MAX_WIDTH_TABLET,
    maxWidth: MAX_WIDTH_DESKTOP - 1,
  });
  const isMobile = useMedia({ maxWidth: MAX_WIDTH_MOBILE });

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const getMaxWidth = () => {
    if (isDesktop) {
      return MAX_WIDTH_DESKTOP;
    }
    if (isTablet) {
      return MAX_WIDTH_TABLET;
    }
    if (isMobile) {
      return MAX_WIDTH_MOBILE;
    }
    return undefined;
  };

  return (
    <main
      ref={wrapperRef}
      style={{ maxWidth: getMaxWidth() }}
      className={classNames(cls.Page, {}, [className])}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
    </main>
  );
});
