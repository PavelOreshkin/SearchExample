import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RootLayout from '@/shared/ui/RootLayout';
import { store } from '../store/store';
import { Toaster } from 'react-hot-toast';

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootLayout>{children}</RootLayout>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'red',
              color: '#fff',
            },
          }}
        />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
