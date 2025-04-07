import { Route, Routes } from 'react-router-dom';
import { Search } from '@/pages/search';
import { RootLayout } from '@/shared/ui/RootLayout';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
