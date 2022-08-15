import React from 'react'

import "../Section/Section.css"
import {useSelector,useDispatch} from "react-redux"

export default function Korzinka() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.card)
  let allSum = 0

  function deleteFun(e){
    dispatch({type:"del",piload:e})
  }
  
  function incFun(e){
    dispatch({type:"inc",piload:e})
  }
  function decFun(e){
    dispatch({type:"dec",piload:e})
  }






  
  
  return (
    <div className='container '>
      {
        (state.length) && state.map((e,index)=>{
          allSum=allSum+e.cost*e.count
          return(
            <div key={index} className="karzinka ">
              <div className='img__karzika'>
                <img width="300" className='shadow' src={e.img_src} alt="" />
              </div>
              <div className='count__section'>
                <div>
                  <h4>Nomi: {e.name}</h4>
                  <h4>Narxi: {e.cost*e.count}$</h4>
                </div>
                <div className='count__item'>
                <button onClick={()=>decFun(e)} className='btn btn-danger'>-</button>
                <button className='btn'>{e.count}</button>
                <button onClick={()=>incFun(e)} className='btn btn-primary'>+</button>
                </div>
              </div>
              <div className='icon__del'>
                <i onClick={()=>deleteFun(index)} class="fa-solid fa-trash"></i>
              </div>
            </div>
          )
        })
      }
      <div>UMUMIY SUMMA: {allSum} <b></b></div>
    </div>
  )
}
