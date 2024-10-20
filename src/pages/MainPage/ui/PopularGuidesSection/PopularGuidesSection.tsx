import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PopularGuidesSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Card, CardVariant } from '@/entities/Card/ui/Card';
import { GridContainer } from '@/shared/ui/GridContainer/GridContainer';
import { getRouteCourse } from '@/shared/const/router';
import { useGetCursesQuery } from '../../model/api';
import { Colors } from '@/shared/const/colors';
import { Text } from '@/shared/ui/Text';
import { FontSize } from '@/shared/const/textStyles';
import { Container } from '@/shared/ui/Container/Container';

interface PopularGuidesSectionProps {
  className?: string;
}

export const PopularGuidesSection = ({
  className,
}: PopularGuidesSectionProps) => {
  const { data } = useGetCursesQuery();

  return (
    <Section
      // padding="0 200px"
      height={1300}
      background={Colors.White}
      className={classNames(cls.PopularGuidesSection, {}, [className])}
    >
      <Container>
        <Text
          margin="0 0 60px 0"
          align="center"
          h2
          size={FontSize.XL}
          className={cls.title}
        >
          Сделайте первый шаг на пути <br /> к УСПЕХУ
        </Text>
        <GridContainer customColumns={[1, 1, 2, 2, 2]} gap="32px">
          <Card
            backgroundColor={Colors.Gradient5_2}
            cardVariant={CardVariant.GUIDE}
            imageSrc="https://veronikastepanova.com/build/assets/6006687902-BLoRCZar.jpg"
            title="«Мне можно!»"
            price="4 900₽"
            oldPrice="7 350₽"
            link="/course/:id"
            justifySelf="center"
            alignSelf="center"
          />
          <Card
            backgroundColor={Colors.Gradient5_2}
            cardVariant={CardVariant.GUIDE}
            imageSrc="https://veronikastepanova.com/build/assets/6006687902-BLoRCZar.jpg"
            title="«Мне можно!»"
            price="4 900₽"
            oldPrice="7 350₽"
            justifySelf="center"
            link={getRouteCourse('4')}
          />
          <Card
            backgroundColor={Colors.Gradient5_2}
            cardVariant={CardVariant.GUIDE}
            imageSrc="https://veronikastepanova.com/build/assets/6006687902-BLoRCZar.jpg"
            title="«Мне можно!»"
            price="4 900₽"
            oldPrice="7 350₽"
            justifySelf="center"
            link={getRouteCourse('3')}
          />
          <Card
            backgroundColor={Colors.Gradient5_2}
            cardVariant={CardVariant.GUIDE}
            imageSrc="https://veronikastepanova.com/build/assets/6006687902-BLoRCZar.jpg"
            title="«Мне можно!»"
            price="4 900₽"
            oldPrice="7 350₽"
            justifySelf="center"
            link={getRouteCourse('1')}
          />
        </GridContainer>
      </Container>
    </Section>
  );
};
