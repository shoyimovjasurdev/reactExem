import React ,{useState, useEffect}from 'react';
import 'swiffy-slider'
import "swiffy-slider/css"
import 'swiffy-slider/src/swiffy-slider'
import axios from 'axios'

const Carousel = () => {
    const [data, setdata] = useState("");
    const [data1, setdata1] = useState("");

    useEffect(() => {
        axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
        .then(res =>{
         setdata(res.data);
        })
     }, []);

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/dohr")
        .then(ress =>{
            setdata1(ress.data)
        })
     }, []);

    return (
        <div className='container my-4'>
        <div className="" data-slider-nav-autoplay-interval="2000">
        <div className="slider-container slider-item-show3 py-4">
            {
                (data.length>0) && data.map((item,index)=>{
                    return(
                        <div key={index}>
                            <img src={item.img_src}  loading="lazy" alt="" />
                        </div>
                    )
                })
            }
        </div>

        
        <div className="swiffy-slider slider-item-ratio slider-item-ratio-21x9 slider-nav-visible slider-nav-animation my-4" id="slider1">
                <ul className="slider-container ">
                    {
                        (data1.length>0) && data1.map((box ,index)=>{
                            return(
                                <div key={index} className="mx-5 px-5">
                                    <img src={box.img_src} loading="lazy" alt="" />
                                </div>
                            )
                        })
                    }
                </ul>
                
                
                
                <div className="slider-indicators slider-indicators-square d-none d-md-flex">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>

                <div className="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
                    <button className="active" aria-label="Go to slide"></button>
                    
                </div>
            </div>
            
        </div>
        </div>
    )
}
export default Carousel;