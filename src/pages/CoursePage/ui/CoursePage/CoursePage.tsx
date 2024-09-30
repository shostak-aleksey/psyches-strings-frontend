import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CoursePage.module.scss';
import { Section } from '@/shared/ui/Section';
import { useParams } from 'react-router-dom';

interface CoursePageProps {
  className?: string;
}

export const CoursePage = ({ className }: CoursePageProps) => {
  const { id } = useParams<{ id: string }>();
  return (
    <Section className={classNames(cls.ProfilePage, {}, [className])}>
      <h1>Profile Page</h1>
      <p>User ID: {id}</p>
    </Section>
  );
};
