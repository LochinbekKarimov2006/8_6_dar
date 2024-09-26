import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Menyu from '../components/Menyu'

function MainLayout() {
  return (
    <div className='flex flex-col  '>
           <Navbar/>
         <div className='w-[100%] flex'>
        <Menyu/>
           <div className='overflow-y-auto h-[91vh] w-full'>
           <Outlet/>
           </div>
         </div>
    </div>
   
  )
}

export default MainLayout