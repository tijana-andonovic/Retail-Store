import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css'
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import Products from './Products';
import ProductsDetails from './ProductsDetails';
import LogIn from './LogIn';
import Register from './Register';
import Cart from './Cart';
import Checkout from './Checkout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='products/:id' element={<ProductsDetails />} />
          <Route path='login' element={<LogIn />} />
          <Route path='register' element={<Register />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
