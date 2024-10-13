import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TestsPage.module.scss';
import { Section } from '@/shared/ui/Section';
import BackgroundImage1 from '@/shared/assets/BackgroundImage3.jpg';

import { Colors } from '@/shared/const/colors';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { CardVariant } from '@/entities/Card/Card';
import { Button } from '@mui/material';
import { CardMaterialUi } from '@/entities/Card/CardMaterialUi';
interface TestsPageProps {
  className?: string;
}

export const TestsPage = ({ className }: TestsPageProps) => {
  return (
    <>
      <Section
        className={classNames(cls.TestsPage, {}, [className])}
        backgroundImage={BackgroundImage1}
      >
        <h2 className={cls.title}>TestsPage</h2>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
          <CardMaterialUi
            cardVariant={CardVariant.CLEAR}
            imageSrc={''}
            title={'Тебу нужно это купить'}
            price={'100р'}
            link={''}
          ></CardMaterialUi>
          <CardMaterialUi
            cardVariant={CardVariant.CLEAR}
            imageSrc={''}
            title={'Тебу нужно это купить'}
            price={'100р'}
            link={''}
          ></CardMaterialUi>
          <CardMaterialUi
            cardVariant={CardVariant.CLEAR}
            imageSrc={''}
            title={'Тебу нужно это купить'}
            price={'100р'}
            link={''}
          ></CardMaterialUi>
        </div>
      </Section>
      <Section
        height={900}
        className={cls.section}
        background={Colors.Gradient5_2}
        padding="100px 0 0 0"
      >
        <div>a</div>
      </Section>
    </>
  );
};
