import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Login from './Components/Pages/login';
import Home from './Components/Pages/Home';




function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/> 
      </Routes>
    </div>
  )
}

export default App;












