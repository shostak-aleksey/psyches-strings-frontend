import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';
import { Section } from '@/shared/ui/Section';
import { Card, CardVariant } from '@/shared/ui/Card/Card';
import { Colors } from '@/shared/const/colors';

interface AboutPageProps {
  className?: string;
}

export const AboutPage = ({ className }: AboutPageProps) => {
  return (
    <Section
      height={900}
      background={Colors.Gradient5_2}
      className={classNames(cls.AboutPage, {}, [className])}
    >
      <h2 className={cls.title}>About Us</h2>
      <div className={cls.content}>
        <Card
          cardVariant={CardVariant.CLEAR}
          imageSrc="path/to/image.jpg"
          title="Our Story"
          description="Learn more about our journey."
          link="/our-story"
          price={''}
        />
        {/* Add more cards as needed */}
      </div>
    </Section>
  );
};
