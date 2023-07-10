import React from 'react'
import Sidebar from '../conponents/Sidebar'
import Header from '../conponents/Header'
import Footer from '../conponents/Footer'
const Page2 = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Footer/>
    <div className='theme-changes container'>
      <div className='text-dark'>
        <h1>This is page 2</h1>
        <p>This section has black text color and background color selected from the settings Background Color</p>
    </div>
    </div>
    </>
  )
}

export default Page2