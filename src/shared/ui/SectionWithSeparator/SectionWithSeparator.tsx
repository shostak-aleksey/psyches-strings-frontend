// shared/ui/SectionWithSeparator/SectionWithSeparator.tsx
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SectionWithSeparator.module.scss';

interface SectionWithSeparatorProps {
  className?: string;
  topSection: React.ReactNode;
  bottomSection: React.ReactNode;
  separatorColor: string;
}

export const SectionWithSeparator = ({
  className,
  topSection,
  bottomSection,
  separatorColor,
}: SectionWithSeparatorProps) => {
  return (
    <div className={classNames(cls.SectionWithSeparator, {}, [className])}>
      <div className={cls.topSection}>{topSection}</div>
      <div className={cls.separatorWrapper}>
        <div
          className={cls.separator}
          style={{ backgroundColor: separatorColor }}
        ></div>
      </div>
      <div className={cls.bottomSection}>{bottomSection}</div>
    </div>
  );
};
