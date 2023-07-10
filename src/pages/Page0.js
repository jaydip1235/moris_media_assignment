import React,{useState,useEffect} from 'react'
import Sidebar from '../conponents/Sidebar'
import Header from '../conponents/Header'
import Footer from '../conponents/Footer'
import '../style.scss'
const Page0 = () => {
  const [primaryColor,setPrimaryColor]=useState(localStorage.getItem("primaryColor"));
  const [secondaryColor,setSecondaryColor]=useState(localStorage.getItem("secondaryColor"));
  const [backgroundColor,setBackgroundColor]=useState(localStorage.getItem("backgroundColor"));
  const [fontSize,setFontSize]=useState(localStorage.getItem("fontSize"));
  const [font,setFont]=useState(localStorage.getItem("font"))


  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    document.documentElement.style.setProperty('--font-size', fontSize);
    document.documentElement.style.setProperty('--main-font', font);
  }, [primaryColor, secondaryColor, backgroundColor, fontSize, font]);
  return (
    <>
    <Header/>
    <Sidebar/>
    <Footer/>
    <div className='theme-changes container'>
      <div className='primary-text'>
        <h1>This is page 0</h1>
        <p>This section has primary text color and background color selected from the settings Background Color</p>
    </div>
    </div>
    </>
  )
}

export default Page0