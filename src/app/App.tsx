// import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames as c } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/router';

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  return (
    <div className={c('app', {}, [className])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
