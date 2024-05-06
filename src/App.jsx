import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Login from './Components/Pages/login';
import Home from './Components/Pages/Home';
import Search from './Components/Pages/Search';
import Banner from './Components/Pages/banner';
import Faculty from './Components/Pages/faculty';






function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path ='/Search' element ={<Search/>}/>
   
      </Routes>
      <Banner/>
      <Faculty/>
   
      
    </div>
  )
}

export default App;












