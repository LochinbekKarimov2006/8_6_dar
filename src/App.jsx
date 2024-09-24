import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AboutUser from './pages/User'
import Data from './pages/Data'
import Data2 from './pages/Data2'
import Bord from './pages/Bord'
function App() {
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
  return (
    <RouterProvider router={router}/>
  )
}

export default App