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
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';

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
               <Route path="login" element={<Login />} />
               <Route path="signup" element={<Signup />} />
               <Route path="forgot-password" element={<Forgotpassword />} />
               <Route path="reset-password" element={<Resetpassword />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </>
}

export default App;
