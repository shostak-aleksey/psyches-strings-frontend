import { classNames as c } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/router';
import { TransitionLayout } from '@/shared/layouts/TransitionLayout/TransitionLayout';
import { Footer } from '@/widgets/Footer/Footer';
import { SmoothScrollWrapper } from './providers/SmoothScrollProvider';

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  return (
    <main className={c('app', {}, [className])}>
      <TransitionLayout />
      <Navbar />
      <SmoothScrollWrapper>
        <AppRouter />
        <Footer />
      </SmoothScrollWrapper>
    </main>
  );
};
