import React from 'react'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import { Outlet } from 'react-router'

export default function Commonlayout() {
  return (
    <>
    <Header/>

    <Outlet/>
    <Footer/>
      
    </>
  )
}

