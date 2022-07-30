import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import Home from "./Section/Home"
import About from "./Section/About"
import {BrowserRouter,Routes,Route} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about/:id" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
