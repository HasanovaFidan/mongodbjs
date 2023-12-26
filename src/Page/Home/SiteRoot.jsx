import React from 'react'
import Header from '../../Layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Layout/Footer'

const SiteRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    
    </div>
  )
}

export default SiteRoot
