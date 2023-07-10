import React from 'react'
import Sidebar from '../conponents/Sidebar'
import Header from '../conponents/Header'
import Footer from '../conponents/Footer'
const Page1 = () => {
  return (
    <>
     <Header/>
    <Sidebar/>
    <Footer/>
    <div className='theme-changes container'>
      <div className='secondary-text'>
        <h1>This is page 1</h1>
        <p>This section has secondary text color and background color selected from the settings Background Color</p>
    </div>
    </div>
    </>
  )
}

export default Page1