import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import MainLeaut2 from './layout/MainLeaut2';
import Home from './pages/Home';
import AboutUser from './pages/User';
import Data from './pages/Data';
import Data1 from './pages/Data1';
import Data2 from './pages/Data2';
import Qoshish from './pages/Qoshish';
import Provayder from './components/Provayder';
import Login from './pages/Login';
import Register from './pages/Register';
import { MyContext } from './context/useContext';
import Data3 from './pages/Data3';
import Data4 from './pages/Data4';

function App() {
  const [data, setData] = useState(true);
  const [user,setUser]=useState(null)
  const { value, setValue } = useContext(MyContext);
  const datas=localStorage.getItem("token")
 if(datas){
  setValue(datas)
 }
  useEffect(()=>{
    setUser(value)
  },[value])
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Provayder user={user}>
        {data ? <MainLayout /> : <MainLeaut2 />}
      </Provayder>,
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
          path: '/data1',
          element: <Data1 />,
        },
        {
          path: '/data2',
          element: <Data2 />,
        },
        {
          path:"/data3",
          element:<Data3/>
        },
        {
          path:"/data4",
          element:<Data4/>
        }
      ],
    },
    {
      path:"/login",
      element :user?<Navigate to="/"/>:<Login/>
    },
    {
      path:"/sigin",
      element:user?<Navigate to="/"/>:<Register/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

