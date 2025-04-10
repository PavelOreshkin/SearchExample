import { Route, Routes } from 'react-router-dom';
import { SpecialistsPage } from '@/pages/specialists';
import { Providers } from './providers';

export const App = () => (
  <Providers>
    <Routes>
      <Route path="/" element={<SpecialistsPage />} />
    </Routes>
  </Providers>
);
