import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Button } from '@mui/material';
import { useCart } from '../Context/CartContext';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ open, onClose }) => {
  const { cart, cartCount, totalAmount, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (product, quantity) => {
    updateQuantity(product, quantity);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List sx={{ width: 300 }}>
        <ListItem>
          <IconButton edge="end" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Cart
          </Typography>
        </ListItem>
        {cart.map((item) => (
          <ListItem key={item.name}>
            <img src={item.image} alt={item.name} style={{ width: 50, height: 50, marginRight: 10 }} />
            <ListItemText
              primary={item.name}
              secondary={`Price: ${item.mrp} | Quantity: ${item.quantity}`}
            />
            <IconButton onClick={() => handleQuantityChange(item, item.quantity + 1)}>
              <AddIcon />
            </IconButton>
            <IconButton onClick={() => handleQuantityChange(item, item.quantity - 1)}>
              <RemoveIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => removeFromCart(item)}>
              <CloseIcon />
            </IconButton>
          </ListItem>
        ))}
        <ListItem>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Total: ₹{totalAmount}
          </Typography>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onClose();
              navigate('/checkout');
            }}
          >
            Checkout
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CartDrawer;
