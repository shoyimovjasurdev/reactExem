import React,{useState,useEffect} from 'react'
import "./Component.css"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

export default function Navbar() {
  const [data, setData]=useState([])
  const select = useSelector(select=>select.card)
  

  useEffect(()=>{
    let date = localStorage.getItem("massiv")
    setData(JSON.parse(date))
   return
  }, [])

  return (
    <div className='container'>
      <div className='navbar nav_list'>
        <Link to="/"><i class="fa-solid fa-bars fs-4 my-4 "></i></Link>
        <Link to="/korzinka"><i class="fa-solid fa-cart-shopping fs-4 my-4"><sup>{select.length}</sup></i>
        </Link>
      </div>
    </div>
  )
}
