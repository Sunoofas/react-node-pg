
import './App.css';
 import Cart from './components/Cart';
import Header from './components/header';
import Products from './components/products';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
function App() {

  
  return (
    <div className="container">
       
        
       
       <Routes>
      <Route path="/" element={<Products/>}>
          <Route path="/cart" element={<Cart/>} />  
        
      </Route>
      <Route path='login' element={<Login />}/>
      </Routes>
      
    </div>
  );
}

export default App;
