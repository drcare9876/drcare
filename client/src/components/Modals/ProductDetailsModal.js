import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ProductDetailsModal = ({ open, onClose, product }) => {
  if (!product) return null;

  const discountedPrice = (product.mrp * 0.79).toFixed(2);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="product-details-title"
      aria-describedby="product-details-description"
    >
      <Box sx={style}>
        <Typography id="product-details-title" variant="h6" component="h2" style={{ color: 'black' }}>
          {product.name}
        </Typography>
        <div style={{ backgroundColor: '#F3F7FB', color: '#24AEB1', borderRadius: 20, padding: 5, display: 'inline-block', }}>
          {product.brand}
        </div>
        <div style={{ backgroundColor: '#F3F7FB', color: '#24AEB1', borderRadius: 20, padding: 5, display: 'inline-block' }}>
          {product.tags}
        </div>
        <CardMedia
          component="img"
          height="194"
          image={product.image}
          alt={product.name}
        />
        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
          {`₹${product.mrp}`}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {`₹${discountedPrice}`} <span style={{ color: red[500] }}>(21% off)</span>
        </Typography>
        <Typography
          id="product-details-description"
          sx={{
            mt: 2,
            maxHeight: 100,
            overflowY: 'auto',
            fontSize: '0.875rem',
            color: 'black',
          }}
        >
          {product.description}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ProductDetailsModal;
