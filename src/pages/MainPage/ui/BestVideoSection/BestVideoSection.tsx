import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BestVideoSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Card, CardVariant } from '@/entities/Card/Card';
import { GridContainer } from '@/shared/ui/GridContainer/GridContainer';
import { getRouteCourse } from '@/shared/const/router';
import { useGetCursesQuery } from '../../model/api';
import { Colors } from '@/shared/const/colors';
import { Text } from '@/shared/ui/Text';
import { FontSize } from '@/shared/const/textStyles';

interface BestVideoSectionProps {
  className?: string;
}

export const BestVideoSection = ({ className }: BestVideoSectionProps) => {
  const { data } = useGetCursesQuery();

  console.log(useGetCursesQuery(), 'aa');
  console.log('data', data);

  return (
    <Section
      background={Colors.Gradient5_2}
      className={classNames(cls.BestVideoSection, {}, [className])}
    >
      <Text h2 size={FontSize.XL} className={cls.title}>
        Лучшие видео
      </Text>

      <GridContainer direction="column" justify="center" gap="32px">
        <Card
          cardVariant={CardVariant.MARATHON}
          imageSrc="https://veronikastepanova.com/build/assets/88282325-CctJvOhS.jpg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link="/course/:id"
        />
        <Card
          cardVariant={CardVariant.VIDEO}
          imageSrc="https://veronikastepanova.com/build/assets/88282325-CctJvOhS.jpg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('4')}
        />
        <Card
          cardVariant={CardVariant.VIDEO}
          imageSrc="https://veronikastepanova.com/build/assets/88282325-CctJvOhS.jpg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('3')}
        />
        <Card
          cardVariant={CardVariant.VIDEO}
          imageSrc="https://veronikastepanova.com/build/assets/88282325-CctJvOhS.jpg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('1')}
        />
      </GridContainer>
    </Section>
  );
};
