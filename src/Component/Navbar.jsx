import React from 'react'
import "./Component.css"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='container'>
      <div className='navbar nav_list'>
        <Link to="/home"><h3>Home</h3></Link>
        <h3>About</h3>
        <h3>Servics</h3>
        <h3>Contact</h3>
      </div>

      <div className='main'> <h4>nav_list</h4></div>
    </div>
  )
}
