import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/assets/styles/global.css';

import { AuthProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import SearchResults from './pages/SearchResults';
import PlantPrintPage from './pages/PlantPrintPage';
import SobrePage from './pages/SobrePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busca" element={<SearchResults />} />
          <Route path="/planta/:id/pdf" element={<PlantPrintPage />} />
          <Route path="/sobre" element={<SobrePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
