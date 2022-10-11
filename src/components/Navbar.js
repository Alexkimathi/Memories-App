import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
    <div className="site-title">
      <NavLink to={"/#"} exact="true">
        Art-Hub
      </NavLink>
    </div>
    
  </nav>
  )
}

export default Navbar