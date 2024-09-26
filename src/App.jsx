import React, { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AboutUser from './pages/User'
import Data from './pages/Data'
import Data2 from './pages/Data2'
import Bord from './pages/Bord'
import MainLeaut2 from './layout/MainLeaut2'
import Qoshish from './pages/Qoshish'
function App() {
  const [data,setData]=useState(false)
  const router=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/user",
          element:<Data/>

        },
        {
          path:"/1",
          element:<Data2/>

        },
        {
          path:"/2",
          element:<Bord/>

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

export default App