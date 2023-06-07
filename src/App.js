import React from 'react';
import './style.css';
import { createBrowserRotuer, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRotuer([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
