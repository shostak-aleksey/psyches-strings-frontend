import { classNames as c } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/router';
import { TransitionLayout } from '@/shared/layouts/TransitionLayout/TransitionLayout';

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  return (
    <main className={c('app', {}, [className])}>
      <TransitionLayout />
      <Navbar />
      <AppRouter />
    </main>
  );
};
