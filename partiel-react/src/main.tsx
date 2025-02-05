import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Movies from './pages/Movies.tsx';
import Popular from './pages/Popular.tsx';
import Series from './pages/Series.tsx';
import Error from './pages/Error.tsx';
import Layout from './components/Layout.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApiClientProvider } from './services/ApiClientProvider.tsx';
import MovieDetails from './components/MovieDetails.tsx';
import DetailLayout from './components/DetailLayout.tsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiClientProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Movies />} />
              <Route path="popular" element={<Popular />} />
              <Route path="series" element={<Series />} />
              <Route path="*" element={<Error />} />
            </Route>
            <Route path="/" element={<DetailLayout />}>
              <Route path='/detail/:id/:type' element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ApiClientProvider>
  </StrictMode>,
)
