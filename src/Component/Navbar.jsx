import React,{useState,useEffect} from 'react'
import "./Component.css"
import {Link} from "react-router-dom"

export default function Navbar() {
  const [data, setData]=useState([])
  

  useEffect(()=>{
    let date = localStorage.getItem("massiv")
    setData(JSON.parse(date))
   return
  }, [data])

  return (
    <div className='container'>
      <div className='navbar nav_list'>
        <Link to="/home"><i class="fa-solid fa-bars fs-4 my-4 "></i></Link>
        <Link to="/korzinka"><i class="fa-solid fa-cart-shopping fs-4 my-4"><sup>{data.length}</sup></i>
        </Link>
      </div>
    </div>
  )
}
