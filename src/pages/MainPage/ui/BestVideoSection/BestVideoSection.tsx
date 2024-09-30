// BestVideoSection.tsx
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BestVideoSection.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import { useState } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import { GridContainer } from '@/shared/ui/GridContainer/GridContainer';
import { FlexContainer } from '@/shared/ui/FlexContainer/FlexContainer';
import { getRouteCourse } from '@/shared/const/router';

interface BestVideoSectionProps {
  className?: string;
}

const generateRandomWavePath = () => {
  const randomValue = () => Math.random() * 100;
  return `M0 ${randomValue()} Q 25 ${randomValue()} 50 ${randomValue()} T 100 ${randomValue()} V 100 H 0 Z`;
};

export const BestVideoSection = ({ className }: BestVideoSectionProps) => {
  const [wavePath, setWavePath] = useState(generateRandomWavePath());
  const handleClick = () => {
    setWavePath(generateRandomWavePath());
  };

  return (
    <Section
      separatorHeight={200}
      background={Colors.ColorBg}
      separatorColor={Colors.ColorBg}
      className={classNames(cls.BestVideoSection, {}, [className])}
    >
      BestVideoSection
      <div className={cls.separatorWrapper} onClick={handleClick}>
        <svg
          className={cls.separator}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d={wavePath} className={cls.wavePath} />
        </svg>
      </div>
      <FlexContainer direction="row" justify="center" gap="16">
        <Card
          imageSrc="https://avatars.mds.yandex.net/i?id=8073f3ff613c84a07de7822dd96f5e14d2ae5d62-12325159-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link="/course/:id"
        />
        <Card
          imageSrc="https://avatars.mds.yandex.net/i?id=5fe657e56d85dd55eb83c4a805820c222348f1f3-8312318-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('1')}
        />
        <Card
          imageSrc="https://avatars.mds.yandex.net/i?id=0b9315290af2bf68938107ccd369ee7ad084fd7f9594cd2f-12593547-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('3')}
        />{' '}
        <Card
          imageSrc="https://avatars.mds.yandex.net/i?id=9458344798e1e399afa3dcc5f8309446-3936338-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('4')}
        />{' '}
        <Card
          imageSrc="https://avatars.mds.yandex.net/i?id=7cb577fccf8b7354b5248cb8101dd0941be238e2-9181167-images-thumbs&n=13"
          title="«Мне можно!»"
          price="4 900₽"
          oldPrice="7 350₽"
          link={getRouteCourse('5')}
        />{' '}
      </FlexContainer>
    </Section>
  );
};
