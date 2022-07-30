import React,{useState,useEffect} from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'
import "./Section.css"

export default function Home() {

  const [arre,setArre]=useState([])

  useEffect(()=>{
    getStudent()
  }, [])

 function getStudent(){
  Axios.get("http://myjson.dit.upm.es/api/bins/j8nl")
    .then(ress=>{
      setArre(ress.data)
    })
    .catch(err =>{
      console.log(err);
  })
  }
  return (
    <div className='row'>
      {
        (arre.length >0) ? (
          arre.map((e,index)=>{
            return(
              <div className='card shadow col-2 mt-4' key={index}>
                <img src="" alt="Rosim" />
                <Link state={{id:e.id}} to={`/about/${e.id}`}><button className='btn btn-primary' >Ko'rish</button></Link>
              </div>
            )
          })
        ):
        (
          <h4 >loading...</h4>
        )
      }
    </div>
  )
}
