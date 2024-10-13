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
      height={500}
      background={Colors.White}
      className={classNames(cls.BestVideoSection, {}, [className])}
    >
      <Text h2 size={FontSize.XL} className={cls.title}>
        Лучшие видео
      </Text>

      <GridContainer direction="column" justify="center" gap="32px">
        <Card
          backgroundColor={Colors.Gradient5_2}
          cardVariant={CardVariant.VIDEO}
          imageSrc="https://wallpapers.com/images/hd/jasper-national-park-of-canada-co717bykhndcxbqq.jpg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link="/course/:id"
        />
        <Card
          backgroundColor={Colors.Gradient5_2}
          cardVariant={CardVariant.VIDEO}
          imageSrc="https://i.pinimg.com/736x/5c/de/19/5cde19f2da42d37378b9334bde67b082.jpg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('4')}
        />
        <Card
          backgroundColor={Colors.Gradient5_2}
          cardVariant={CardVariant.VIDEO}
          imageSrc="https://i.pinimg.com/736x/8d/33/80/8d3380e3d13f368c156df01ada661766.jpg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('3')}
        />
        <Card
          backgroundColor={Colors.Gradient5_2}
          cardVariant={CardVariant.VIDEO}
          imageSrc="https://main-cdn.sbermegamarket.ru/big1/hlr-system/141/511/747/652/146/600011877697b0.jpeg"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('1')}
        />
      </GridContainer>
    </Section>
  );
};
