import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import MainLeaut2 from './layout/MainLeaut2';
import Home from './pages/Home';
import AboutUser from './pages/User';
import Data from './pages/Data';
import Data2 from './pages/Data2';
import Qoshish from './pages/Qoshish';

function App() {
  const [data, setData] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: data ? <MainLayout /> : <MainLeaut2 />,
      children: [
        {
          path: '/',
          element: data ? <Home /> : <Qoshish />,
        },
        {
          path: '/user',
          element: <AboutUser />,
        },
        {
          path: '/data',
          element: <Data />,
        },
        {
          path: '/data2',
          element: <Data2 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

