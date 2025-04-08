import { Route, Routes } from 'react-router-dom';
import { SpecialistsPage } from '@/pages/specialists';
import { RootLayout } from '@/shared/ui/RootLayout';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<SpecialistsPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
