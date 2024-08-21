import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './app/providers/StoreProvider';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
);
