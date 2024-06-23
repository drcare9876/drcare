import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext'; // Import the CartProvider
import Landing from './components/Landing/Landing'
import ProductHandler from './components/Product/ProductHandler';
import Checkout from './components/Checkout/Checkout';
import Options from './components/Options/Options';
import OptionHandler from './components/Options/OptionHandler';
import BrandHandler from './components/OurBrand/BrandHandler';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product" element={<ProductHandler />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/options" element={<OptionHandler />}/>
          <Route path="/brand" element={<BrandHandler />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

const Home = () => <div>Home</div>;

export default App;
