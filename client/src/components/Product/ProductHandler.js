import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import Product from "./Product";
import Footer from "../Landing/Footer";
import CartDrawer from '../Product/CartDrawer';

const ProductHandler = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Nav onCartClick={handleDrawerOpen} />
      <Product onCartClick={handleDrawerOpen} />
      <Footer />
      <CartDrawer open={drawerOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default ProductHandler;
