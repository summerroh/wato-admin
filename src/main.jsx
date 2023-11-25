import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Dashboard from './routes/Dashboard';
import Diagnosis from './routes/Diagnosis';
import Main from './routes/Main';
import { DiseasesContextProvider } from './components/DiseasesContextProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/diagnosis',
    element: <Diagnosis />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DiseasesContextProvider>
      <RouterProvider router={router} />
    </DiseasesContextProvider>
  </React.StrictMode>
);
