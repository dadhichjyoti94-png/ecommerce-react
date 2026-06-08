import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css'
import Home from './components/Home'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';

import Commonlayout from './Commonlayout';
// import ProductListing from './components/Productlisting';
import ProductListing from './components/ProductListing';
import Productdetail from './components/Productdetail'



createRoot(document.getElementById('root')).render(
  <>
  
  <BrowserRouter>
  <Routes>
    <Route element={<Commonlayout/>}>
      <Route path='about-us' element={<Aboutus/>}/>

    </Route>
    <Route path='/' element={<Home/>}/>
    
    <Route path='contact-us' element={<Contactus/>}/>
    <Route path='products/:slug?' element={<ProductListing/>}/>
    <Route path='product-details/:id' element={<Productdetail />} />
    
  </Routes>
  </BrowserRouter>
  


  
    
  </>,
)
