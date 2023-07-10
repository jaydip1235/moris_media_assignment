import React,{useState,useEffect} from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Page0 from "./pages/Page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Settings from "./pages/Settings";
import './style.scss';

function App() {
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
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page0 />} />
          <Route path='/1' element={<Page1 />} />
          <Route path='/2' element={<Page2 />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
     {/* <div>
      <label>Primary Color:</label>
      <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} />

      <label>Secondary Color:</label>
      <input type="color" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)} />

      <label>Background Color:</label>
      <input type="color" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} />

      <label>Font Size:</label>
      <input type="number" value={fontSize.replace('px', '')} onChange={e => setFontSize(e.target.value + 'px')} />

      <label>Font:</label>
      <select value={font} onChange={e => setFont(e.target.value)}>
        <option value='Arial'>Arial</option>
        <option value='Roboto'>Roboto</option>
        <option value='Lato'>Lato</option>
      </select>
    </div> */}

    {/* <div className="theme-changes">

    <h1 className="primary">Primary Color Header</h1>
      <h2 className="secondary">Secondary Color Header</h2>

      <p>This is a sample paragraph</p>
      </div> */}
    </>
  );
}

export default App;
