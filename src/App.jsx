import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/login';
import Home from './Components/Pages/Home';
import Search from './Components/Pages/Search';





function App() {
  const token = localStorage.getItem('token');

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/> 
        {
          token == null && <Route path='/login' element={<Login/>}/> 
        }
        <Route path ='/Search' element ={<Search/>}/>
      </Routes>   
    </div>
  )
}

export default App;












