import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Menyu from '../components/Menyu'

function MainLayout() {
  return (
    <div className='flex h-[100vh] '>
        <Menyu/>
         <div className='w-[100%]'>
           <Navbar/>
           <div className='overflow-y-auto h-[80vh]'>
           <Outlet/>
           </div>
         </div>
    </div>
   
  )
}

export default MainLayout