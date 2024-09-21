import React from 'react'
import Navbar from '../components/Navbar'
import Menyu from '../components/Menyu'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='h-[100vh] bg-slate-500'>
        <Navbar/>
        <div>
            <Menyu/>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout