import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map(item => 
          item.name === product.name 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      return updatedCart;
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.name !== product.name);
      return updatedCart;
    });
  };

  const updateQuantity = (product, quantity) => {
    setCart((prevCart) => {
      let updatedCart;
      if (quantity <= 0) {
        updatedCart = prevCart.filter(item => item.name !== product.name);
      } else {
        updatedCart = prevCart.map(item => 
          item.name === product.name 
            ? { ...item, quantity } 
            : item
        );
      }
      return updatedCart;
    });
  };

  const cartCount = cart.length;
  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.mrp.replace('₹', '')) * item.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cart, cartCount, totalAmount, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => useContext(CartContext);
