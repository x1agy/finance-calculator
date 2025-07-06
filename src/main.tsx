import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AppLayout } from './layouts/AppLayout';
import { Calculator } from './pages/Calculator/Calculator.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <App />
      </AppLayout>
    ),
  },
  {
    path: '/finance-calculator',
    element: (
      <AppLayout>
        <App />
      </AppLayout>
    ),
  },
  {
    path: '/calculator',
    element: (
      <AppLayout>
        <Calculator />
      </AppLayout>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
