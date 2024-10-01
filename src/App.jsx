import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import AboutUser from './pages/User';
import Data from './pages/Data';
import Data2 from './pages/Data2';
import Qoshish from './pages/Qoshish';
import Provayder from './components/Provayder';
import Login from './pages/Login';
import Register from './pages/Register';
import { MyContext } from './context/useContext';
import Data3 from './pages/Data3';
import Data4 from './pages/Data4';

function App() {
  const [user, setUser] = useState(null);
  const { value, setValue } = useContext(MyContext);
  const datas=localStorage.getItem('data')

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setValue(token);  // Tokenni contextga saqlash
    }
  }, [setValue]);
  useEffect(() => {
    setUser(value); 
  }, [value]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Provayder user={user}>
          { <MainLayout /> }
        </Provayder>
      ),
      children: [
        {
          path:"/",
          element:<Qoshish/>
        },
        {
          path: '/home',
          element:<Home />,
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
        {
          path: '/data3',
          element: <Data3 />,
        },
        {
          path: '/data4',
          element: <Data4 />,
        }
      ],
    },
    {
      path: '/login',
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: '/sigin',
      element: user ? <Navigate to="/" /> : <Register />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
