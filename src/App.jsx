import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AboutUser from './pages/User'
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
          element:<AboutUser/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App