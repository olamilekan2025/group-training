import { Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/navbar';
import Footer from './Footer-page/footer';
import Services from "./Routes/Services_page/services";
import Shop from "./Routes/Shop_page/shop";
import ShopDetails from "./Routes/ShopDetails/shopDetails";
import Blog from "./Routes/Blog_page/blog";
import Faq from "./Routes/Faq_page/faq";
import ScrollToTop from './util/ScrollToTop-page/scrollToTop';
import Home from './Routes/Home_Page/Home';
import CartPage from './Routes/CartPage/cart';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopDetails/:id" element={<ShopDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
