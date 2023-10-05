import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import OurStore from './pages/OurStore';
import SingleProduct from './pages/SingleProduct';

function App() {
   return <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="product" element={<OurStore />} />
               <Route path="product/:id" element={<SingleProduct />} />
               <Route path="compare-product" element={<CompareProduct />} />
               <Route path="wishlist" element={<Wishlist />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </>
}

export default App;
