import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Public = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-[1166px]'>
       <Navbar/>
        <Outlet  />
      </div>
     
    </div>
  )
}

export default Public