// import { MainLayout } from '@/shared/layouts/MainLayout';
// import { LoginForm } from '@/features/AuthByEmail';
import { classNames as c } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';

interface AppProps {
  className?: string;
}

export const App = ({ className }: AppProps) => {
  return (
    <div className={c('app', {}, [className])}>
      {/* <MainLayout /> */}
      <Navbar />
      {/* <LoginForm /> */}
    </div>
  );
};
