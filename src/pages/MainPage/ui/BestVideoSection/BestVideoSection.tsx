import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BestVideoSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import { Card, CardVariant } from '@/shared/ui/Card/Card';
import { GridContainer } from '@/shared/ui/GridContainer/GridContainer';
import { getRouteCourse } from '@/shared/const/router';
import { useGetCursesQuery } from '../../model/api';
import { CardStyledComponents } from '@/shared/ui/Card/CardStyledComponents';
import { CardMaterialUi } from '@/shared/ui/Card/CardMaterialUi';
import { CardTailwind } from '@/shared/ui/Card/CardTailwind';

interface BestVideoSectionProps {
  className?: string;
}

export const BestVideoSection = ({ className }: BestVideoSectionProps) => {
  const { data } = useGetCursesQuery();

  console.log(useGetCursesQuery(), 'aa');
  console.log('data', data);

  return (
    <Section
      background={Colors.ColorBg}
      className={classNames(cls.BestVideoSection, {}, [className])}
    >
      <GridContainer direction="row" justify="center" gap="16">
        <Card
          cardVariant={CardVariant.CLEAR}
          imageSrc="https://avatars.mds.yandex.net/i?id=8073f3ff613c84a07de7822dd96f5e14d2ae5d62-12325159-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link="/course/:id"
        />
        <CardStyledComponents
          cardVariant={CardVariant.CLEAR}
          imageSrc="https://avatars.mds.yandex.net/i?id=5fe657e56d85dd55eb83c4a805820c222348f1f3-8312318-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('1')}
        />
        <CardTailwind
          cardVariant={CardVariant.CLEAR}
          imageSrc="https://avatars.mds.yandex.net/i?id=0b9315290af2bf68938107ccd369ee7ad084fd7f9594cd2f-12593547-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('3')}
        />
        <CardMaterialUi
          cardVariant={CardVariant.CLEAR}
          imageSrc="https://avatars.mds.yandex.net/i?id=9458344798e1e399afa3dcc5f8309446-3936338-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('4')}
        />
      </GridContainer>
    </Section>
  );
};
