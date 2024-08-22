// import { MainLayout } from '@/shared/layouts/MainLayout';
// import { LoginForm } from '@/features/AuthByEmail';
import { LoginForm } from '@/features/AuthByUsername';
import { MainPage } from '@/pages/MainPage';
import { classNames as c } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Navbar } from '@/widgets/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import { AppRouter } from './providers/router';

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  return (
    <div className={c('app', {}, [className])}>
      {/* <MainLayout /> */}
      <Navbar />
      {/* <LoginForm /> */}
      <AppRouter />
    </div>
  );
};
