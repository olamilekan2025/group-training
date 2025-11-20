import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/navbar';
import Footer from './Footer-page/footer';
import About from "./Routes/About_page/about"
import Services from "./Routes/Services_page/services";
import Product from "./Routes/Product_page/product";
import Pricing from "./Routes/Pricing_page/pricing";
import Faq from "./Routes/Faq_page/faq";
import Company from "./Routes/Company-page/company";
import Team from "./Routes/Team-page/team"
import History from './Routes/History-page/history';
import './App.css'
import Home from './Routes/Home_Page/Home';

function App() {


  return (
    <>
      <Navbar />

      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/history" element={<History />} />

        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
