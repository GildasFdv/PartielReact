import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Movies from './pages/Movies.tsx';
import Popular from './pages/Popular.tsx';
import Series from './pages/Series.tsx';
import Layout from './components/Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path="popular" element={<Popular />} />
          <Route path="series" element={<Series />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
