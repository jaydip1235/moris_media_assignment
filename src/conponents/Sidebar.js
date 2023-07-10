import React from 'react'
import {Link} from 'react-router-dom'
import '../style.scss'
const Sidebar = () => {
  return (
    <>
  <div className='theme-changes'>
  <div className="sidebar theme-changes secondary-background primary-text">
   SideBar has primary text and secondary background (except the Goto text)
   <br/><br/><br/><br/>
   <Link to="/">Goto Page 0</Link>
   <br/> <br/>
   <Link to="/1">Goto Page 1</Link>
   <br/> <br/>
   <Link to="/2">Goto Page 2</Link>
   <br/> <br/>
   <Link to="/settings">Goto Settings</Link>
  </div>
  </div>
    </>
  )
}

export default Sidebar