import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import Home from "./Section/Home"
import Korzinka from './Section/Karzinka';
import {BrowserRouter,Routes,Route} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/korzinka" element={<Korzinka/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
