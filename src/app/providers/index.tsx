import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootLayout from '@/shared/ui/RootLayout';
import { store } from '../store/store';

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootLayout>{children}</RootLayout>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
