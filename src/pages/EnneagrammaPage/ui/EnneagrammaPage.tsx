import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EnneagrammaPage.module.scss';
import { Page } from '@/shared/ui/Page/Page';
import { Section } from '@/shared/ui/Section';
import { Container } from '@/shared/ui/Container/Container';

interface EnneagrammaPageProps {
  className?: string;
}

export const EnneagrammaPage = ({ className }: EnneagrammaPageProps) => {
  return (
    <Page className={classNames(cls.EnneagrammaPage, {}, [className])}>
      <Section><Container >EnneagrammaPage</Container></Section>
    </Page>
  );
};
