import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import { Button } from '@/shared/ui/Button';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Text } from '@/shared/ui/Text';

interface HeaderSectionProps {
  className?: string;
}

export const HeaderSection = ({ className }: HeaderSectionProps) => {
  return (
    <Section
      background={Colors.Gradient1}
      className={classNames(cls.TestsPage, {}, [className])}
    >
      <Text h2 className={cls.title}>
        TestsPage
      </Text>
      <StringCanvas
        // bezierPoints={[50, 100, 150, 50]}
        width={1500}
        height={100}
      />
      <Button>aaaaaa</Button>
      <p className={classNames(cls.text, {}, ['text-xl'])}>
        {' '}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        consequuntur placeat voluptate! Labore corporis dicta placeat quaerat
        doloremque accusamus{' '}
      </p>
    </Section>
  );
};
