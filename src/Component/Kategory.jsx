import React ,{useState, useEffect}from 'react';
import axios from 'axios'
import "./Component.css"

export default function Kategory() {

  const [data2, setdata2] = useState("");

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/i6j3")
        .then(rees =>{
            setdata2(rees.data)
        })
     }, []);
  return (
    <div className='container Katigory_section'>
      <div className='Katigory_section row'>
        <div className='kat__text'><h3>Категории</h3></div>
          {
            (data2.length > 0) && data2.map((box1 , index) =>{
              return(
                <div className='myCards card col-sm-5 col-md-3' key={index}>
                  <div><img src={box1.img_src} alt="" /></div>
                  <div><b><h5>{box1.name}</h5></b></div>
                </div>
              ) 
            })
          }
      </div> 
    
    </div>
  )
}
