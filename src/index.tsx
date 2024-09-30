import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './app/providers/StoreProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '@/app/styles/index.scss';

const clientId =
  '387774286843-ltq12q54gienljk3ieq3ibe4lkj7u80a.apps.googleusercontent.com';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </StoreProvider>
  </BrowserRouter>,
);
