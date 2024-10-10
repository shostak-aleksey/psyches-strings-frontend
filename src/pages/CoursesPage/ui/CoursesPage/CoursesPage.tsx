import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CoursesPage.module.scss';
import { Section } from '@/shared/ui/Section';
import { Colors } from '@/shared/const/colors';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { FlexContainer } from '@/shared/ui/FlexContainer/FlexContainer';

interface CoursesPageProps {
  className?: string;
}

export const CoursesPage = ({ className }: CoursesPageProps) => {
  return (
    <Section
      height={900}
      background={Colors.Gradient5_2}
      padding="100px 0 0 0"
      className={classNames(cls.CoursesPage, {}, [className])}
    >
      <FlexContainer
        dir="column"
        justify="start"
        align="center"
        gap="20px"
        padding="20px"
        className={classNames(cls.TitleFlexContainer)}
      >
        <h2 className={cls.title}>Все видео</h2>
        <StringCanvas width={1500} height={100} />
        <p>
          На данной странице доступны все видео из всех разделов. Вы можете
          воспользоваться поиском и отсортировать видео по интересующему вас
          критерию.
        </p>
      </FlexContainer>
    </Section>
  );
};
