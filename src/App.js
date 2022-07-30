import './App.css';
import { Outlet,useNavigate } from "react-router-dom"
import Navbar from "./Component/Navbar"
import { useState } from 'react';

function App() {
  const nav = useNavigate
  const [one, setOne] = useState(0)
  if(one===0){
    nav("/home")
  }
  
  return (
    <div className="App">
     <Navbar/>
     <Outlet/>
     
    </div>
    
  );
}

export default App;
