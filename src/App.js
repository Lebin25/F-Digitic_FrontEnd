import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import OurStore from './pages/OurStore';
import SingleProduct from './pages/SingleProduct';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';

function App() {
   return <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="product" element={<OurStore />} />
               <Route path="product/:id" element={<SingleProduct />} />
               <Route path="blogs" element={<Blog />} />
               <Route path="blog/:id" element={<SingleBlog />} />
               <Route path="compare-product" element={<CompareProduct />} />
               <Route path="wishlist" element={<Wishlist />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </>
}

export default App;
