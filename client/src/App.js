import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext'; // Import the CartProvider
import Landing from './components/Landing/Landing';
import ProductHandler from './components/Product/ProductHandler';
import Checkout from './components/Checkout/Checkout';
import OptionHandler from './components/Options/OptionHandler';
import BrandHandler from './components/OurBrand/BrandHandler';
import { Analytics } from "@vercel/analytics/react";
import About from './components/About/About';
import AuthPage from './components/Auth/AuthPage';
import CanopyHandler from './components/Canopy/Index';
import CanopyForm from './components/Canopy/CanopyForm';
import CanopyData from './components/Canopy/CanopyData';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/SignUp';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/product" element={<ProductHandler />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/options" element={<OptionHandler />} />
          <Route path="/brand" element={<BrandHandler />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/canopy' element={<CanopyHandler />} />
          <Route path='/canopy/form' element={<CanopyForm />} />
          <Route path='/canopy/data' element={<CanopyData />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
