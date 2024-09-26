import React, { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AboutUser from './pages/User'
import MainLeaut2 from './layout/MainLeaut2'
import Qoshish from './pages/Qoshish'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AboutUser from "./pages/User";
import ErrorPage from "./pages/ErrorPage";
import Data from "./pages/Data";
import Data2 from "./pages/Data2";
function App() {
  const [data,setData]=useState(false)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <PrivateRoute element={<Home />} />,
        },
        {
          path: "/user",
          element: <PrivateRoute element={<AboutUser />} />,
        },
        {
          path: "/data",
          element: <PrivateRoute element={<Data />} />,
        },
        {
          path: "/data2",
          element: <PrivateRoute element={<Data2 />} />,
        },
      ]
    }
  ])
  const router2=createBrowserRouter([
    {
      path:"/",
      element:<MainLeaut2/>,
      children:[
        {
          path:"/",
          element:<Qoshish/>
        }
      ]
    }
  ])
  return (
    <>
    {data&&<RouterProvider router={router}/>}
    {!data&&<RouterProvider router={router2}/>}
    </>
  )
       
}

export default App;
