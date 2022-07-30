import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../Section/Section.css"

export default function Korzinka() {
  const [data, setData]=useState([])
  const [count, setCount]=useState(1)
  let sum = 0
  

  useEffect(()=>{
    let date = localStorage.getItem("massiv")
    setData(JSON.parse(date))
  }, [data])
  
    

  function delFun(index){
    let massiv = []
      massiv = data
      massiv.splice(index,(1))
      localStorage.setItem("massiv",JSON.stringify(massiv))
      console.log(massiv)
  }
  
  return (
    <div className='container '>
      {
        (data.length) && data.map((e,index)=>{
          sum= sum + Number(e.cost)
          return(
            <div key={index} className="card karzinka ">
              <div className='img__karzika'>
                <img width="300" className='shadow' src={e.img_src} alt="" />
              </div>
              <div className='count__section'>
                <div>
                  <h4>Nomi: {e.name}</h4>
                  <h4>Narxi: {e.cost}$</h4>
                </div>
                <div className='count__item'>
                <button onClick={()=>{
                  (count>1)? (setCount(count-1)): (setCount(count))
                  }} className='btn btn-danger'>-</button>
                <button className='btn'>{count}</button>
                <button onClick={()=>{setCount(count+1)}} className='btn btn-primary'>+</button>
                </div>
              </div>
              <div className='icon__del' onClick={()=>delFun(index)}>
                <i  onClick={()=>delFun(index)} class="fa-solid fa-trash"></i>
              </div>
            </div>
          )
        })
      }
      <div>UMUMIY SUMMA <b>{sum*count}</b></div>
    </div>
  )
}
