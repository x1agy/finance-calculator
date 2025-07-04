import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import { AppLayout } from './layouts/AppLayout';
import { Calculator } from './pages/Calculator/Calculator.tsx';

const router = createBrowserRouter([
  {
    path: '/finance-calculator',
    element: (
      <AppLayout>
        <App />
      </AppLayout>
    ),
  },
  {
    path: '/finance-calculator/calculator',
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
