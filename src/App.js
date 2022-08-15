import './App.css';
import { useNavigate } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Section/Home"
import Korzinka from './Section/Karzinka';
import {Routes,Route} from "react-router-dom"

function App() {
  const nav = useNavigate
  const one = 0
  


  if(one===0){
    nav("/")
  }
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/korzinka" element={<Korzinka/>}/>
      </Routes>
    </div>
    
  );
}

export default App;








