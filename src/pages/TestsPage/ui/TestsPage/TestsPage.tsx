import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestsPage.module.scss';
import { Section } from '@/shared/ui/Section';

import { Colors } from '@/shared/const/colors';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { Card, CardVariant } from '@/entities/Card/ui/Card';
import { Button } from '@mui/material';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/shared/ui/Page/Page';
import { HeaderSection } from '../HeaderSection/HeaderSection';
interface TestsPageProps {
  className?: string;
}

export const TestsPage = ({ className }: TestsPageProps) => {
  return (
    <Page background={Colors.Gradient1}>
      <HeaderSection />
      <Section
        background={Colors.Gradient1}
        height={900}
        className={cls.section}
        padding="100px 0 0 0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
          <Card
            cardVariant={CardVariant.VIDEO}
            imageSrc={''}
            title={'Тебу нужно это купить'}
            price={'100р'}
            link={''}
          ></Card>
          <Card
            cardVariant={CardVariant.VIDEO}
            imageSrc={''}
            title={'Тебу нужно это купить'}
            price={'100р'}
            link={''}
          ></Card>
          <Card
            cardVariant={CardVariant.VIDEO}
            imageSrc={''}
            title={'Тебу нужно это купить'}
            price={'100р'}
            link={''}
          ></Card>
        </div>
        <div>a</div>
      </Section>
    </Page>
  );
};
