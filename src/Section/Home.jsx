import React,{useState,useEffect} from 'react'
import Axios from "axios"
import "./Section.css"
import  Carousel from '../Component/Carusel'
import Kategory from '../Component/Kategory'

export default function Home() {

  const [arre,setArre]=useState([])
  const [select, setSelect]=useState([])
  const [d_none, setD_none]=useState()

  useEffect(()=>{
    getStudent()
  }, [])

 function getStudent(){
  Axios.get("http://myjson.dit.upm.es/api/bins/hbue")
    .then(ress=>{
      setArre(ress.data)
      setSelect(ress.data)
    })
    .catch(err =>{
      console.log(err);
  })
  }

  const searchFun=(e)=>{
    if(e.target.value){
      setD_none("d-none")
    }else{
      setD_none("d-block")
    }
    
    let search = select.filter((i)=>{
      return(i.name.toLowerCase().includes((e.target.value).toLowerCase()))
    })
    setArre(search)
  }

  const selectFun=(e)=>{
    if(e.target.value){
      setD_none("d-none")
    }else{
      setD_none("d-block")
    }
    let cat = select.filter((i)=>{
      return(i.category===e.target.value)
    })
    setArre(cat)
    if(e.target.value===""){
      setArre(select)
    }
  }

  const danFun=(e)=>{
    let dan = arre.filter((i)=>{
      return(Number(i.cost)>e)
    })
    setArre(dan)
  }

  const gachaFun=(e)=>{
    if(e>100000){
      let gacha = arre.filter((i)=>{
        return(Number(i.cost)<e) 
      })
      setArre(gacha)
    }
  }

  function addFun(e){
    let massiv = []
    let localDate = localStorage.getItem("massiv")
    if(localDate){
      massiv = JSON.parse(localDate)
      massiv.push(e)
      localStorage.setItem("massiv",JSON.stringify(massiv))
    }else{
      massiv.push(e)
      localStorage.setItem("massiv",JSON.stringify(massiv))
    }
    
  }
  return (
    <div className='container'>
        <div className='form__section'>
          <div className='select__section'>
            <select class="select-control" onChange={(e)=>selectFun(e)} aria-label="Default select example">
              <option value="">All</option>
              <option value="Krasovka">Oбуви</option>
              <option value="futbolka">Одежды</option>
              <option value="soat">Aксессуары</option>
            </select>
          </div>
          <div className='dan__gacha'>
            <input onChange={(e)=>danFun(e.target.value)} placeholder='start' className='form-control' type="text" />
            <input onChange={(e)=>gachaFun(e.target.value)} placeholder='end' className='form-control' type="text" />
          </div>
      </div>
      <div className='sorch__section'>
        <input onChange={(e)=>searchFun(e)} placeholder='Search' type="search" className='form-control'/>
      </div>
      <div className={d_none}>
        <Carousel/>
        <Kategory/>
      </div>
      <div className='cards'> 
      {
        (arre.length >0) ? (
          arre.map((e,index)=>{
            return(
              <div className=''>
                <div className='main__card' key={index}>
                  <img src={e.img_src} alt="Rosim" />
                  <p>{e.cost} $</p>
                  <h6><b>{e.name}</b></h6>
                </div>
                <div className='add__btn'>
                  <button onClick={()=>addFun(e)} className='btn btn-success'>Добавлять</button>
                </div>
              </div>
            )
          })
        ):
        (
          <h4 >loading...</h4>
        )
      }
      </div>
    </div>
  )
}
