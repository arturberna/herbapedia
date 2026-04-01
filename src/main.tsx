import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/assets/styles/global.css';

import { AuthProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import SearchResults from './pages/SearchResults';
import PlantPrintPage from './pages/PlantPrintPage';
import SobrePage from './pages/SobrePage';
import FerramentasPage from './pages/FerramentasPage';
import EmConstrucaoPage from './pages/EmConstrucaoPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busca" element={<SearchResults />} />
          <Route path="/planta/:id/pdf" element={<PlantPrintPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/ferramentas" element={<FerramentasPage />} />
          <Route path="/em-construcao" element={<EmConstrucaoPage title="Página em Construção" />} />
          <Route path="/rede" element={<EmConstrucaoPage title="Rede Colaborativa de Pesquisadores" />} />
          <Route path="/materiais" element={<EmConstrucaoPage title="Materiais Didáticos" />} />
          <Route path="/jogo" element={<EmConstrucaoPage title="Jogo Digital de Etnobotânica" />} />
          <Route path="/jogo-fisico" element={<EmConstrucaoPage title="Jogo Físico de Cartas Botânicas" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
