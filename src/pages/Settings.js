import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const Settings = () => {
    const [primaryColor,setPrimaryColor]=useState(localStorage.getItem("primaryColor")?localStorage.getItem("primaryColor"):"#007bff");
    const [secondaryColor,setSecondaryColor]=useState(localStorage.getItem("secondaryColor")?localStorage.getItem("secondaryColor"):"#6c757d");
    const [backgroundColor,setBackgroundColor]=useState(localStorage.getItem("backgroundColor")?localStorage.getItem("backgroundColor"):"#ffffff");
    const [fontSize,setFontSize]=useState(localStorage.getItem("fontSize")?localStorage.getItem("fontSize"):"16");
    const [font,setFont]=useState(localStorage.getItem("font")?localStorage.getItem("font"):"Arial")

  return (
    <>
    <div>
      <label>Primary Color:</label>
      <input type="color" value={primaryColor} onChange={e =>{ setPrimaryColor(e.target.value); localStorage.setItem("primaryColor",e.target.value)}} />

      <label>Secondary Color:</label>
      <input type="color" value={secondaryColor} onChange={e => { setSecondaryColor(e.target.value);localStorage.setItem("secondaryColor",e.target.value)}} />

      <label>Background Color:</label>
      <input type="color" value={backgroundColor} onChange={e => { setBackgroundColor(e.target.value);localStorage.setItem("backgroundColor",e.target.value)}} />

      <label>Font Size:</label>
      <input type="number" value={fontSize.replace('px', '')} onChange={e => { setFontSize(e.target.value);localStorage.setItem("fontSize",`${e.target.value}px`)}} />

      <label>Font:</label>
      <select value={font} onChange={e => { setFont(e.target.value);localStorage.setItem("font",e.target.value)}}>
        <option value='Arial'>Arial</option>
        <option value='Roboto'>Roboto</option>
        <option value='Lato'>Lato</option>
        <option value='Cursive'>Cursive</option>
      </select>
      
    </div>
    <br/>
    <Link to="/" >Back to page 0</Link>
    
    </>
  )
}

export default Settings